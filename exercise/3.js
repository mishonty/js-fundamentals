// 1
function solve(arr) {

  let sumFirst = 0;
  let sumFinal = 0;
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    sumFirst += arr[i];
    if (arr[i] % 2 === 0) {
      output.push(arr[i] + i);
      sumFinal += arr[i] + i;
    } else if (arr[i] % 2 !== 0) {
      output.push(arr[i] - i);
      sumFinal += arr[i] - i;
    }
  }

  console.log(`[ ${output.join(', ')} ]`);
  console.log(sumFirst);
  console.log(sumFinal);
}
