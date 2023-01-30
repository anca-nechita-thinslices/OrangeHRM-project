const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            "width": 1124,
            "height": 861
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.orangehrm-login-forgot > p"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[4]/p"], ["text/Forgot your password?"]], targetPage, timeout);
        const element = await waitForSelectors([["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.orangehrm-login-forgot > p"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[4]/p"], ["text/Forgot your password?"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 52.09375,
                y: 6.3359375,
            },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Username"], ["#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.oxd-form-row > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div[1]/div/form/div[1]/div/div[2]/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Username"], ["#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.oxd-form-row > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div[1]/div/form/div[1]/div/div[2]/input"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 64.6015625,
                y: 21.8046875,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Username"], ["#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.oxd-form-row > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div[1]/div/form/div[1]/div/div[2]/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Username"], ["#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.oxd-form-row > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div[1]/div/form/div[1]/div/div[2]/input"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "test@test.com")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "test@test.com");
        } else {
            await changeElementValue(element, "test@test.com");
        }
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([["aria/Reset Password[role=\"button\"]"], ["#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.orangehrm-forgot-password-button-container > button.oxd-button.oxd-button--large.oxd-button--secondary.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset"], ["xpath///*[@id=\"app\"]/div[1]/div[1]/div/form/div[2]/button[2]"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Reset Password[role=\"button\"]"], ["#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.orangehrm-forgot-password-button-container > button.oxd-button.oxd-button--large.oxd-button--secondary.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset"], ["xpath///*[@id=\"app\"]/div[1]/div[1]/div/form/div[2]/button[2]"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 79,
                y: 33.8046875,
            },
        });
        await Promise.all(promises);
    }

    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
        for (const selector of selectors) {
            try {
                return await waitForSelector(selector, frame, options);
            } catch (err) {
                console.error(err);
            }
        }
        throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
        const element = await waitForSelectors(selectors, frame, {
            visible: false,
            timeout
        });
        if (!element) {
            throw new Error('The element could not be found.');
        }
        await waitForConnected(element, timeout);
        const isInViewport = await element.isIntersectingViewport({
            threshold: 0
        });
        if (isInViewport) {
            return;
        }
        await element.evaluate(element=>{
            element.scrollIntoView({
                block: 'center',
                inline: 'center',
                behavior: 'auto',
            });
        }
        );
        await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
        await waitForFunction(async()=>{
            return await element.getProperty('isConnected');
        }
        , timeout);
    }

    async function waitForInViewport(element, timeout) {
        await waitForFunction(async()=>{
            return await element.isIntersectingViewport({
                threshold: 0
            });
        }
        , timeout);
    }

    async function waitForSelector(selector, frame, options) {
        if (!Array.isArray(selector)) {
            selector = [selector];
        }
        if (!selector.length) {
            throw new Error('Empty selector provided to waitForSelector');
        }
        let element = null;
        for (let i = 0; i < selector.length; i++) {
            const part = selector[i];
            if (element) {
                element = await element.waitForSelector(part, options);
            } else {
                element = await frame.waitForSelector(part, options);
            }
            if (!element) {
                throw new Error('Could not find element: ' + selector.join('>>'));
            }
            if (i < selector.length - 1) {
                element = (await element.evaluateHandle(el=>el.shadowRoot ? el.shadowRoot : el)).asElement();
            }
        }
        if (!element) {
            throw new Error('Could not find element: ' + selector.join('|'));
        }
        return element;
    }

    async function waitForElement(step, frame, timeout) {
        const count = step.count || 1;
        const operator = step.operator || '>=';
        const comp = {
            '==': (a,b)=>a === b,
            '>=': (a,b)=>a >= b,
            '<=': (a,b)=>a <= b,
        };
        const compFn = comp[operator];
        await waitForFunction(async()=>{
            const elements = await querySelectorsAll(step.selectors, frame);
            return compFn(elements.length, count);
        }
        , timeout);
    }

    async function querySelectorsAll(selectors, frame) {
        for (const selector of selectors) {
            const result = await querySelectorAll(selector, frame);
            if (result.length) {
                return result;
            }
        }
        return [];
    }

    async function querySelectorAll(selector, frame) {
        if (!Array.isArray(selector)) {
            selector = [selector];
        }
        if (!selector.length) {
            throw new Error('Empty selector provided to querySelectorAll');
        }
        let elements = [];
        for (let i = 0; i < selector.length; i++) {
            const part = selector[i];
            if (i === 0) {
                elements = await frame.$$(part);
            } else {
                const tmpElements = elements;
                elements = [];
                for (const el of tmpElements) {
                    elements.push(...(await el.$$(part)));
                }
            }
            if (elements.length === 0) {
                return [];
            }
            if (i < selector.length - 1) {
                const tmpElements = [];
                for (const el of elements) {
                    const newEl = (await el.evaluateHandle(el=>el.shadowRoot ? el.shadowRoot : el)).asElement();
                    if (newEl) {
                        tmpElements.push(newEl);
                    }
                }
                elements = tmpElements;
            }
        }
        return elements;
    }

    async function waitForFunction(fn, timeout) {
        let isActive = true;
        const timeoutId = setTimeout(()=>{
            isActive = false;
        }
        , timeout);
        while (isActive) {
            const result = await fn();
            if (result) {
                clearTimeout(timeoutId);
                return;
            }
            await new Promise(resolve=>setTimeout(resolve, 100));
        }
        throw new Error('Timed out');
    }

    async function changeSelectElement(element, value) {
        await element.select(value);
        await element.evaluateHandle((e)=>{
            e.blur();
            e.focus();
        }
        );
    }

    async function changeElementValue(element, value) {
        await element.focus();
        await element.evaluate((input,value)=>{
            input.value = value;
            input.dispatchEvent(new Event('input',{
                bubbles: true
            }));
            input.dispatchEvent(new Event('change',{
                bubbles: true
            }));
        }
        , value);
    }

    async function typeIntoElement(element, value) {
        const textToType = await element.evaluate((input,newValue)=>{
            if (newValue.length <= input.value.length || !newValue.startsWith(input.value)) {
                input.value = '';
                return newValue;
            }
            const originalValue = input.value;
            input.value = '';
            input.value = originalValue;
            return newValue.substring(originalValue.length);
        }
        , value);
        await element.type(textToType);
    }
}
)().catch(err=>{
    console.error(err);
    process.exit(1);
}
);
