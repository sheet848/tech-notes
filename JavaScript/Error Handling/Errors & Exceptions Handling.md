## What is an Error?

An error is an event that occurs during the execution of a program that prevents it from continuing normally. Errors can be caused by a variety of factors, such as **syntax** errors, **runtime** errors, and **logical** errors.

### Syntax Errors

Syntax errors, also called **parsing errors**, occur at compile time in traditional programming languages and at interpret time in JavaScript.

![[Pasted image 20250305150442.png]]
### Runtime Errors (Exceptions)

- Runtime errors, also called **exceptions**, occur during execution (after compilation/interpretation).
- line causes a runtime error because the syntax is correct here, but at runtime, it is trying to call a method that does not exist.
- There are many JavaScript runtime errors (exceptions), some are as follows −
	- **ReferenceError** − Trying to access an undefined variable/ method.
	- **TypeError** − Attempting an operation on incompatible data types.
	- **RangeError** − A value exceeds the allowed range.

### Logical Errors

Logic errors can be the most difficult type of errors to track down. These errors are not the result of a syntax or runtime error. Instead, they occur when you make a mistake in the logic that drives your script and do not get the expected result.

![[Pasted image 20250305150623.png]]
## What is Error Handling?

Whenever any error occurs in the JavaScript code, the JavaScript engine stops the execution of the whole code. If you handle such errors in the proper way, you can skip the code with errors and continue to execute the other JavaScript code.
- try...catch...finally statements
- throw statements
- the onerror() event handler property
- Custom Errors

