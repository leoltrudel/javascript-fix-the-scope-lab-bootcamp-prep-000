var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
<<<<<<< HEAD
  
  return n + 2
=======
   const two = 2
  return n + two
>>>>>>> 80e0f161c2c89b8f79115bd156d0a9b631495584

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()()
=======
theFunk = funkyFunction
>>>>>>> 80e0f161c2c89b8f79115bd156d0a9b631495584
