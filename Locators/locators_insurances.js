const safety_on_earth_locators = {
    visible_locator : '[data-testid = package-safetyOnEarthV2]',
    checkbox_insurance_locator : '[data-testid = safetyOnEarthV2-package-footer-checkbox]',
    price_locator : '[data-testid = safetyOnEarthV2-package-footer-price]',
    basket_title_locator : '[data-testid = order-info-package-safetyOnEarthV2]',
    basket_price_locator : '[data-testid = orderInfo-safetyOnEarthV2-package-price]',
}

const flight_safety_locators = {
    visible_locator : '[data-testid = package-flightSafetyV2]',
    checkbox_insurance_locator : '[data-testid = flightSafetyV2-package-footer-checkbox]',
    price_locator : '[data-testid = flightSafetyV2-package-footer-price]',
    basket_title_locator : '[data-testid = order-info-package-flightSafetyV2]',
    basket_price_locator : '[data-testid = orderInfo-flightSafetyV2-package-price]',
}

const travel_safety_locators = {
    visible_locator : '[data-testid = package-travelSafetyV2]',
    checkbox_insurance_locator : '[data-testid = travelSafetyV2-package-footer-checkbox]',
    price_locator : '[data-testid = travelSafetyV2-package-footer-price]',
    basket_title_locator : '[data-testid = order-info-package-travelSafetyV2]',
    basket_price_locator : '[data-testid = orderInfo-travelSafetyV2-package-price]',
}

module.exports = { safety_on_earth_locators, flight_safety_locators, travel_safety_locators };