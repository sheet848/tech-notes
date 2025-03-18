## Async Keyword

- The async function allows you to produce the asynchronous code.
- It always returns the promise. 
- If you don't return the promise manually and return the data, string, number, etc., 
- it creates a new promise and resolves that promise with the returned value.

![[Pasted image 20250303153037.png]]

## Await Keyword

- You can use the ‘await’ keyword inside a JavaScript asynchronous function only. 
- It pauses the execution of the function until the promise gets settled, which means it is either rejected or fulfilled.

![[Pasted image 20250303153327.png]]

## Timeout() example

![[Pasted image 20250303153508.png]]

## Error Handling with JavaScript Async/Await

- With the asynchronous function, you can use the try…catch block to handle the errors.
- When the promise is fulfilled successfully, the control executes the remaining code of the ‘try’ block. 
- Otherwise, it executes the code of the ‘catch’ block to fix the errors.

![[Pasted image 20250303153616.png]]

![[Pasted image 20250303154212.png]]

## Async Class Methods

![[Pasted image 20250303154413.png]]

## Real-time Example of JavaScript Async/Await

### Getting JSON API data 

![[Pasted image 20250303154603.png]]

## Benefits of Using JavaScript Async Function

- It increases the readability of code.
- It reduces the complexity of the code.
- It can handle multiple promises easily.
- It makes debugging easier.
- You can replace the callback function and promises with the asynchronous function.
