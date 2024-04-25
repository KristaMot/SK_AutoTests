const { expect } = require("@playwright/test");

async function insurance_loading (page) {
    const insurances_block = page.locator('id=bookingFormInsurancePackagesContainer');
    try {
        await expect(insurances_block).toBeVisible();
    } catch (error) {
        console.log("Hello, there aren't insurances");
    }
}

async function add_insurance (locators, page) {
    const {
        visible_locator,
        checkbox_insurance_locator,
        price_locator,
    } = locators;

    const visible_insurance = await page.locator(visible_locator).isVisible();

    if (visible_insurance) {
        await page.locator(checkbox_insurance_locator).check();
        await expect(page.locator(checkbox_insurance_locator)).toBeChecked();

        //const proverka = await page.locator(price_locator).innerText();
        //console.log("проверка другого метода " + proverka)

        let price = await page.locator(price_locator).textContent();
        console.log ("при добавлении " + price);

        //сокращение строки до знака валюты
        let i = 0;
        let result_price = '';
        while (price[i] != "₽") {
            result_price = result_price + price[i];
            i++;
        }
        console.log("после преобразования " + result_price);

        //регулярное выражение для выделения чисел из строки
        result_price = result_price.replace(/[^0-9]/g,"")
        console.log("только числа " + result_price);

        /*попытка заменить неразрывные пробелы на обычные
        let result_1 = res.split('&nbsp').join(' ');
        let result_2 = uni.replace(/U+00a0/g, ' ');
        console.log (result_1);
        */

        return {price : result_price}
    };

    return {price : null}

};

async function add_services (locators, page) {
    const {
        visible_locator,
        add_service_locator,
        submit_locator,
        price_locator,
    } = locators;
    
    const visible_servise = await page.locator(visible_locator).isVisible();

    if (visible_servise) {
        await page.locator(add_service_locator).nth(0).click();

        if (submit_locator != null) {
            await page.locator(submit_locator).click();
        }

        let result_price = await page.locator(price_locator).textContent();
        result_price = result_price.replace(/[^0-9]/g,"")
        console.log("только числа " + result_price);

        return {price : result_price}
    };

    return {price : null}
};

//со страховками тоже работает
async function check_in_summary (prices, locators, page) {
    const {
        visible_locator,
        basket_title_locator,
        basket_price_locator,
    } = locators;

    const {price} = prices;

    const visible = await page.locator(visible_locator).isVisible();

    if (visible) {
        await expect(page.locator(basket_title_locator)).toBeVisible();
        let price_summary = await page.locator(basket_price_locator).textContent();
        console.log(typeof(price_summary)); //string
        console.log ("в саммари " + price_summary);

        //регулярное выражение для выделения чисел из строки
        price_summary = price_summary.replace(/[^0-9]/g,"")
        console.log("только числа " + price_summary);
        console.log("сравниваемый результат " + price);

        /*попытка записать только числа
        let numb;
        for (let i = 0; i < price_summary.length; i++) {
            let symbol = price_summary[i];
            console.log(typeof(symbol)); //string
            if (typeof(symbol) === "number") {
                console.log(symbol);
                numb = [numb, symbol].join();
                //numb = numb + symbol;
            } 
        }
        console.log("только числа " + numb);
        */

        expect(price).toEqual(price_summary);
        //await expect(page.locator(basket_price_locator)).toHaveText(price);
    };
}

module.exports = {insurance_loading, add_insurance, add_services, check_in_summary};