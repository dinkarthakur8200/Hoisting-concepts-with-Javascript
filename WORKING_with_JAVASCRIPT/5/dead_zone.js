{
    // Attempting to access the variable before declaration
    try {
        console.log("Value of x before declaration:", x);
    } catch (error) {
        console.log("Error caught:", error.message);
    }

    // Declaring the variable with let
    let x;

    // Logging the value after declaration but before assignment
    console.log("Value of x after declaration, before assignment:", x);

    // Assigning a value to x
    x = 10;

    // Logging the value after assignment
    console.log("Value of x after assignment:", x);
}