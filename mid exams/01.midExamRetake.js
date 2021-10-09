// 1
function solve(arr) {

    let sum = 0;
    let arrL = arr.length;
    let command = arr[arrL - 1];

    for (let i = 0; i < arrL - 1; i++) {
        let price = Number(arr[i]);

        if (price <= 0) {
            console.log("Invalid price!");
        } else {
            sum += price;
        }
    }

    let sumTaxes = sum * 0.2;
    let sumWithTaxes = sum + sumTaxes;

    if (sum === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${sumTaxes.toFixed(2)}$`);
        console.log("-----------");
        if (command === 'special') {
            sumWithTaxes *= 0.9;

        }

        console.log(`Total price: ${sumWithTaxes.toFixed(2)}$`);
    }
}

