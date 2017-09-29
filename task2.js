//------------------------------------------------------------------
// TASK 2 : getInput()
//  Write a function called getInput that checks to make sure that
//  the user is submitting a string as input.
//
//  Examine the functionality of `getInput` in the function below
//------------------------------------------------------------------
var user;

function getInput(user) {
  if (typeof user === 'string' ) {
    // console.log('DATA_RECEIVED: ' + user);
    return ('DATA_RECEIVED: ' + user)

  }else if ( typeof user === 'number') {
    // console.log('Please provide a string input, NOT a number');
    return ('Please provide a string input, NOT a number')
  }else if (typeof user === 'undefined') {
    // console.log('Please provide string input.');
    return ('Please provide string input.')

  }

}


console.assert(getInput() === "Please provide string input.")
console.assert(getInput(333) === "Please provide a string input, NOT a number")
console.assert(getInput('Mister Teatime') === "DATA_RECEIVED: Mister Teatime")
console.assert(getInput('Charlotte') === "DATA_RECEIVED: Charolette")
