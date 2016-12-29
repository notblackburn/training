// Variables
var ford = 'car'; // Strings
var carCount = 0; // Numbers
var isBroken = true; // Booleans
var myCar = {
  type: 'truck',
  speed: 5,
  hasAC: false,
  model: 'ranger'
}; // Objects
var models = ['explorer', 'F150', 'ranger', 'fit']; // Arrays

// Functions
// As a stand alone self executing function
(function() {
  console.log('This is self executing');
})();

// Stored as a variable (99% of what you do)
var whichCarDoIHave = function(car) {
  console.log('You have a ' + car.type);
}
// Call the function
whichCarDoIHave(myCar);

// Loops
// For Loop
for (var i = 0; i < models.length; i++) {
  console.log('The current car model is ' + models[i]);
};
// While Loop. Not often used. Can lock up your machine
while (isBroken) {
  if (carCount < 10) {
    console.log('The current car count is: ' + carCount);
    // Increment by 1
    carCount++;
  } else {
    isBroken = false;
    console.log('The car is fixed.');
  }
}

// Conditionals
if (myCar.hasAC) {
  console.log('My car is nice and cool');
} else if (myCar.speed > 6) {
  console.log('My car can go fast.');
} else {
  console.log('My car sucks');
}

// Switch Statements
switch (myCar.model) {
  case 'tundra':
    console.log('My truck is a tundra');
    break;
  case 'acord':
    console.log('My car is an Accord');
    break;
  default:
    console.log('I dont know what my car is');
}
