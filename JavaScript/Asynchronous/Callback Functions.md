- The callback function in JavaScript is regularly passed as an argument of another function. 
- The callback function can be called inside the parent function after completing the particular task in the parent function. 
- It is mainly used to handle the asynchronous operations.

## Syntax

![[Pasted image 20250303134554.png]]
## Example

![[Pasted image 20250303134819.png]]

## Passing the anonymous function as a callback

![[Pasted image 20250303144032.png]]

## Need for the Callback Function

- When you need to fetch the data from API, load images, or perform any asynchronous operations, it can take time and block the execution of the other code.
- In such cases, you can use the callback function to execute the code, which must be executed after the asynchronous operation, and you can execute the other code without blocking it.

![[Pasted image 20250303144355.png]]

## Callback Function with built-in Methods

```
arr.sort(callback);
```

![[Pasted image 20250303145210.png]]

### JavaScript array.filter() method with the callback functions
```
Array.filter(callback);
```

![[Pasted image 20250303145339.png]]

## Callback Function with Events

```
Element.addEventListener(event, callback);
```

![[Pasted image 20250303145443.png]]
## Nesting Callbacks and Callback Hell

If the first function is dependent on the data of the second function, and the second function is dependent on the data of the third function, you may require the nested callback function.

![[Pasted image 20250303150314.png]]

![[Pasted image 20250303150330.png]]

Due to its complex syntax of the nested callback, it’s also called the callback hell.

Whenever you need to use the nested callback functions, you can use the promises or async/await to write the simpler code.