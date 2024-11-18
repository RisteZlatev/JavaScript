// var num = prompt("Enter a number and i will check if it is divisible by 3 and 5")
// if(num % 3 == 0 && num % 5 == 0){
//     console.log("fizzbuzz")
// }
// else if(num % 3 ==0){
//     console.log("fizz")
// }
// else if(num % 5 == 0){
//     console.log("buzz")
// }
// else{
//     console.log("The number is not divisible by 3 or 5");
    
// }


// // Programa za ocenuvanje na test

// var points = prompt("Enter the amount of points you got on the test")

// if(points >= 0 && points <=60){
//     console.log(`You have ${points} points and grade F` );
// }
// else if(points >=61 && points <= 70){
//     console.log(`You have ${points} points and grade D`)
// }
// else if(points >=71 && points <= 80){
//     console.log(`You have ${points} points and grade C`)
// }
// else if(points >=81 && points <= 90){
//     console.log(`You have ${points} points and grade B`)
// }
// else if(points >=91 && points <= 100){
//     console.log(`You have ${points} points and grade A`)
// }
// else{
//     alert("Invalid Input");
// }


// function denarToEuro(money){
//     return money/61
// }
// function euroToDenar(money){
//     return money*61
// }

// const buttonMoney = document.getElementById('calcBtn')
// const buttonWeight = document.getElementById('kgLbsBtn')

// buttonMoney.addEventListener('click', function(){

//     var mkd = document.getElementById('mkdInput').value;
//     var eur = document.getElementById('eurInput').value;
//     if(mkd!=""){
//         document.getElementById('eurInput').value = denarToEuro(mkd);
//     }
//     else if(eur!=""){
//         document.getElementById('mkdInput').value = euroToDenar(eur);
//     }
//     else{
//         alert("Invalid input");
//     }
// });

// function kgToLbs(kg){
//     return kg*2.2;
// }
// function lbsToKg(lbs){
//     return lbs/2.2;
// }

// buttonWeight.addEventListener('click', function(){

//     var kg = document.getElementById('kgInput').value;
//     var lbs = document.getElementById('lbsInput').value;
//     if(kg!=""){
//         document.getElementById('lbsInput').value = kgToLbs(kg);
//     }
//     else if(lbs!=""){
//         document.getElementById('kgInput').value = lbsToKg(lbs);
//     }
//     else{
//         alert("Invalid input");
//     }
// });



// const artist1 = {
//     Name: {
//         firstName: "Kanye",
//         lastName: "West",
//         stageName: "Ye",
//     },
//     Awards: {
//         grammys: "24",
//         MTV: "30",
//     },
//     print: function(){
//         console.log(`${this.Name.firstName} ${this.Name.lastName} with the stage name ${this.Name.stageName} has ${this.Awards.grammys} Grammy awards and ${this.Awards.MTV} MTV awards.`)
//     }
//     }

// const artist2 = {
//     Name: {
//         firstName: "Kendrick",
//         lastName: "Lamar",
//         stageName: "KDot",
//     },
//     Awards: {
//         grammys: "17",
//         MTV: "28",
//     },
//     print: function(){
//         console.log(`${this.Name.firstName} ${this.Name.lastName} with the stage name ${this.Name.stageName} has ${this.Awards.grammys} Grammy awards and ${this.Awards.MTV} MTV awards.`)
//     }
//     }


// artist1.print();
// artist2.print();

// var numbers = [];
// const addBtn = document.getElementById('addBtn');

// addBtn.addEventListener('click', function(){
//     if(document.getElementById('num').value == ""){
//         return 0;
//     }
   
//     numbers.push(document.getElementById('num').value);
//     document.getElementById('arr').innerHTML = document.getElementById('arr').innerHTML + document.getElementById('num').value + ", ";
//     document.getElementById('num').value = "";

// })




// const sortBtn = document.getElementById('sortBtn');

// sortBtn.addEventListener('click', function(){
//     numbers.sort(function(a,b){return a-b});
//     //Ne ja sortira sekogas kako sto treba
//     for(var i = 0; i < numbers.length; i++){
//         document.getElementById('sortedArr').innerHTML = document.getElementById('sortedArr').innerHTML + numbers[i] + ", ";
//     }
// })

// const clearBtn = document.getElementById('clearBtn');

// clearBtn.addEventListener('click', function(){
//     while(numbers.length > 0){
//         numbers.pop();
//     }
//     document.getElementById('sortedArr').innerHTML = "Sorted Array: ";
//     document.getElementById('arr').innerHTML = "Array: ";
// })


//Homework 3

const student1 = {
    Name: "Riste",
    Surname: "Zlatev",
    GPA: 5.00,
    City: "Skopje",
    Scolarships: null,
}
const student2 = {
    Name: "Todor",
    Surname: "Petrusevski",
    GPA: 4.30,
    City: "Krushevo",
    Scolarships: null,
}
const student3 = {
    Name: "Mihael",
    Surname: "Spasovski",
    GPA: 3.80,
    City: "Debar",
    Scolarships: null,
}
const student4 = {
    Name: "Marko",
    Surname: "Ackovski",
    GPA: 2.10,
    City: "Kavadarci",
    Scolarships: null,
}
const student5 = {
    Name: "Ivan",
    Surname: "Pishtolov",
    GPA: 4.95,
    City: "Kriva Palanka",
    Scolarships: null,
}
var students = [student1,student2,student3,student4,student5];

//Podelba na 2
var students2 = students.splice(3, 5);
console.log(students);
console.log(students2);

//Spojuvanje i dodavanje elementi

students = [...students, ...students2];
console.log(students);
// Zosto i tuka se printaat studenti 6 i 7 koga gi nemam dodadeno vo nizata students?

const student6 = {
    Name: "Ana",
    Surname: "Dimitrovska",
    GPA: 5.00,
    City: "Negotino",
    Scolarships: null,
}

const student7 = {
    Name: "Petar",
    Surname: "Georgiev",
    GPA: 4.50,
    City: "Skopje",
    Scolarships: null,
}

students.push(student6);
students.unshift(student7);
console.log(students);

//Filtriranje na elementi
var highGPA = students.filter((student) => student.GPA >=4.50);
console.log(highGPA);

//Menuvanje elementi
students.forEach(student => {
    if(student.GPA>=4.80){
        student.Scolarships = true;
    }
});
console.log(students);

//Sobiranje na elementi od niza
const numbers = [2, 7, 15, 20, 5, 24, 32];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum);


const cities = [
    {
        name: "Skopje",
        population: 800000,
    },
    {
        name: "Tokyo",
        population: 9700000,
    },
    {
        name: "New York",
        population: 8250000,
    },
    {
        name: "Belgrade",
        population: 1380000,
    },
    {
        name: "Bejing",
        population: 21000000,
    },
    {
        name: "Berovo",
        population: 5850,
    }
];



cities.sort(function(a, b){
    return b.population - a.population ;
});
console.log(cities);

for(var i = 0; i < 3; i++){
    console.log(`Based on population the ${i+1} city is: ${cities[i].name}`)
}



var citiesB = cities.filter((city) => city.name.startsWith('B') && city.population > 1000000)
console.log(citiesB);


var sumofpop = 0;

cities.forEach(city =>{
    sumofpop = sumofpop + city.population;
}) 
averagepop = sumofpop / (cities.length);
console.log(sumofpop);
console.log(averagepop);

