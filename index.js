// For the first image
let randonNumber1=Math.floor(Math.random()*6)+1;
let randomDiceImage="dice"+randonNumber1+".png" // Random Dice images dice1.png-dice6.png
let randomImageSource="images/" + randomDiceImage // images/dice1-dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

// For the second image
let randonNumber2=Math.floor(Math.random()*6)+1;
let randomImageSource2="images/" + "dice" + randonNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// Using Else if statement

if (randonNumber1>randonNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if (randonNumber2>randonNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="The score is Tie!"
}