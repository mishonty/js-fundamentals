function solve(arr) {

  let wagoonsArr = arr
    .shift()
    .split(' ')
    .map(Number);
  let wagoonsCapacity = Number(arr.shift());
  let wagoonsL = wagoonsArr.length;
  let arrL = arr.length;
  let output = [];

  for (let i = 0; i < arrL; i++) {
  	let currentWagoon = wagoonsArr[i];
    let currentElement = arr[i].split(' ');
    let firstSign = currentElement[0];
    let secondSign = currentElement[1];

    if (firstSign === 'Add') {
      output.push(Number(secondSign));
    }
    
    if (wagoonsCapacity - currentWagoon > Number(firstSign)) {
    currentWagoon += Number(firstSign);
    output.push(currentWagoon);
    }
  }


  console.log(output);
}





function solve(arr) {

  let wagoonsArr = arr
    .shift()
    .split(' ')
    .map(Number);
  let capacity = Number(arr.shift());
  let wagoonsL = wagoonsArr.length;
  let arrL = arr.length;
  let output = [];

  for (let i = 0; i < arrL; i++) {
    let currentWagoon = wagoonsArr[i];
    let currentElement = arr[i].split(' ');
    let firstSign = currentElement[0];
    let secondSign = currentElement[1];
    let emptyseats = capacity - currentWagoon;

    if (firstSign === 'Add') {
      output.push(Number(secondSign));
    }

    if (emptyseats > Number(firstSign)) {
      currentWagoon += Number(firstSign);
      output.push(currentWagoon);
    } else {
      for (let j = 1; j < arrL; j++) {
        currentWagoon = wagoonsArr[j];
        if (emptyseats > Number(firstSign)) {
        currentWagoon += Number(firstSign);
        output.push(currentWagoon);
        }
      }
    }
  }

console.log(wagoonsArr)
  console.log(output);
}
