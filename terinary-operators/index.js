// if (var)
// then do something
// else do something else

const var1 = true;
const var2 = false;

// console.log(var1 ? "this is true" : "this is false")

// if logic      if it is true    if it is false
  var1     ? "this is true" : "this is false"


  var2 ? "this is true" : var1 ? "this is true" : "this is false"

  var1 && "this is true"

  console.log("seconf clg", var2 && "this is true")

//   if(var2) {

//   } else if(var1) {

//   }else {

//   }

const orderTotal = 50;
const budget = 80;

const divClassName = "blue";

const score = -5

const driver = 12

const phoneBattery = 80;

const timeToHome = 90;

// Wendell
$('body').append(`
    <div class="${driver >= 16 ? "" : "red"}">${driver >= 16 ? "You can drive solo" : "Driving solo is a no no"}"</div>
`)



// Rob
$('body').append(`
    <div class="${score < 0 ? "red" : score > 0 ? "green" : "black"}">${score}</div>
`)




// Jonathan
$('body').append(`
    <div >${phoneBattery >= timeToHome ? "Thank God" : "Need a Charger" }</div>
`)