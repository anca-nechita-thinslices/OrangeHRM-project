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
        await scrollIntoViewIfNeeded([["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div > p:nth-child(1)"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div/p[1]"], ["text/Username : Admin"]], targetPage, timeout);
        const element = await waitForSelectors([["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div > p:nth-child(1)"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div/p[1]"], ["text/Username : Admin"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            delay: 703.8999999985099,
            offset: {
                x: 177.1640625,
                y: 13.1328125,
            },
        });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Meta");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("c");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Meta");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Username"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Username"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 62.1640625,
                y: 21.234375,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Username"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Username"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "Admin")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "Admin");
        } else {
            await changeElementValue(element, "Admin");
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Password"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Password"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 71.1640625,
                y: 29.3359375,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Password"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Password"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "bcnbbhdgsfhhsbsnbbv")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "bcnbbhdgsfhhsbsnbbv");
        } else {
            await changeElementValue(element, "bcnbbhdgsfhhsbsnbbv");
        }
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([["aria/Login[role=\"button\"]"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Login[role=\"button\"]"], ["#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"], ["xpath///*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 191.1640625,
                y: 21.3359375,
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
