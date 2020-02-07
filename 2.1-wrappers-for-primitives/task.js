"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  //return totalAmount;
    let newDate = new Date(date);
    let today = new Date();
    let valid = true;

    if (isNaN(Number(percent)) === true || Number(percent) < 0) {
        console.log(`Параметр <percent> содержит неправильное значение ${percent}`);
        valid = false;
    } else if (isNaN(Number(contribution)) === true || Number(contribution) < 0) {
        console.log(`Параметр <contribution> содержит неправильное значение ${contribution}`);
        valid = false;
    } else if (isNaN(Number(amount)) === true || Number(amount) <= 0) {
        console.log(`Параметр <amount> содержит неправильное значение ${amount}`);
        valid = false;
    } else if (newDate.getFullYear() <= today.getFullYear()) {
        console.log(`Параметр <date> содержит неправильное значение ${date}`);
        valid = false;
    }

    if (valid === false) {
        return;
    }

    let creditSum = Number(amount) - Number(contribution);
    let month = (newDate.getFullYear() - today.getFullYear()) * 12 + (newDate.getMonth() - today.getMonth());
    let payment = creditSum * (Number(percent) / 100 / 12 + Number(percent) / 100 / 12 / ((1 + Number(percent) / 100 / 12) ** month - 1));
    let totalAmount = payment * month;
    return totalAmount.toFixed(2);
}

console.log(calculateTotalMortgage(10, 0, 50000, new Date(2021,1,3)));
console.log(calculateTotalMortgage(10, 1000, 50000, new Date(2021,1,3)));
console.log(calculateTotalMortgage(10, 0, 20000, new Date(2022,1,3)));
console.log(calculateTotalMortgage(10, 1000, 20000, new Date(2022,1,3)));
console.log(calculateTotalMortgage(10, 20000, 20000, new Date(2022,1,3)));
console.log(calculateTotalMortgage(10, 0, 10000, new Date(2023,1,3)));
console.log(calculateTotalMortgage(15, 0, 10000, new Date(2023,1,3)));


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
    if (name === null || name === "" || name === undefined) {
        name = 'Аноним'
    }
    return `Привет, мир! Меня зовут ${name}.`;
}

console.log(getGreeting('Иван'));
console.log(getGreeting('Анастасия'));
console.log(getGreeting('Петр'));
console.log(getGreeting(null));
console.log(getGreeting(""));
console.log(getGreeting(undefined));