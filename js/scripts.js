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
  // } else {
  //   return "undefined";
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

    // if (Pizza.size === undefined) {
    //   alert("Please enter a size.");
    // }

    if (Pizza.calcTotal === undefined) {
      alert("please enter a size!");
    } else {
      $("#user-size").text(newPizza.size);
    }
    $("#user-toppings").text(newPizza.topping + " ,");

    // if (Pizza.size === undefined) {
    //   alert("Please enter a size.")
    // }
    $("#user-total").text("$" + newPizza.calcTotal());
    // newPizza.calcTotal.val() === false {
    //   alert("Please enter your size!");
    // }
  });
});
