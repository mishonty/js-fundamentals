https://judge.softuni.org/Contests/Practice/Index/2028#0

// 1
function solve(arr) {

    let studentsCount = Number(arr[0]);
    let lecturesCount = Number(arr[1]);
    let bonus = Number(arr[2]);
    let currentStudentBonus = 0;
    let highestStudentBonus = 0;
    let attendances = 0;
    let hightestAttendance = 0;
    let arrL = arr.length;

    for (let i = 3; i < arrL; i++) {
        attendances = Number(arr[i]);

        currentStudentBonus = attendances / lecturesCount * (5 + bonus);

        if (currentStudentBonus > highestStudentBonus) {
            highestStudentBonus = currentStudentBonus;
            hightestAttendance = attendances;
        }
        
    }

    console.log(`Max Bonus: ${Math.ceil(highestStudentBonus)}.`);
    console.log(`The student has attended ${hightestAttendance} lectures.`);
}
