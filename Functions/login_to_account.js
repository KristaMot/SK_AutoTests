const { expect } = require("@playwright/test");

async function login_to_account(login_to_account_locators, account_data, page){
    const {email, password} = account_data;

    const {
        login_form_locator,
        email_locator,
        password_locator,
        button_login_locator,
        check_account_locator,
    } = login_to_account_locators;

    await page.locator(login_form_locator).click();
    await page.locator(email_locator).type(email, {delay : 100});
    await page.locator(password_locator).type(password, {delay : 100});

    await page.locator(button_login_locator).click();
    await expect(page.locator(check_account_locator)).toHaveText(email);
};

module.exports = {login_to_account};