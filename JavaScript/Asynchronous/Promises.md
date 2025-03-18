- A JavaScript promise is an object that represents the completion or failure of an asynchronous operation. 
- It employs callback functions to manage asynchronous operations, offering a easier syntax for handling such operations more easily.

- A promise object can created using the Promise() constructor. The promise constructor takes a callback function as an argument.
- The callback function accepts two functions, resolve() and reject(), as arguments.
- The resolve function is called if the promise returns successfully. 
- The reject function is called when taks fails and returns the reason.

## Syntax

![[Pasted image 20250303151605.png]]

## Promise Constructors

![[Pasted image 20250303151652.png]]

## Promise then() method

![[Pasted image 20250303151758.png]]

### Example

![[Pasted image 20250303151938.png]]

## Promise catch() method

```
promise
.then(successFunc) 
.catch(errorFunc);
```

![[Pasted image 20250303152134.png]]

## Promise finally() method

- The finally() method of the promise object can be used with the instance of the Promise object. 
- The code of the finally() method always gets executed when the promise is fulfilled.

![[Pasted image 20250303152310.png]]

---
