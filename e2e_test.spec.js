// @ts-check
const { test, expect } = require('@playwright/test');

const { safety_on_earth_locators, flight_safety_locators, travel_safety_locators } = require ('./Locators/locators_insurances.js');
const { SMS_info_locators, personal_manager_locators, auto_check_in_locators } = require ('./Locators/locators_add_services.js');
const { insurance_loading, add_insurance, add_services, check_in_summary } = require ('./Functions/add_insurances_and_services.js');
const { select_ticket_locators, recommendations } = require ('./Locators/locators_select_ticket.js');
const { select_ticket } = require ('./Functions/select_tickets.js');
const { login_to_account_locators } = require ('./Locators/locators_login_to_account.js');
const { account_data } = require ('./Data/account.js');
const { login_to_account } = require ('./Functions/login_to_account.js');
const { ticket_search_locators } = require ('./Locators/locators_search_ticket.js');
const { routes } = require ('./Data/route.js');
const { search_tickets } = require ('./Functions/search_tickets.js');
const { passengers_locators, contact_info_locators} = require ('./Locators/locators_contact_and_passengers_info.js');
const { passengers } = require ('./Data/passengers.js');
const { fill_personal_info, check_contact_info } = require ('./Functions/check_contact_and_fill_personal_info.js');

//Create url
let url = 'https://superkassa.ru';
let local_url = 'http://192.168.24.64:8080';

test ('booking_ticket', async ({page}) => {
    //Time of all test
    test.setTimeout(250000);
    
    //Login to account
    await page.goto(url);
    await login_to_account (login_to_account_locators, account_data, page);

    //Number of passengers
    let travellers = 1; 

    await search_tickets (ticket_search_locators, routes[travellers-1], page);
    await select_ticket (select_ticket_locators, recommendations, routes[travellers-1], page);

    //Check contact info
    await check_contact_info (contact_info_locators, account_data, page);

    //Add an SMS notification
    const SMS_info = await add_services (SMS_info_locators, page);

    //Fill in the passenger data
    for (let i = 0; i < travellers; i++) {
        await fill_personal_info (passengers_locators[i], passengers[i], page);
    }
    
    //Add PM
    const personal_manager = await add_services (personal_manager_locators, page);

    //Add insurances
    await insurance_loading (page);
    const safety_on_earth = await add_insurance (safety_on_earth_locators, page);
    const flight_safety = await add_insurance (flight_safety_locators, page);
    const travel_safety = await add_insurance (travel_safety_locators, page);

    //Add auto_check_in
    const auto_check_in = await add_services (auto_check_in_locators, page);

    //Check insurance and services in summary
    await check_in_summary (SMS_info, SMS_info_locators, page);
    await check_in_summary (personal_manager, personal_manager_locators, page);
    await check_in_summary (auto_check_in, auto_check_in_locators, page);
    //await check_in_summary (safety_on_earth, safety_on_earth_locators, page);
    //await check_in_summary (flight_safety, flight_safety_locators, page);
    //await check_in_summary (travel_safety, travel_safety_locators, page);

    //Choose booking payment
    const booking = page.getByTestId('booking-payment-logo-select-button');
    const check_booking = page.getByTestId('priceTickets-booking-service');
    await booking.click();
    await expect(check_booking).toBeVisible();

    //Agree with rules
    const agreement = page.getByTestId('accept-processing-of-personal-data-checkbox');
    await expect(agreement).not.toBeChecked();
    await agreement.check();
    await expect(agreement).toBeChecked();

    //Booking
    const booking_button = page.getByTestId('pay-button-PREBOOK(live)');
    const local_bb = page.getByTestId('pay-button-BOOK(live)')
    const success_booking = page.getByTestId('bookingSuccessMessage');
    await expect(booking_button).toBeVisible();
    //await expect(local_bb).toBeVisible();
    //await local_bb.click();
    //await expect(success_booking).toBeVisible({timeout: 100000});
})