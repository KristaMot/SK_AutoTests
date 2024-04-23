export const select_ticket_locators = {
    recomendation_list_locator : '[data-testid = search-recommendations-list]',
    filter_airlines_locator : '[data-testid = airlines-filter-show-hide-dropDown-button]',
    one_stop_locator : '[data-testid = buttonDisallowTransfers1]',
    two_stop_locator : '[data-testid = buttonDisallowTransfers2]',
    staffing_list_locator : '[id="stuffing-segmnets-wrapper"]',
    full_download_staffing_locator : '[data-testid = -progress-0]',
    select_first_tariff_locator : '[data-testid = stuffing-segment0-brand0]',
    select_second_tariff_locator : '[data-testid = stuffing-segment0-brand1]',
    booking_form_locator : '[id="booking-form-wrapper"]',
};

export const recommendations = (i) => {
    return {
        coupling_tickets_locator : `[data-testid = search-recommendation${i}-segment0-multiticket-popover]`,
        select_recomendation_locator : `[data-testid = search-recommendation${i}-select-tariff-button]`,
    }
};