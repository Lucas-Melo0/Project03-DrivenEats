// Global Variables

let selectedDish;
let selectedBeverage;
let selectedDessert;
let dishes;
let beverage;
let dessert;
let dishePrice;
let beveragePrice;
let dessertPrice;
let curatedDish;
let curatedBeverage;
let curatedDessert;
let finalPrice;
let checkmarkDish;
let checkmarkBeverage;
let checkmarkDessert;

// Selection functions

function dishSelection(element){
  
   dishes = element.innerHTML; 
   selectedDish = document.querySelector(".dishes.border");
   checkmarkDish = document.querySelector(".showingDish");
    if (selectedDish !== null){
    selectedDish.classList.remove("border");
    checkmarkDish.classList.remove("showingDish");
    }
  element.classList.add("border");
  element.classList.add("showingDish");
  dishePrice = element.querySelector(".price").innerHTML;
  curatedDish = parseFloat(dishePrice.replace("R$","").replace(",","."));
  buttonLayoutandPrice()
}

function beverageSelection(element){

  beverage = element.innerHTML;
  selectedBeverage = document.querySelector(".beverage.border");
  checkmarkBeverage = document.querySelector(".showingBeverage");
    if (selectedBeverage !== null){
    selectedBeverage.classList.remove("border");
    checkmarkBeverage.classList.remove("showingBeverage");
    }
  element.classList.add("border");
  element.classList.add("showingBeverage");
  beveragePrice = element.querySelector(".price").innerHTML;
  curatedBeverage = parseFloat(beveragePrice.replace("R$","").replace(",","."));
  buttonLayoutandPrice()
      
}

function dessertSelection(element){
  dessert = element.innerHTML;
  selectedDessert = document.querySelector(".desserts.border");
  checkmarkDessert = document.querySelector(".showingDessert");
    if (selectedDessert !== null){
    selectedDessert.classList.remove("border");
    checkmarkDessert.classList.remove("showingDessert");
    }
  element.classList.add("border")
  element.classList.add("showingDessert") 
  dessertPrice = element.querySelector(".price").innerHTML;
  curatedDessert = parseFloat(dessertPrice.replace("R$","").replace(",",".")); 
  buttonLayoutandPrice()
     
}

// Hidden/PopUp functions

function checkout(){
  
  if (dishes && beverage && dessert){
    let hidden = document.querySelector(".conteiner");
    let opacity = document.querySelector(".menu_page");
    opacity.classList.add("opacity");
    hidden.classList.toggle("hidden1");
    let dish_price = document.querySelector(".dish_price");
    dish_price.innerHTML = curatedDish;
    let beverage_price = document.querySelector(".beverage_price");
    beverage_price.innerHTML = curatedBeverage;
    let dessert_price = document.querySelector(".dessert_price");
    dessert_price.innerHTML = curatedDessert;
    let total_price = document.querySelector(".total_price");
    total_price.innerHTML = `R$ ${finalPrice}`
}
}

function buttonLayoutandPrice(){  
  if( dishes && beverage && dessert){   // Makes the order button toggle between clickable and not clickable
    let btn = document.querySelector(".checkout");
    let visibleBtn = document.querySelector(".Visible_btn")
    btn.classList.add("background")
    btn.classList.remove("hidden")
    visibleBtn.classList.add("hidden")
  }
  if(curatedDish !== undefined && curatedBeverage !== undefined && curatedDessert !== undefined){  // Bill calculator
    localPrice= curatedDish + curatedBeverage + curatedDessert;
    finalPrice = localPrice.toFixed(2);
  }
}
function cancel(){             // Hides the confirmation menu when the button "Cancel" is pressed. 
  let hidden = document.querySelector(".conteiner");
  let opacity = document.querySelector(".menu_page");
  opacity.classList.remove("opacity");
  hidden.classList.add("hidden1");
}
function order() {          // Prompts for name and adress for whatsapp messaging of order.
  let name = prompt("Qual seu nome?")
  let adress = prompt("Qual seu endere??o?");
  let message = `Ol??, gostaria de fazer o pedido:\n - Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: ${finalPrice}\n
  Nome: ${name} \nEndere??o: ${adress}`;
  let encoded = encodeURIComponent(message);
  if (window.confirm('Clique ok para continuar para o webwhasapp'))
   {
   window.open(`https://wa.me/5583996108686?text=${encoded}`);
   };
}





