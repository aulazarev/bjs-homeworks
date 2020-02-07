function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    // return animalSound;
    if (animal === 'undefined') {
    	return null;
    } else {
    	let sound = animal.sound;
        return sound;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
    	total += Number(marks[i]);
    }
    let average = total / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
    let dateNow = Date.now();
 	let date = new Date(birthday);
 	birthday = +date;
 	let diff = dateNow - birthday;
 	let age = Math.floor((diff / 1000 / 60 / 60 / 24 / (365 * 4 + 1)) * 4);
 	if (age >= 18) {
 		return true;
  }
}