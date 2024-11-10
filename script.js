var num = prompt("Enter a number and i will check if it is divisible by 3 and 5")
if(num % 3 == 0 && num % 5 == 0){
    console.log("fizzbuzz")
}
else if(num % 3 ==0){
    console.log("fizz")
}
else if(num % 5 == 0){
    console.log("buzz")
}
else{
    console.log("The number is not divisible by 3 or 5");
    
}


// Programa za ocenuvanje na test

var points = prompt("Enter the amount of points you got on the test")

if(points >= 0 && points <=60){
    console.log(`You have ${points} points and grade F` );
}
else if(points >=61 && points <= 70){
    console.log(`You have ${points} points and grade D`)
}
else if(points >=71 && points <= 80){
    console.log(`You have ${points} points and grade C`)
}
else if(points >=81 && points <= 90){
    console.log(`You have ${points} points and grade B`)
}
else if(points >=91 && points <= 100){
    console.log(`You have ${points} points and grade A`)
}
else{
    alert("Invalid Input");
}



