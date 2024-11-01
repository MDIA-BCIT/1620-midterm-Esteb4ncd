/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/




//function (param) {if {} else if {} else}


function passwordCheck(userInput, password){
    if (userInput === password && password.length < 5){console.log("Your password is too short!")}
    else if (password === "reset" || password === "forgot"){console.log("Access Granted.This password you set should not be used because it glitches the system")}
    else if (userInput === "forgot"){console.log("Here is a hint")}
    else if (userInput === "reset"){console.log("Let's reset your account")}
    else if (userInput === password){console.log("Access Granted!")} 
    else if (userInput !== password){console.log("Access Denied!")}
}

// - If the user's input matches the password exactly, log out "Access Granted!"
passwordCheck("aguacate","aguacate")
// - If the user's input does not match, log out "Access Denied!"
passwordCheck("notaguacate","aguacate")
// - If the user's input is "forgot", log out "Here is a hint"
passwordCheck("forgot","aguacate")
// - If the user's input is "reset", log out "Let's reset your account"
passwordCheck("reset","aguacate")

// CHALLENGE

// - If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
passwordCheck("forgot","forgot")
passwordCheck("reset","reset")
// - If the password is less than 5 characters, log out "Your password is too short!".
passwordCheck("agua","agua")
// */

// THOUGHTS
// order matters
// at first i added a bunch of unnesessary ( I forgot how to spell it) "!==" but the challenge actually made it eassier to organize.
//it was important to pur the challenge as the top two options to be able to use less "!=="
//it took me an good amount of time to realize that i needed "password.length" for it to work.
// 
//I tend to go over ideas really fast so i wrote all of this as a way to explain the way that everything (or at least what i can remember) went through my head
// I hope it makes sense, and also, this was fun. thanks 😀


