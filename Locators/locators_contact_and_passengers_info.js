let count = 2;

const contact_info_locators = {
    email_locator : '[data-testid = booking-form-user-email-input]',
    phone_code_locator : '[data-testid = booking-form-user-phone-code-input]',
    phone_number_locator : '[data-testid = booking-form-user-phone-number-input]',
};

const passenger_1_locators = {
    personal_info_locators: {
        gender_male_locator : '[data-testid = gender-selector-male-button-Gender-adult-0]',
        gender_female_locator : '[data-testid = gender-selector-female-button-Gender-adult-0]',
        birthday_locator : '[data-testid = Birthday-adult-0]',
        nationality_locator : '[data-testid = Nationality-adult-0]',
        nationality_select_locator : '[data-testid = input-nationality-dropdown-Nationality-adult-0]',
        document_type_locator : '[data-testid = DocumentType-adult-0]',
        document_type_select_locator : '[data-testid = document-type-dropDown-item-civilPassport-select-button]',
        document_number_locator : '[data-testid = DocumentNumber-adult-0]',
        last_name_locator : '[data-testid = LastName-adult-0]',
        first_name_locator : '[data-testid = FirstName-adult-0]',
        middle_name_locator : '[data-testid = MiddleName-adult-0]',
    } 
};

const passenger_2_locators = {
    personal_info_locators: {
        gender_male_locator : '[data-testid = gender-selector-male-button-Gender-adult-1]',
        gender_female_locator : '[data-testid = gender-selector-female-button-Gender-adult-1]',
        birthday_locator : '[data-testid = Birthday-adult-1]',
        nationality_locator : '[data-testid = Nationality-adult-1]',
        nationality_select_locator : '[data-testid = input-nationality-dropdown-Nationality-adult-1]',
        document_type_locator : '[data-testid = DocumentType-adult-1]',
        document_type_select_locator : '[data-testid = document-type-dropDown-item-civilPassport-select-button]',
        document_number_locator : '[data-testid = DocumentNumber-adult-1]',
        last_name_locator : '[data-testid = LastName-adult-1]',
        first_name_locator : '[data-testid = FirstName-adult-1]',
        middle_name_locator : '[data-testid = MiddleName-adult-1]',
    } 
};

const passenger_3_locators = {
    personal_info_locators: {
        gender_male_locator : '[data-testid = gender-selector-male-button-Gender-child-0]',
        gender_female_locator : '[data-testid = gender-selector-female-button-Gender-child-0]',
        birthday_locator : '[data-testid = Birthday-child-0]',
        nationality_locator : '[data-testid = Nationality-child-0]',
        nationality_select_locator : '[data-testid = input-nationality-dropdown-Nationality-child-0]',
        document_type_locator : '[data-testid = DocumentType-child-0]',
        document_type_select_locator : '[data-testid = document-type-dropDown-item-birthCertificate-select-button]',
        document_number_locator : '[data-testid = DocumentNumber-child-0]',
        last_name_locator : '[data-testid = LastName-child-0]',
        first_name_locator : '[data-testid = FirstName-child-0]',
        middle_name_locator : '[data-testid = MiddleName-child-0]',
    } 
};

//const passengers_locators = (count === 2) ? [passenger_1_locators, passenger_2_locators] : passenger_1_locators;

const passengers_locators = [
    passenger_1_locators,
    passenger_2_locators,
    passenger_3_locators
];

module.exports = {passengers_locators, contact_info_locators};
