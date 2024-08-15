{
    // Attempting to access variables before declaration
    console.log("Before declaration:");
    try {
        console.log("x (var):", x);
    } catch (e) {
        console.log("Error accessing x:", e.message);
    }
    try {
        console.log("y (let):", y);
    } catch (e) {
        console.log("Error accessing y:", e.message);
    }
    try {
        console.log("z (const):", z);
    } catch (e) {
        console.log("Error accessing z:", e.message);
    }

    // Declaring and initializing variables
    var x = 1;
    let y = 2;
    const z = 3;

    // Accessing variables after declaration
    console.log("\nAfter declaration:");
    console.log("x (var):", x);
    console.log("y (let):", y);
    console.log("z (const):", z);
}