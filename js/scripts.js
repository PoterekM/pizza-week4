// Business Logic
function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}



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
  });
});
