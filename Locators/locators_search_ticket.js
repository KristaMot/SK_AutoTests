export const ticket_search_locators = {
    banner_locator : '[data-testid = homepage-banner]',
    search_button_locator : '[data-testid = search-form-submit-button]',

    direction : {
        from_locator : '[data-testid = iata-selector-input-from0]',
        to_locator : '[data-testid = iata-selector-input-to0]',
        select_town_locator : '[data-testid = search-item-0]',
    },

    calendar : {
        departure_locator : '[data-testid = searchForm-Simple-Widget-Calendar-0-Show-Calendar-Button]',
        return_locator : '[data-testid = searchForm-Simple-Widget-Calendar-1-Show-Calendar-Button]',
        next_month_locator : '[title="Next month"]',
        select_day_locator : '[role = gridcell]',
    },

    travellers : {
        travellers_panel_locator : '[id="search-form-widget-travellers-panel"]', 
        travellers_check_locator : '[id="search-form-widget-travellers"]',
        increase_adult_locator : '[data-testid = search-form-travellers-adult-increase-button]', 
        increase_child_locator : '[data-testid = search-form-travellers-child-increase-button]', 
    },
}