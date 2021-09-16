// 1. 
function solve(num) {

    console.log(num * 2);
    
}

// 2.
function solve(grade) {

    if (grade >= 5.5) {
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }

}

// 3. 
function solve() {

    for (i = 1; i <6; i++) {
        console.log(i);
    }

}

// 4.
function solve(n) {

    for (i = n; i >= 1; i--) {
        console.log(i);
    }

}

//5. 
function solve(m, n) {

    for (i = m; i >= n; i--) {
        console.log(i);
    }

}

// 6. 
function solve(name, age, grade) {

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)

}

// 7. 
function solve(n) {

    switch (n) {
        case 1: console.log('January'); break;
        case 2: console.log('February'); break;
        case 3: console.log('March'); break;
        case 4: console.log('April'); break;
        case 5: console.log('May'); break;
        case 6: console.log('June'); break;
        case 7: console.log('July'); break;
        case 8: console.log('August'); break;
        case 9: console.log('September'); break;
        case 10: console.log('October'); break;
        case 11: console.log('November'); break;
        case 12: console.log('December'); break;
        default: console.log('Error!'); break;
    }

}

// 8.
function solve(country) {

    switch (country) {
        case 'USA': console.log('English'); break;
        case 'England': console.log('English'); break;
        case 'Mexico': console.log('Spanish'); break;
        case 'Argentina': console.log('Spanish'); break;
        case 'Spain': console.log('Spanish'); break;
        default: console.log('unknown'); break;
    }

}

// 9.
function solve(day, age) {
    age = Number(age);

    let price = 0;

    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 5;
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday":
                price = 18;
                break;
            case "Weekend":
                price = 20;
                break;
            case "Holiday":
                price = 12;
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 10;
                break;
        }
    }

    if (age < 0 || age > 122) {
        console.log(`Error!`);
    } else {
        console.log(`${price}$`);
    }

}

// 10.
function solve(num) {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }

}

// 11.
function solve(num) {
    let sum = 0;

    let counter = 0;



    for (let i = 1; i <= 100; i += 2) {

        console.log(i);

        counter++;

        sum += i;

        if (counter == num) {

            console.log(`Sum: ${sum}`);

            break;

        }

    }

}
