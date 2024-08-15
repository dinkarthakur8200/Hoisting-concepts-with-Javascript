// Attempt to call the function before it's defined
try {
    console.log(multiplyNumbers(5, 3));
} catch (error) {
    console.log("Error caught: " + error.message);
}

// Function expression
var multiplyNumbers = function(a, b) {
    return a * b;
};

// Now call the function after it's defined
console.log("Result after defining function: " + multiplyNumbers(5, 3));

// Certainly. I'll provide a complete code example that demonstrates both the function expression and the lack of hoisting for it.

// ```javascript
// // Attempt to call the function before it's defined
// try {
//     console.log(multiplyNumbers(5, 3));
// } catch (error) {
//     console.log("Error caught: " + error.message);
// }

// // Function expression
// var multiplyNumbers = function(a, b) {
//     return a * b;
// };

// // Now call the function after it's defined
// console.log("Result after defining function: " + multiplyNumbers(5, 3));
// ```

// Let's break this down:

// 1. We first try to call `multiplyNumbers(5, 3)` before it's defined. This is wrapped in a try-catch block to handle the error gracefully.

// 2. This will throw an error because function expressions are not hoisted. The error message will be logged, likely saying something like "multiplyNumbers is not a function".

// 3. We then define `multiplyNumbers` using a function expression. It takes two parameters `a` and `b` and returns their product.

// 4. After the function is defined, we call it again with the same arguments (5 and 3).

// 5. This time, the function call will succeed and output the result (15).

// When you run this code, you should see output similar to this:

// ```
// Error caught: multiplyNumbers is not a function
// Result after defining function: 15
// ```

// This demonstrates that:
// - The function cannot be called before it's defined when using a function expression.
// - Once the function is defined, it can be called successfully.

// This contrasts with function declarations, which can be called before they appear in the code due to hoisting.