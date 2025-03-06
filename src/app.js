import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function() {
  //write your code here... primer array
  let createExcuse =()=>{
     let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
     let action = ['ate', 'peed', 'crushed', 'broke'];
     let what = ['my homework', 'my phone', 'the car'];
     let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
     return(who[Math.floor(Math.random()*who.length)] + " "+ action[Math.floor(Math.random()*action.length)] +" "+ what[Math.floor(Math.random()*what.length)] +" "+ when[Math.floor(Math.random()*when.length)])
     };
  document.getElementById ("excuse").innerHTML = createExcuse() 
   

  //segundo array 
  //let createExcuse2 =()=>{
   // let action = ['ate', 'peed', 'crushed', 'broke'];
    //return(action[Math.floor(Math.random()*action.length)])
  //}
  //document.getElementById ("excuse2").innerHTML = createExcuse2()
 

  //tercer array 
  //let createExcuse3 =()=>{
    //let what = ['my homework', 'my phone', 'the car'];
   // return(what[Math.floor(Math.random()*what.length)])
 // }
 // document.getElementById ("excuse3").innerHTML = createExcuse3()

   //cuarto array 
   //let createExcuse4 =()=>{
   // let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    //return(when[Math.floor(Math.random()*when.length)])
  //}
 
  //document.getElementById ("excuse4").innerHTML = createExcuse4()

}
