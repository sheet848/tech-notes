Lexical scope, also known as **static scope**, is a fundamental concept in JavaScript (and many other programming languages). It determines how variable names are resolved in nested functions and which variables are accessible in different parts of the code, based on the structure of the code itself—not the execution flow.

### **How Lexical Scope Works**
- A variable's scope is defined by the position of its declaration in the source code.
- When a function is defined, it "remembers" the environment in which it was created (its outer scope), and it can access variables from that outer scope even after the function is called elsewhere.

### **Key Example**
```javascript
function outer() {
    const outerVariable = "I'm from the outer scope!";

    function inner() {
        console.log(outerVariable); // Accessing a variable from the outer scope
    }

    inner();
}

outer(); // Logs: "I'm from the outer scope!"
```
In this example:
- `outerVariable` is declared in the scope of the `outer` function.
- The `inner` function has access to `outerVariable` because it is defined within the `outer` function's lexical scope.

### **Lexical Scope vs. Execution Context**
Lexical scope is determined during **compile time**, based on where functions and variables are written. It does not change at runtime, regardless of where or how functions are called.

For example:
```javascript
function outer() {
    const outerVariable = "Outer";
    return function inner() {
        console.log(outerVariable);
    };
}

const innerFunction = outer();
innerFunction(); // Logs: "Outer"
```
Even though `innerFunction` is called outside of `outer`, it still has access to `outerVariable` because of lexical scoping.

### **Common Misconception: Dynamic Scope**
JavaScript does not use **dynamic scoping**, which would mean that variable resolution depends on the function call stack. Instead, it relies solely on where the function is **defined** in the source code.

---

### **Practical Use: Closures**
Lexical scope plays a key role in closures, where an inner function retains access to variables in its outer scope even after the outer function has executed:
```javascript
function makeCounter() {
    let count = 0;

    return function increment() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Here:
- The `increment` function "remembers" the `count` variable from the `makeCounter` scope, demonstrating how lexical scoping enables closures.

Would you like to explore closures, block scope, or anything else related to this concept? Let me know!