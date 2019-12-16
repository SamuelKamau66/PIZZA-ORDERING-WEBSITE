function Pizza(pizzaSize,pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.sizeCost = function () {
  var pizzaSizePrice = 0;
  if(this.pizzaSize === "Large" ) {
     return pizzaSizePrice += 2;
  } else {
    return pizzaSizePrice += 0;
  }
}
Pizza.prototype.toppingsCost = function () {
var pizzaPrice = 10;
pizzaPrice += this.pizzaToppings.length ;
