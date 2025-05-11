let firstUI = document.querySelector(".firstUI");
let firstHeading = document.querySelector(".firstHeading");
let firstInput = document.querySelector(".firstInput");
let firstError = document.querySelector(".firstError");
let firstBtn = document.querySelector(".firstBtn");

let secondUI = document.querySelector(".secondUI");
let secondHeading = document.querySelector(".secondHeading");
let secondInput = document.querySelector(".secondInput");
let secondError = document.querySelector(".secondError");
let secondBtn = document.querySelector(".secondBtn");

let thirdUI = document.querySelector(".thirdUI");
let thirdHeading = document.querySelector(".thirdHeading");
let thirdInput = document.querySelector(".thirdInput");
let thirdError = document.querySelector(".thirdError");
let thirdBtn = document.querySelector(".thirdBtn");

let forthUI = document.querySelector(".forthUI");
let forthHeading = document.querySelector(".forthHeading");
let forthInput = document.querySelector(".forthInput");
let forthError = document.querySelector(".forthError");
let forthBtn = document.querySelector(".forthBtn");
let forthlabel = document.querySelector(".forthlabel");
let forthHeader = document.querySelector(".forthHeader");
let winner = document.querySelector(".winner");
let loser = document.querySelector(".loser");

function errorHandle(element){
    setTimeout(()=>{
        element.innerHTML = "";
    },1500)
}

let count = 5;

firstBtn.addEventListener("click",()=>{
    let value = Number(firstInput.value);
    if(value){
        firstError.innerHTML = "* Please enter your name.";
        errorHandle(firstError);
    }else if (value == ""){
        firstError.innerHTML = "* Please fill the box with your name.";
        errorHandle(firstError);
    }else{
        firstUI.style.display = "none";
        secondUI.style.display = "block";
        secondHeading.innerHTML = "Welcome, " + firstInput.value;
    }
});

secondBtn.addEventListener("click",()=>{
    let value = Number(secondInput.value);
    if(!value){
        secondError.innerHTML = "* Please enter a number.";
        errorHandle(secondError);
    }else if(value > 10 || value < 0){
        secondError.innerHTML = "* Please fill the box with a number betwwen 1 to 10.";
        errorHandle(secondError);
    }else{
        secondUI.style.display = "none";
        thirdUI.style.display = "block";
        thirdHeading.innerHTML = "Second participant";
    }
});

thirdBtn.addEventListener("click",()=>{
    let value = Number(thirdInput.value);
    if(value){
        thirdError.innerHTML = "* Please enter your name.";
        errorHandle(thirdError);
    }else if (value == ""){
        thirdError.innerHTML = "* Please fill the box with your name.";
        errorHandle(thirdError);
    }else{
        thirdUI.style.display = "none";
        forthUI.style.display = "block";
        forthHeading.innerHTML = "Welcome, " + thirdInput.value + " (You)";
    }
});

forthBtn.addEventListener("click",()=>{
    let value = Number(forthInput.value);
    if(!value){
        forthError.innerHTML = "* Please enter a number.";
        errorHandle(forthError);
    }else if(value > 10 || value < 0){
        forthError.innerHTML = "* Please fill the box with a number betwwen 1 to 10.";
        errorHandle(forthError);
    }else{
        if(secondInput.value == value){
            forthHeading.innerHTML = "You Wins";
            forthHeading.style.color = "green";
            winner.style.display = "block";
            forthError.style.display = "none";
            forthInput.style.display = "none";
            forthBtn.style.display = "none";
            forthlabel.style.display = "none";
            forthHeader.style.display = "none";
        }else{
            count--;
            forthError.innerHTML = "You have " + count + " chances.";
            if(count == 0){
                forthHeading.innerHTML = "You lose";
                forthHeading.style.color = "red";
                loser.style.display = "block";
                forthError.style.display = "none";
                forthInput.style.display = "none";
                forthBtn.style.display = "none";
                forthlabel.style.display = "none";
                forthHeader.style.display = "none";
            }
        }
    }
});



