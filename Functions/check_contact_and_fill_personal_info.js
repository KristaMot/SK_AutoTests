const { expect } = require("@playwright/test");

async function check_contact_info (contact_info_locators, account_data, page) {
    const {email, phone_code, phone_number} = account_data;

    const {
        email_locator,
        phone_code_locator,
        phone_number_locator,
    } = contact_info_locators;

    await expect(page.locator(email_locator)).toHaveValue(email);
    await expect(page.locator(phone_code_locator).nth(1)).toHaveValue(phone_code);
    await expect(page.locator(phone_number_locator)).toHaveValue(phone_number);
};

async function fill_personal_info (locators_passengers, passengers, page) {

    const {
        gender_male_locator,
        gender_female_locator,
        birthday_locator,
        nationality_locator,
        nationality_select_locator,
        document_type_locator,
        document_type_select_locator,
        document_number_locator,
        last_name_locator,
        first_name_locator,
        middle_name_locator,
    } = locators_passengers.personal_info_locators;

    const {
        gender,
        birthday,
        nationality,
        country,
        document_type,
        document_number,
        last_name,
        first_name,
        middle_name,
    } = passengers.personal_info;

    gender === 'Male'
        ? await page.click(gender_male_locator)
        : await page.click(gender_female_locator);

    await expect(page.locator(birthday_locator)).toBeVisible();
    await page.locator(birthday_locator).click();
    await page.locator(birthday_locator).fill(birthday);

    await expect(page.locator(nationality_locator)).toBeVisible();
    await page.locator(nationality_locator).click ();
    await expect(page.locator(nationality_select_locator)).toBeVisible();
    await page.locator(nationality_select_locator).getByText(country).click();
    await expect(page.locator(nationality_locator)).toHaveValue(nationality);

    await expect(page.locator(document_type_locator)).toBeVisible();
    await page.locator(document_type_locator).click();
    await page.locator(document_type_select_locator).click();
    await expect(page.locator(document_type_locator)).toHaveValue(document_type);

    await expect(page.locator(document_number_locator)).toBeVisible();
    await page.locator(document_number_locator).type(document_number, {delay : 100});

    await expect(page.locator(last_name_locator)).toBeVisible();
    await page.locator(last_name_locator).type(last_name, {delay : 100});    
    await expect(page.locator(first_name_locator)).toBeVisible();
    await page.locator(first_name_locator).type(first_name, {delay : 100});
    await expect(page.locator(middle_name_locator)).toBeVisible();
    await page.locator(middle_name_locator).type(middle_name, {delay : 100});
};

module.exports = {fill_personal_info, check_contact_info};