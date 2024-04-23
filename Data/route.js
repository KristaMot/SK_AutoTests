const route_1 = {
    route_info: {
        from : 'Екатеринбург',
        to : 'Москва',
        return_way : false,
        airline : 'Аэрофлот',
        travellers : 1,
        tarif : 'Эконом1 пассажир',
    },
};

const route_2 = {
    route_info: {
        from : 'Санкт-Петербург',
        to : 'Новосибирск',
        return_way : true,
        airline : 'S7 Airlines',
        travellers : 2,
        tarif : 'Эконом2 пассажира',
    },
};

const route_3 = {
    route_info: {
        from : 'Москва',
        to : 'Казань',
        return_way : true,
        airline : 'Победа',
        travellers : 3,
        tarif : 'Эконом3 пассажира',
    },
};

const routes = [route_1, route_2, route_3]

module.exports = {routes}