// 1
function solve(str, n) {

    let result = '';

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

// 2
function solve(grade) {

  let result = '';
  
  if (grade < 3) {
    result = 'Fail (2)';
  } else if (grade >= 3 && grade < 3.5) {
    result = `Poor (${grade.toFixed(2)})`;
  } else if (grade >= 3.5 && grade < 4.5) {
    result = `Good (${grade.toFixed(2)})`;
  } else if (grade >= 4.5 && grade < 5.5) {
    result = `Very good (${grade.toFixed(2)})`;
  } else {
    result = `Excellent (${grade.toFixed(2)})`;
  }
  
  console.log(result);
}

// 3
function solve(n, pow) {

  let result = Math.pow(n, pow);

  console.log(result);
}

// 4
