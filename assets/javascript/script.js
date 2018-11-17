//making random goal number
var goalNumber = Math.floor(Math.random() * 75);

$("#worth").text(goalNumber);

var counter = 0;

// make an array for image value options.
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// make for loops to have each crystal a different number option
for (var i = 0; i < numberOptions.length; i++) {

  var crystal1 = $("#img1");

  crystal1.attr("value", numberOptions[i]);
}

for (var i = 0; i < numberOptions.length; i++) {

  var crystal2 = $("#img2");

  crystal2.attr("value", numberOptions[i]);
}

for (var i = 0; i < numberOptions.length; i++) {

  var crystal3 = $("#img3");

  crystal3.attr("value", numberOptions[i]);
}

for (var i = 0; i < numberOptions.length; i++) {

  var crystal4 = $("#img4");

  crystal4.attr("value", numberOptions[i]);
}

// making a function that adds to your total score when a crystal is clicked
$("#img1").on("click", function() {

  var crystalValue = ($(this).attr("value"));

  crystalValue = parseInt(crystalValue);
  
  counter += crystalValue;

  // if the goal number matches the total score then player wins and resets game

  if (counter === goalNumber) {
    alert("You win!");
    
  }
  // if total score is bigger than the goal number then player lost and resets
  else if (counter >= goalNumber) {
    alert("You lose!");

  }

  // show the counter on page
  $("#totsco").prepend(counter);
});

$("#img2").on("click", function() {

  var crystalValue = ($(this).attr("value"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  if (counter === goalNumber) {
    alert("You win!");
  }

  else if (counter >= goalNumber) {
    alert("You lose!!");
  }

  $("#totsco").prepend(counter);
});

$("#img3").on("click", function() {

  var crystalValue = ($(this).attr("value"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  if (counter === goalNumber) {
    alert("You win!");
  }

  else if (counter >= goalNumber) {
    alert("You lose!!");
  }

  $("#totsco").prepend(counter);
});

$("#img4").on("click", function() {

  var crystalValue = ($(this).attr("value"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  if (counter === goalNumber) {
    alert("You win!");
  }

  else if (counter >= goalNumber) {
    alert("You lose!!");
  }

  $("#totsco").prepend(counter);
});