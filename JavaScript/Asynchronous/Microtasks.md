- Microtasks in JavaScript are small functions that are executed after the completion of the function or program code that creates them and if the JavaScript execution stack is empty. 
- Microtasks are executed before any macrotasks, such as setImmediate() and setTimeout(). 
- Microtasks are used to implement features such as promises.

## JavaScript Event Loop

- The event loop executes the JavaScript code line-by-line. It adds the code to the call stack, a queue to execute it.
- JavaScript contains two types of queues to execute the tasks.
	- Micro tasks queues
	- Macro tasks queues

- When the call stack queue is empty, the event loop executes all tasks inside the microtask queue.
- After that, it executes all functions and code in the Macro task queue.

## Microtasks in JavaScript
- a microtask is a shorter function that is produced by the promise, or asynchronous function, and consumed later.

- JavaScript run engine executes the whole script, adds code from the main thread to the call stack, and micro-tasks into the microtask queue. 
- When the execution of all tasks of the call stack is completed, it completes the execution of all tasks in the microtask queue.

![[Pasted image 20250303155953.png]]

##  Macrotask
- Macrotasks are also a short function that gets executed after the execution of all code, which is inside the call stack and microtask queue.
- JavaScript run-time engine adds the macro tasks into the microtask queue.

- The callback functions produced by the below methods get added to the Macrotask queue.
	- setTimeout
	- setInterval
	- setImmediate

![[Pasted image 20250303160825.png]]

### Example

![[Pasted image 20250303161103.png]]

