The `call`, `apply`, and `bind` methods in JavaScript are used to control the value of `this` inside a function. They are especially useful when working with objects and borrowing methods from one object to use with another. Here's a breakdown of each method and how they differ:

---

### 1. **`call` Method**
The `call` method invokes a function immediately and allows you to pass the `this` value explicitly, as well as individual arguments.

**Syntax:**
```javascript
function.call(thisArg, arg1, arg2, ...)
```

**Example:**
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
};

function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
}

greet.call(person, "Hello"); // Output: Hello, John Doe
```

---

### 2. **`apply` Method**
The `apply` method is similar to `call`, but instead of passing arguments individually, you pass them as an array.

**Syntax:**
```javascript
function.apply(thisArg, [argsArray])
```

**Example:**
```javascript
const person = {
    firstName: "Jane",
    lastName: "Smith",
};

function introduce(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

introduce.apply(person, ["Hi", "!"]); // Output: Hi, Jane Smith!
```

---

### 3. **`bind` Method**
The `bind` method does not immediately invoke the function. Instead, it returns a new function with the `this` value bound to the specified object.

**Syntax:**
```javascript
function.bind(thisArg, arg1, arg2, ...)
```

**Example:**
```javascript
const person = {
    firstName: "Alice",
    lastName: "Johnson",
};

function sayGoodbye(farewell) {
    console.log(`${farewell}, ${this.firstName} ${this.lastName}`);
}

const boundFunction = sayGoodbye.bind(person, "Goodbye");
boundFunction(); // Output: Goodbye, Alice Johnson
```

---

### Key Differences:
| Method  | Invokes the Function Immediately | Accepts Arguments As |
|---------|----------------------------------|----------------------|
| `call`  | Yes                              | Individual arguments |
| `apply` | Yes                              | Array of arguments   |
| `bind`  | No (returns a new function)      | Individual arguments |

### Use Cases:
- **`call`:** When you need to invoke a function and pass the `this` value along with arguments right away.
- **`apply`:** When you have an array of arguments to pass (e.g., for mathematical calculations or variadic functions).
- **`bind`:** When you need to create a function with a pre-bound `this` value for later execution (e.g., event handlers).

Would you like to see an example for a specific scenario, or perhaps explore how these methods are used in frameworks like React or Node.js? Let me know!

---
# PolyFill

Creating functionality similar to `call`, `apply`, and `bind` without using `Function.prototype` requires custom implementations. Below are examples of how you can achieve the same behaviors by manually passing the context (`this`) and handling arguments:

---

### Custom Implementation of `call`
The `call` method invokes a function immediately with a specific `this` context and arguments.

```javascript
function customCall(fn, context, ...args) {
    context = context || globalThis; // Default to global object if no context is provided
    const uniqueFnKey = Symbol();   // Create a unique key for storing the function
    context[uniqueFnKey] = fn;      // Temporarily add the function to the context
    const result = context[uniqueFnKey](...args); // Call the function with arguments
    delete context[uniqueFnKey];    // Remove the temporary function
    return result;                  // Return the result
}

// Example Usage
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Sheetal" };
customCall(greet, person, "Hello"); // Output: Hello, Sheetal
```

---

### Custom Implementation of `apply`
The `apply` method is similar to `call`, but it takes arguments as an array.

```javascript
function customApply(fn, context, args) {
    context = context || globalThis;
    const uniqueFnKey = Symbol();
    context[uniqueFnKey] = fn;
    const result = context[uniqueFnKey](...(args || [])); // Spread the arguments array
    delete context[uniqueFnKey];
    return result;
}

// Example Usage
function introduce(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

customApply(introduce, person, ["Hi", "!"]); // Output: Hi, Sheetal!
```

---

### Custom Implementation of `bind`
The `bind` method returns a new function with the `this` value and optionally pre-set arguments.

```javascript
function customBind(fn, context, ...bindArgs) {
    return function (...callArgs) { // Return a new function
        return fn.apply(context, [...bindArgs, ...callArgs]); // Combine bound and called arguments
    };
}

// Example Usage
function sayGoodbye(farewell) {
    console.log(`${farewell}, ${this.name}`);
}

const boundFunction = customBind(sayGoodbye, person, "Goodbye");
boundFunction(); // Output: Goodbye, Sheetal
```

---

### Key Points:
1. **Dynamic Function Context:** Each custom function temporarily assigns the target function to the specified context using a unique property (via `Symbol` to avoid conflicts).
2. **Argument Handling:** 
   - `customCall` and `customApply` differ in how they handle arguments (`...args` vs. an array).
   - `customBind` returns a new closure and supports partial application of arguments.
3. **Cleanup:** After execution, the temporary function property is removed to maintain the integrity of the context object.

These approaches mimic the behavior of `call`, `apply`, and `bind` without relying on `Function.prototype`. Let me know if you’d like further explanations or applications!