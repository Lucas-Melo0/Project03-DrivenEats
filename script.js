
//let border = document.getElementsByClassName("dishes");
//for (let i = 0; i < border.length; i++){
 //   document.getElementsByClassName("dishes")[i].addEventListener("click",function() {
     //   this.classList.add("border");
  //  });
//}
function dishSelection(element){
  let selectedDish = document.querySelector(".dishes.border");
    if (selectedDish !== null ){
    selectedDish.classList.remove("border")
    }
  element.classList.add("border")    
}

function beverageSelection(element){
  let selectedBeverage = document.querySelector(".beverage.border");
    if (selectedBeverage !== null ){
    selectedBeverage.classList.remove("border")
    }
  element.classList.add("border")    
}

function dessertSelection(element){
  let selectedDessert = document.querySelector(".desserts.border");
    if (selectedDessert !== null ){
    selectedDessert.classList.remove("border")
    }
  element.classList.add("border")    
}
