//import prompt.js
const prompt = require("prompt-sync")();

//set input prompt
const colorIn = prompt("Would you like to Combine or deconstruct colors? (Presse 'c' for combine or 'd' for 'deconstruction': ");

//set combine and deconstruct inputs
const combine = "c";
const deconstruct = "d"





// define color selections
 const red = "red";
 const blue = "blue";
 const yellow = "yellow";
 const purple = "purple";
 const orange = "orange";
 const green = "green";

if (colorIn.includes(deconstruct)) {
    const optionD = prompt("Please select color for deconstruction. ");

    if (optionD == purple ) {
        console.log(red + " + " + blue);
    }
    
    else if (optionD == orange) {
        console.log(red +" + "+ yellow);
    }

    else if (optionD == green) {
        console.log(blue +" + "+ yellow);
    }

    else {
        console.log("error")
    }
    
}

else if (colorIn.includes(combine)) {
    const optionC = prompt("please select first color. ");
    const optionC2 =prompt("Please select second color. ");

    if (optionC == red && optionC2 == blue || optionC == blue && optionC2 == red)
    console.log(purple);

    else if (optionC == red && optionC2 == yellow || optionC == yellow && optionC2 == red)
    console.log(orange)

    else if (optionC == blue && optionC2 == yellow || optionC == yellow && optionC2 == blue)
    console.log(green)
    
    
    else {
        console.log("error. please enter valid combination.")
    }
}

else {
    console.log("invalid input. Please enter 'c' for 'combine' or 'd' for 'deconstruction'" );
}

