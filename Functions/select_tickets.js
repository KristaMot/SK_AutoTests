const { expect } = require("@playwright/test");

async function select_ticket(select_ticket_locators, recomendations, routes, page){
    const {
        recomendation_list_locator,
        filter_airlines_locator,
        one_stop_locator,
        two_stop_locator,
        staffing_list_locator,
        full_download_staffing_locator,
        select_first_tariff_locator,
        select_second_tariff_locator,
        booking_form_locator,
    } = select_ticket_locators;

    const {airline, return_way} = routes.route_info;

    await expect(page.locator(recomendation_list_locator)).toBeVisible({timeout: 10000});
    await expect(page.locator(filter_airlines_locator)).toBeVisible({timeout: 50000});

    await page.locator(filter_airlines_locator).click();
    await page.locator(`text=${airline}`).first().click();
    await page.locator(one_stop_locator).click();
    await page.locator(two_stop_locator).click();

    if (return_way) {
        let i = 0;
        let coupling_tickets;
        let recomendation;
        
        do {
            recomendation = recomendations(i);
            const {coupling_tickets_locator} = recomendation;
            coupling_tickets = await page.locator(coupling_tickets_locator).isVisible();
            i++;
        } while (coupling_tickets);

        recomendation = recomendations(i-1);
        const {select_recomendation_locator} = recomendation;
        await page.locator(select_recomendation_locator).click();
        
    } else {
        const firts_recomendation = recomendations(0);
        const {select_recomendation_locator} = firts_recomendation;
        await page.locator(select_recomendation_locator).click();
    }

    await expect(page.locator(staffing_list_locator).first()).toBeVisible({timeout: 10000});
    await expect(page.locator(full_download_staffing_locator)).toBeHidden({timeout: 30000});
    
    try {
        if (page.locator(select_first_tariff_locator).isEnabled()) {
            await page.locator(select_first_tariff_locator).click();
        } else {
            await page.locator(select_second_tariff_locator).click();
        }
    } catch (error) {
        console.log ("No tickets")
    }

    await expect(page.locator(booking_form_locator)).toBeVisible({timeout: 10000});
};

module.exports = { select_ticket };