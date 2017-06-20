// Business Logic
function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}

console.log(Pizza.size);

Pizza.prototype.calcTotal = function() {
  var total = 0;
  if (this.size === "small") {
    total += 12
  } else if (this.size === "medium") {
    total += 18
  } else if (this.size === "large") {
    total += 24
  } else if (this.size === "mondo") {
    total += 60
  }

    // Calculate based number of toppings
  for (var index = 0; index < this.topping.length; index ++) {
    total += 3;
  }
  return total;
};

// User Interface
$(document).ready(function() {
  $("#pizzaSelection").submit(function(event){
    event.preventDefault();

    var inputSize = $("input:radio[name=size]:checked").val();
    var userToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      userToppings.push($(this).val());
    });

    var newPizza = new Pizza(inputSize, userToppings, Pizza.calcTotal);

    if (inputSize === undefined) {
      alert("please enter a size!");
    } else {
      $("#user-size").text(newPizza.size);
    }
    $("#user-toppings").text(newPizza.topping + " ,");

    $("#user-total").text("$" + newPizza.calcTotal());
  });
});
