
//let border = document.getElementsByClassName("dishes");
//for (let i = 0; i < border.length; i++){
 //   document.getElementsByClassName("dishes")[i].addEventListener("click",function() {
     //   this.classList.add("border");
  //  });
//}
// Global Variables

let selectedDish;
let selectedBeverage;
let selectedDessert;
let dishes;
let beverage;
let dessert;
let cancelAction;



// Selection functions

function dishSelection(element){
  
   dishes = element.innerHTML; 
   selectedDish = document.querySelector(".dishes.border");
    if (selectedDish !== null ){
    selectedDish.classList.remove("border")
    }
  element.classList.add("border")
  buttonLayout()
}

function beverageSelection(element){

  beverage = element.innerHTML;
  selectedBeverage = document.querySelector(".beverage.border");
    if (selectedBeverage !== null ){
    selectedBeverage.classList.remove("border")
    }
  element.classList.add("border")
  buttonLayout()
      
}

function dessertSelection(element){
  dessert = element.innerHTML;
  selectedDessert = document.querySelector(".desserts.border");
    if (selectedDessert !== null ){
    selectedDessert.classList.remove("border")
    }
  element.classList.add("border")  
  buttonLayout()
     
}

// Hidden/PopUp function

function checkout(){
  
  if (dishes && beverage && dessert){
    let hidden = document.querySelector(".hidden1");
    hidden.classList.remove("hidden1");
   
}
}

function buttonLayout(){
  if( dishes && beverage && dessert){
    let btn = document.querySelector(".checkout");
    let visibleBtn = document.querySelector(".Visible_btn")
    btn.classList.add("background")
    btn.classList.remove("hidden")
    visibleBtn.classList.add("hidden")
  }
}



