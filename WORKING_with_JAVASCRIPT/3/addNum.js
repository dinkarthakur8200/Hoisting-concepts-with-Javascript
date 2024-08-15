function addNumbers(a, b) {
    console.log("Value of result before assignment: " + result);
    
    var result = a + b;
    
    console.log("Value of result after assignment: " + result);
    
    return result;
}

console.log(addNumbers(5, 3));
// Value of result before assignment: undefined
// Value of result after assignment: 8