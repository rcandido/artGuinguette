'use strict';
import {
    labelDay,
    labelMonth
} from './myConst';
let start = Date.now();
function dateElement(element) {
    element.date = new Date(element.date);
    element.affiche = {
        dayHTML: labelDay[element.date.getDay()],
        numberDayHTML: element.date.getDate(),
        monthHTML: labelMonth[element.date.getMonth()].substr(0, 3),
        yearHTML: element.date.getUTCFullYear()
    }
}

// Manage events from current date 
export function transformAgenda(agenda) {

    let transformedAgenda = {
        before: [],
        after: []
    };
    let i = 0;
    agenda.forEach(element => {
        dateElement(element);
        if (element.date < start) {
            transformedAgenda.before.push(element);
        } else {
            transformedAgenda.after.push(element);
        }
        i++;
    });
    return transformedAgenda;
};

export function customDate(element) {

    dateElement(element);
    element.cetait = '';
    if (element.date < start) {
        element.cetait = 'C\'était le :';
    }
    return element;
}