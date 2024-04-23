const SMS_info_locators = {
    visible_locator : '[data-testid = sms-notification-block]',
    add_service_locator : '[data-testid = booking-form-sms-checkbox-checkbox]',
    submit_locator : null,
    price_locator : '[data-testid = booking-form-sms-price]',
    basket_title_locator : '[data-testid = orderInfo-smsNotification-service-title]',
    basket_price_locator : '[data-testid = orderInfo-smsNotification-service-price]',
}

const personal_manager_locators = {
    visible_locator : '[data-testid = personal-manager-block]',
    add_service_locator : '[data-testid = personal-manager-add-button]',
    submit_locator : null,
    price_locator : '[data-testid = personal-manager-price]',
    basket_title_locator : '[data-testid = orderInfo-personalManager-service-title]',
    basket_price_locator : '[data-testid = orderInfo-personalManager-service-price]',
}


const auto_check_in_locators = {
    visible_locator : '[data-testid = automatedCheckinBlock]',
    add_service_locator : '[data-testid = automatedCheckin-seatsStrategies-open-button]',
    submit_locator : '[data-testid = seatsStrategiesSaveStrategyButton]',
    price_locator : '[data-testid = additionalServices-automatedCheckin-price]',
    basket_title_locator : '[data-testid = orderInfo-automatedCheckin-service-title]',
    basket_price_locator : '[data-testid = orderInfo-automatedCheckin-service-price]',
}

module.exports = {SMS_info_locators, personal_manager_locators, auto_check_in_locators};