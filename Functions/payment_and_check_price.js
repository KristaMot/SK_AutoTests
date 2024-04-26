const { expect } = require("@playwright/test");

const {payment_method_locators, payment_buttons_locators, agreement_locator, total_price_locators} = require ('../Locators/locators_payment.js');

async function agreement_with_rules (page) {
    const agreement = page.locator(agreement_locator);

    await agreement.click();
    await expect(agreement).toBeChecked();
}

async function payment (routes, page) {
    const {payment_method} = routes;

    const {
        card_locator,
        fps_locator,
        booking_locator,
        booking_service_locator,
        booking_and_PM_locator,
    } = payment_method_locators;

    const {
        card_button_locator,
        fps_button_locator,
        booking_button_locator,
    } = payment_buttons_locators;

    const {
        order_info_price_locator,
        total_cost_price_locator,
    } = total_price_locators;

    //надо ли здесь? проверка на скрытие кнопки "Бронирование + ПМ"
    await expect(page.locator(booking_and_PM_locator)).toBeHidden();

    if (payment_method == 'card') {
        await page.locator(card_locator).click();
        await expect(page.locator(card_button_locator)).toBeVisible();
    } else if (payment_method === 'fps') {
        await page.locator(fps_locator).click();
        await expect(page.locator(fps_button_locator)).toBeVisible();
    } else if (payment_method === 'booking') {
        await page.locator(booking_locator).click();
        await expect(page.locator(booking_service_locator)).toBeVisible();
        await expect(page.locator(booking_button_locator)).toBeVisible();
    }

    await agreement_with_rules(page);

    let order_info_price = await page.textContent(order_info_price_locator);
    let total_cost_price = await page.textContent(total_cost_price_locator);

    order_info_price = order_info_price.replace(/[^0-9]/g,"");
    total_cost_price = total_cost_price.replace(/[^0-9]/g,"");
    console.log (order_info_price + " = " + total_cost_price);

    expect(order_info_price).toEqual(total_cost_price);
}

module.exports = { payment };