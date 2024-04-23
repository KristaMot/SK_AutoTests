const { expect } = require("@playwright/test");

async function insurance_loading (page) {
    const insurances_block = page.locator('id=bookingFormInsurancePackagesContainer');
    try {
        await expect(insurances_block).toBeVisible();
    } catch (error) {
        console.log('Hello');
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

        const result_price = await page.textContent(price_locator);
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
            await submit_locator.click();
        }

        const result_price = await page.textContent(price_locator);
        return {price : result_price}
    };

    return {price : null}
};

//со страховками пока не работает
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
        const price_summary = await page.locator(basket_price_locator);
        expect(page.textContent(basket_price_locator)).toEqual(price);
    };
}

module.exports = {insurance_loading, add_insurance, add_services, check_in_summary};