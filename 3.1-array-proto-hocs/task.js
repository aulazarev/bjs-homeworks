function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}

function sum(...args) {
    // Замедление на 1 секунду.
    sleep(1000); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {

    let results = [];

    return function () {
      const args = Array.from(arguments);

      const result = results.find((value, index) => {
        return compareArrays(value.args, args);
      });

      if (result) {
        console.log(`Результат из памяти  ${result.result}`);
        return result.result;
      };
      console.log("Результат посчитан");
      const calc = fn(...args);
      console.log(`sum =  ${calc}`);

      results.push(
        {
          args: args,
          result: calc
        });

      if (results.length > limit) {
        console.log("the memory is fully");
        results = results.slice(results.length - limit);
        console.log(results.length)
      };
      return calc;
  }
}

function testCase() {
    const arrayForTest = [
      [1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]
    ];
    const mSum = memorize(sum, 3);

    console.time("testCase");
    let i = 5;
    while (i) {
      i--;
      arrayForTest.forEach(item => mSum(...item));
    }

    console.timeEnd("testCase");
}

testCase();

//При отключении задержки функции sum выполнение кода ускоряется приблизительно в 300 раз. Сравнивал 1000ms и 0ms.