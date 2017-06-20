// Business Logic
function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.calcTotal = function() {
  var total = 0;
  if (this.size === "small") {
    total += 12
    console.log("hey");
  } else if (this.size === "medium") {
    total += 18
  } else if (this.size === "large") {
    total += 24
  } else if (this.size === "mondo") {
    total += 60
  } else {
    total = 66
    alert("uhhh... do you want us to clean out our kitchen for you or not? Ya need to pick a size in order for us to make this.")
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

    var newPizza = new Pizza(inputSize, userToppings);

    $("#user-size").text(newPizza.size);
    $("#user-toppings").text(newPizza.topping + " ,");
    $("#user-total").text("$" + newPizza.calcTotal());
  });
});
