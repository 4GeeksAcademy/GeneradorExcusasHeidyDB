import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  

  let createRandom =(a)=>{
    return(a[Math.floor(Math.random()*a.length)])
    }

    
  let createExcuse =()=>{
         return(createRandom(who) + " "+ createRandom(action) +" "+ createRandom(what) +" "+ createRandom(when))
     };
  document.getElementById ("excuse").innerHTML = createExcuse() 

   
}