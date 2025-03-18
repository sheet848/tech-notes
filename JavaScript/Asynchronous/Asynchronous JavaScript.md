- Asynchronous JavaScript is a programming technique that enables your program to start a potentially long-running task and continue to executing other tasks parallelly. 
- JavaScript is a single-threaded programming language. 
- It means you can execute a single script or particular code at a time. JavaScript control flow moves the line by line and executes each line of code.

- We can implement asynchronous operations in our JavaScript programs using callback functions, promises, async/await etc. 
- The callback functions are functions passed as arguments to other functions. 
- The promises are objects representing the success of failure of an asynchronous operation. 
- The async/await syntax is simple implementation of promises.

## What is Synchronous JavaScript?

- The Synchronous JavaScript executes the JavaScript code line-by-line. The control flow moves from top to bottom and runs each statement one by one.

![[Pasted image 20250303133624.png]]
- It creates a call stack, adds the code to it, and executes the code in the last in, first out (LIFO) order.

## What is Asynchronous JavaScript?

- Asynchronous JavaScript enables simultaneous code execution. 
- You can use asynchronous JavaScript to make your application multi-threaded. 
- It allows you to perform time-consuming or expensive tasks together.

![[Pasted image 20250303133933.png]]

## Real-time Use Cases of Asynchronous JavaScript

Here are the real-time use cases of asynchronous JavaScript.

### Fetching data from API

When you fetch data from the API, it takes time to get the data according to the server's response time. So, you can use the asynchronous JavaScript to continue the execution of the other code without waiting for the API response.

### Loading external resources

Sometimes, it happens that you need to load multiple libraries, external scripts, images, etc., into the application. The web page doesn’t allow you to interact with the web page without loading all external resources. So you can load the external resources asynchronously.

### Task scheduling

You can use asynchronous JavaScript to schedule the tasks using the setTimeOut() method or perform tasks after a particular interval using the setInterval() method.

### Data validation

Sometimes, developers are required to do data validation. You can perform such tasks in the background or parallel with other codes.

### File uploads

If you allow users to upload large files, it may take time to upload according to users' internet speed. So you can execute the file uploading asynchronously.

### Data caching

The data caching is one of the most important features of the application to increase the performance and may take time according to the data size. So, you can use the promises to cache the data asynchronously.