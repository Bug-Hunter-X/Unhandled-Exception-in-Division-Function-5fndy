function add(a, b) {
  return a + b; 
}

function subtract(a, b) {
  return a - b; 
}

function multiply(a, b) {
  return a * b; 
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero'); 
    }
    return a / b; 
  } catch (error) {
    console.error("Error:", error.message); 
    return 0; // Or handle the error in a more suitable way for your application
  }
}

console.log(add(5,3));
console.log(subtract(5,3));
console.log(multiply(5,3));
console.log(divide(5,0));