let count = 2;

const passenger_1 = {
    personal_info: {
        gender : 'Female',
        birthday : '27.12.1995',
        nationality : 'Россия',
        country : 'RU',
        document_type : 'Паспорт',
        document_number : '4019672543',
        last_name : 'Нагорная',
        first_name : 'Виктория',
        middle_name : 'Станиславовна',
    },
}

const passenger_2 = {
    personal_info: {
        gender : 'Male',
        birthday : '13.10.1993',
        nationality : 'Россия',
        country : 'RU',
        document_type : 'Паспорт',
        document_number : '4128907652',
        last_name : 'Лютиков',
        first_name : 'Владислав',
        middle_name : 'Аркадьевич',
    },
}

const passenger_3 = {
    personal_info: {
        gender : 'Male',
        birthday : '18.01.2017',
        nationality : 'Россия',
        country : 'RU',
        document_type : 'Св. о рождении, выданное в РФ',
        document_number : 'IVАБ976502',
        last_name : 'Лютиков',
        first_name : 'Георгий',
        middle_name : 'Владиславович',
    },
}

//const passengers = (count === 2) ? [passenger_1, passenger_2] : passenger_1;
const passengers = [passenger_1, passenger_2, passenger_3];
module.exports = {passengers};
