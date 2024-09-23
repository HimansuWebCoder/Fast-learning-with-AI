// Here are all possible ways to handle errors in JS

// 1. Using try...catch
// Step: Wrap your code in a try block and catch any error in the catch block.
// Usage: For synchronous code errors.

try {
	// Code that may throw an error
	let result = riskyOperation();
} catch (error) {
	console.error("An error occurred:", error);
}

// 2. Using throw
// Step: Manually throw an error using throw when something goes wrong.
// Usage: To raise custom errors.

function validateInput(input) {
	if (input === "") {
		throw new Error("Input cannot be empty");
	}
	return true;
}

// 3. Using finally
// Step: Execute code regardless of whether an error occurred, using finally.
// Usage: To clean up resources, such as closing a connection.

try {
	let file = openFile();
} catch (error) {
	console.error("Error occurred:", error);
} finally {
	closeFile(); // Always executed
}

// 4. Using Promise.catch()
// Step: Handle errors in promises using .catch() after .then().
// Usage: For handling asynchronous operations with promises.

fetch("https://api.example.com/data")
	.then((response) => response.json())
	.catch((error) => console.error("Error fetching data:", error));

// 5. Using async...await with try...catch
// Step: Combine async...await with try...catch for cleaner asynchronous error handling.
// Usage: For handling errors in asynchronous functions.

async function fetchData() {
	try {
		let response = await fetch("https://api.example.com/data");
		let data = await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

// 6. Handling Global Errors with window.onerror
// Step: Use window.onerror to catch all unhandled errors globally.
// Usage: For catching errors that are not handled locally.

window.onerror = function (message, source, lineno, colno, error) {
	console.error("Global error caught:", message);
};

// 7. Using Promise.finally()
// Step: Add .finally() to promises to execute code after completion.
// Usage: To run code after promise resolution, regardless of the result.

fetch("https://api.example.com/data")
	.then((response) => response.json())
	.catch((error) => console.error("Error:", error))
	.finally(() => console.log("Fetch operation complete."));

// 8. Handling Rejections with process.on('unhandledRejection') (Node.js)
// Step: Handle unhandled promise rejections in Node.js using process.on().
// Usage: For Node.js applications to catch unhandled rejections.

process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Small Example:

function divide(a, b) {
	try {
		if (b === 0) throw new Error("Cannot divide by zero");
		return a / b;
	} catch (error) {
		console.error(error.message);
	} finally {
		console.log("Division attempted.");
	}
}

divide(10, 0); // Output: "Cannot divide by zero" followed by "Division attempted."

// This covers different methods to handle errors step by step in JavaScript!
