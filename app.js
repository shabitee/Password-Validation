const form = document.querySelector("#form")
const text =document.querySelector("#text");
const pswd = document.querySelector("#pswd");
const button =document.querySelector("#submit");
const log = document.querySelector("#log");
let password ="ultimate";
let name ="Taiwo";
 function login(event){
     log.textContent =`Welcome. Your seat number is 212`; event.preventDefault();
 }
     form.addEventListener("submit", login);
 

