/*
array
*/
/*let a = 10
let b = 20
let c = 30
console.log ('a:', a , 'b:', b , 'c:', c)
let ages = [10,20,30] // array 3 items
console.log('ages:', ages)
console.log('ages[1]:', ages[1]) 
// 1. แทนที่ ค้่าข้อมูลใน array 
ages = [15 , 25]
console.log('ages list :', ages)
// 2. ต่อ array 
ages.push(35)
console.log('ages after push :', ages)
// 3. ลบข้อมูลตัวสุดท้ายใน array
ages.pop()
console.log('ages after pop :', ages)

/**
 array
 */

/*let age1 = 25;
let age2 = 30;
let age3 = 35;
console.log(age1, age2, age3); // 25 30 35

let ages = [25, 30, 35];
console.log(ages); // [25, 30, 35]
console.log(ages[1]); // 25 30 35

// แทนที่ค่าในอาเรย์
ages =[40, 45, 50];
console.log(ages); // [40, 45, 50]

// ต่ออาเรย์
ages.push(55);
console.log(ages); // [40, 45, 50, 55]

// ความยาวของอาเรย์
console.log(ages.length); // 4

// ลบข้อมูลตัวสุดท้ายของอาเรย์
ages.pop();
console.log(ages); // [40, 45, 50]

if (ages.includes(45)) { //true
    console.log("พบ 45 ในอาเรบย์"); // พบ 45 ในอาเรย์
}

let numbers = [90, 60, 80, 40, 50];
numbers.sort();
console.log(numbers); // [40, 50, 60, 80, 90]

let numbers = ["John", "Janne", "Doe"];
names.push("Smith");
console.log(names);
console.log(numbers.length);

for (let i = 0; i< names.length; i++) {
    console.log(numes[i]);
}*/

/**
 object
 */

/* let student =[{
    age: 20,
    name: "Emma",
    grade: 'A'
 },{
    age: 22,
    name: "Liam",
    grade: 'B'
 }]

 for(let i = 0; i < student.length; i++) {
    console.log("Student " + (i + 1) + ":")
    console.log("Name: " + student[i].name)
    console,log("Age: " + student[i].age)
    console.log("Grade: " + student[i].grade)
 }

 student.push({
    age: 21,
    name: "Olivia",
    grade: 'A'
 });
console.log(student);
console.log(student.name);*/

/*function calculate_grade(score) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
return grade;

// เรียกใข้ฟังก์ชัน
let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("Student's grade:" + student_grade);*/

/**
 array
 */

 /*let score = [10, 20, 30, 40, 50];

 for (let i = 0; i < score.length; i++) {
    // console.log('Score at index' + i + ' is ' + score[i]);
    console.log(`Score at index ${i} is ${score[i]}`);
 }

 score = score.map((s) => {
    return s * 2
 })

 score.forEach((s) => {
    console.log('new score', s)
 })*/

 /*let score = [10, 20, 30, 40, 50];


 for (let index = 0; index <score.length; index++) {
    console.log('score', score[index])
 }

let newScore = score.filter((s) => {
    if( s >= 30){
        return true
    } else {
        return false
    }
})

 newScore.forEach((ns)=> {
    console.log('new score: ', ns)
 })*/

/**
 object + function
 */

 let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },
    {
        name: 'bb',
        score: '60',
        grade: 'B'
    }
 ]

 console.log('Student :', students[0])

 let student = students.find((s) => {
    if (s.name == 'bb') {
        return true
    }
 })

 let doublsecoer_student = students.map((s) => {
    s.score = s.score *2
    return s
 })

 console.log('student:',student)
 console.log(doublsecoer_student)

let highScore_student = students.filter((s) => {
    if (s.score >= 110) {
        return true
    }
  })
  console.log('highScore_student', highScore_student)