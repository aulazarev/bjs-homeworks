function getResult(a,b,c){
    // код для задачи №1 писать здесь
    // return x;
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

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
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

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
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