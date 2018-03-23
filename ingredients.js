
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;

// while-loop
while (repeat < ingredients.length){
  console.log(ingredients[repeat])
  repeat++
}
// for-loop
for (var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// reverse for-loop

for (var i = ingredients.length -1; i >=0; --i){
  console.log(ingredients[i]);
}