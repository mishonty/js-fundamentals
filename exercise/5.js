// 1
function solve(arr) {
  let wagoons = arr
    .shift()
    .split(" ")
    .map(function (a) {
      return Number(a);
    });
  let maxCap = +arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");

    if (command.length === 2) {
      wagoons.push(+command[1]);
    } else if (command.length === 1) {
      let passengersToAdd = Number(command);
      for (let j = 0; j < wagoons.length; j++) {
        let currentWagoon = wagoons[j];
        let emptySeats = maxCap - currentWagoon;

        if (emptySeats >= passengersToAdd) {
          wagoons[j] += passengersToAdd;
          break;
        }
      }
    }
  }

  console.log(wagoons.join(" "));
}
