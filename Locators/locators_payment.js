const payment_method_locators = {
    card_locator : '[data-testid = bankCard-payment-logo-select-button]',
    fps_locator : '[data-testid = qr-payment-logo-select-button]',
    booking_locator : '[data-testid = booking-payment-logo-select-button]',
    booking_service_locator : '[data-testid = priceTickets-booking-service]',
    booking_and_PM_locator : '[data-testid = bookingPlusPm-payment-logo-select-button]',
}

const payment_buttons_locators = {
    card_button_locator : '[data-testid = "pay-button-PAY(live)"]',
    fps_button_locator : '[data-testid = "pay-button-PAY(live)"]',
    booking_button_locator : '[data-testid = "pay-button-PREBOOK(live)"]',
}

const agreement_locator = '[data-testid = accept-processing-of-personal-data-checkbox]';

const total_price_locators = {
    order_info_price_locator : '[data-testid = orderInfo-totalPrice]',
    total_cost_price_locator : '[data-testid = total-cost]',
}

module.exports = {payment_method_locators, payment_buttons_locators, agreement_locator, total_price_locators};
