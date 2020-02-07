"use strict"

function getSolutions(a, b, c) {
    
    let result = new Object();
    let D = b**2 - 4 * a * c;
    if (D < 0) {
        result.D = D;
    } else if ( D === 0) {
        let x1 = -b / (2 * a);
        result.D = D;
        result.roots = [x1];
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        result.D = D;
        result.roots = [x1,x2];
    }
    return result;
}

function showSolutionsMessage(a, b, c) {
    
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots === undefined) {
      console.log ('Уравнение не имеет вещественных корней');
    } else if (result.roots.length === 1) {
      console.log (`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
      console.log (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log('______________________');

function getAverageScore(data) {
    let averages = [];
    let result = {};
    for (let prop in data) {
        let value = data[prop];
        let average = averageSubjectScore(value);
        result[prop] = average;
        averages.push(average);
    }

    let averageScore = averageSubjectScore(averages);
    result.average = averageScore;

    return result;
}

function averageSubjectScore(scores) {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }

    let averageScore = totalScore / scores.length;
    return averageScore;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
  }))

console.log('______________________');

function getPersonData(secretData) {
 
    function getName(number) {
     let result;
     if (number === 0) {
       result = 'Родриго';
     } else if (number === 1) {
       result = 'Эмильо';
     }
    return result;
    }
   
    return {
     firstName: getName(secretData.aaa),
     lastName: getName(secretData.bbb)
    }
}
   
console.log(getPersonData({aaa:0,bbb:0}));
console.log(getPersonData({aaa:1,bbb:0}));
console.log(getPersonData({aaa:0,bbb:1}));
console.log(getPersonData({aaa:1,bbb:1}));