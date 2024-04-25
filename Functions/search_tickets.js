const { expect } = require("@playwright/test");

async function search_tickets (search_ticket_locators, routes, page) {
    const {banner_locator, search_button_locator} = search_ticket_locators;
    
    const {
        from_locator,
        to_locator,
        select_town_locator,
    } = search_ticket_locators.direction;

    const {
        departure_locator,
        return_locator,
        next_month_locator,
        select_day_locator,
    } = search_ticket_locators.calendar;

    const {
        travellers_panel_locator, 
        travellers_check_locator,
        increase_adult_locator,
        increase_child_locator,
    } = search_ticket_locators.travellers;

    const {
        from ,
        to,
        return_way,
        travellers,
        tarif,
    } = routes.route_info;

    await page.locator(from_locator).click();
    await page.locator(from_locator).clear();
    await page.locator(from_locator).type(from, {delay : 200});
    await expect(page.locator(select_town_locator).first()).toContainText(from);
    await page.locator(select_town_locator).first().click();

    await page.locator(to_locator).click();
    await page.locator(to_locator).type(to, {delay : 200});
    await expect(page.locator(select_town_locator).first()).toContainText(to);
    await page.locator(select_town_locator).first().click();

    await page.locator(departure_locator).click();
    await page.locator(next_month_locator).click();
    await page.locator(select_day_locator).nth(7).click();

    if (return_way){
        await page.locator(return_locator).click();
        await page.locator(select_day_locator).nth(28).click();
    }

    if (travellers === 1){
        await expect(page.locator(travellers_check_locator)).toHaveText(tarif);
    }

    if (travellers === 2){
        await page.locator(travellers_check_locator).click();
        await expect(page.locator(travellers_panel_locator)).toBeVisible();
        await page.locator(increase_adult_locator).click();
        await page.locator(banner_locator).click();
        await expect(page.locator(travellers_panel_locator)).toBeHidden();
        await expect(page.locator(travellers_check_locator)).toHaveText(tarif);
    }

    if (travellers === 3){
        await page.locator(travellers_check_locator).click();
        await expect(page.locator(travellers_panel_locator)).toBeVisible();
        await page.locator(increase_adult_locator).click();
        await page.locator(increase_child_locator).click();
        await page.locator(banner_locator).click();
        await expect(page.locator(travellers_panel_locator)).toBeHidden();
        await expect(page.locator(travellers_check_locator)).toHaveText(tarif);
    }

    await page.locator(search_button_locator).click()
};

module.exports = {search_tickets};





