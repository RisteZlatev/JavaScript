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


function denarToEuro(money){
    return money/61
}
function euroToDenar(money){
    return money*61
}

const buttonMoney = document.getElementById('calcBtn')
const buttonWeight = document.getElementById('kgLbsBtn')

buttonMoney.addEventListener('click', function(){

    var mkd = document.getElementById('mkdInput').value;
    var eur = document.getElementById('eurInput').value;
    if(mkd!=""){
        document.getElementById('eurInput').value = denarToEuro(mkd);
    }
    else if(eur!=""){
        document.getElementById('mkdInput').value = euroToDenar(eur);
    }
    else{
        alert("Invalid input");
    }
});

function kgToLbs(kg){
    return kg*2.2;
}
function lbsToKg(lbs){
    return lbs/2.2;
}

buttonWeight.addEventListener('click', function(){

    var kg = document.getElementById('kgInput').value;
    var lbs = document.getElementById('lbsInput').value;
    if(kg!=""){
        document.getElementById('lbsInput').value = kgToLbs(kg);
    }
    else if(lbs!=""){
        document.getElementById('kgInput').value = lbsToKg(lbs);
    }
    else{
        alert("Invalid input");
    }
});



const artist1 = {
    Name: {
        firstName: "Kanye",
        lastName: "West",
        stageName: "Ye",
    },
    Awards: {
        grammys: "24",
        MTV: "30",
    },
    print: function(){
        console.log(`${this.Name.firstName} ${this.Name.lastName} with the stage name ${this.Name.stageName} has ${this.Awards.grammys} Grammy awards and ${this.Awards.MTV} MTV awards.`)
    }
    }

const artist2 = {
    Name: {
        firstName: "Kendrick",
        lastName: "Lamar",
        stageName: "KDot",
    },
    Awards: {
        grammys: "17",
        MTV: "28",
    },
    print: function(){
        console.log(`${this.Name.firstName} ${this.Name.lastName} with the stage name ${this.Name.stageName} has ${this.Awards.grammys} Grammy awards and ${this.Awards.MTV} MTV awards.`)
    }
    }


artist1.print();
artist2.print();

var numbers = [];
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function(){
    numbers.push(document.getElementById('num').value);
    document.getElementsByName('num').value = "";
    //kako da se resetira koga se klika buttonot
})

const displayBtn = document.getElementById('displayBtn');

displayBtn.addEventListener('click', function(){
    for(var i = 0; i < numbers.length; i++){
        document.getElementById('arr').innerHTML = document.getElementById('arr').innerHTML + numbers[i] + ", ";
    }
})



const sortBtn = document.getElementById('sortBtn');

sortBtn.addEventListener('click', function(){
    numbers.sort(function(a,b){return a-b});
    //Ne ja sortira sekogas kako sto treba
    for(var i = 0; i < numbers.length; i++){
        document.getElementById('sortedArr').innerHTML = document.getElementById('sortedArr').innerHTML + numbers[i] + ", ";
    }
})

const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', function(){
    while(numbers.length > 0){
        numbers.pop();
    }
    document.getElementById('sortedArr').innerHTML = "Sorted Array: ";
    document.getElementById('arr').innerHTML = "Array: ";
})








