"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = b**2 - 4 * a * c;
    let x = []; 
    if (d < 0)  {
        x[0] = 'Корней нет';
        console.log('Корней нет');

    } else if (d===0) {
        x[0] = (-b / (2 * a));
        console.log(`Корень уравнения: ${x[0]}`);

    } else if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
        console.log(`Корни уравнения: ${x[0]} и ${x[1]}`);
    }
    
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        console.log('Количество оценок больше пяти');
        marks = marks.slice(0, 5);
    }
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }
    return (total / marks.length);
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let result;
    let guestYear = dateOfBirthday.getFullYear();
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();

    if (currentYear - guestYear > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else { 
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`; 
    }

    console.log(result)
    return result;
}