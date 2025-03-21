### **Maps**

A `Map` is a collection of **key-value pairs**, where the keys can be of any data type. Unlike objects, which have string keys by default, `Map` allows keys of any type (including objects, arrays, functions, etc.).

#### Key Features:

1. Stores **key-value pairs**.
    
2. Keys can be of any data type.
    
3. Maintains the order of insertion.
    

#### Common Methods and Properties:

- `new Map(iterable)`: Creates a new `Map` from an iterable (e.g., an array of key-value pairs).
    
- `.set(key, value)`: Adds or updates a key-value pair.
    
- `.get(key)`: Retrieves the value associated with a key.
    
- `.delete(key)`: Removes a key-value pair.
    
- `.has(key)`: Checks if a key exists in the map (returns `true` or `false`).
    
- `.clear()`: Removes all key-value pairs.
    
- `.size`: Returns the number of key-value pairs.
    

#### Example:

```Javascript
const myMap = new Map();
myMap.set('name', 'Sheetal');
myMap.set('age', 25);
myMap.set({ hobby: 'coding' }, 'cool!'); // Object as a key

console.log(myMap.get('name')); // Output: Sheetal
console.log(myMap.has('age')); // Output: true
myMap.delete('age');
console.log(myMap.size); // Output: 2
```

#### Use Cases:

- Storing structured data with complex keys.
    
- Implementing caches or lookup tables.

---

A **WeakMap** in JavaScript is a collection of key-value pairs, where the keys are **objects only**, and the values can be of any data type. It's called "weak" because the references to the keys are weak, meaning that if no other references to the key object exist, it can be garbage collected. Here's an overview:

---

### **Key Characteristics of WeakMaps**
1. **Keys Must Be Objects:**
   - Unlike regular `Map`, where keys can be any data type, `WeakMap` keys must be objects.
   - Primitive values (e.g., strings, numbers) cannot be used as keys.

2. **Weak References:**
   - The key objects are weakly referenced, allowing them to be garbage collected if no other references exist. 
   - This ensures better memory management.

3. **Non-Iterability:**
   - A `WeakMap` is not iterable, meaning you cannot loop through its keys or values.
   - This is because its elements are weakly held and may disappear due to garbage collection.

4. **No Size Property:**
   - WeakMaps do not have a `size` property, as their contents cannot be reliably enumerated.

---

### **Common Methods of WeakMap**
- `WeakMap.set(key, value)`: Adds or updates a key-value pair.
- `WeakMap.get(key)`: Retrieves the value associated with the key.
- `WeakMap.delete(key)`: Removes a key-value pair.
- `WeakMap.has(key)`: Checks if a key exists in the WeakMap.

---

### **Example of a WeakMap**
```javascript
const weakMap = new WeakMap();

let obj1 = { name: "Sheetal" };
let obj2 = { age: 25 };

weakMap.set(obj1, "First Object");
weakMap.set(obj2, "Second Object");

console.log(weakMap.get(obj1)); // Output: First Object
console.log(weakMap.has(obj2)); // Output: true

obj1 = null; // Remove reference to the object
// obj1 is now eligible for garbage collection
```

Here:
- `obj1` and `obj2` are the keys.
- When `obj1` is set to `null`, it becomes eligible for garbage collection, and the associated key-value pair will be removed from the `WeakMap`.

---

### **Use Cases of WeakMap**
1. **Private Data for Objects:**
   - You can use a WeakMap to store private data associated with an object.
   - This ensures that the private data is automatically removed when the object is garbage collected.

   Example:
   ```javascript
   const privateData = new WeakMap();

   function Person(name) {
       const privateInfo = { secret: "This is private" };
       privateData.set(this, privateInfo);
       this.name = name;
   }

   Person.prototype.getSecret = function () {
       return privateData.get(this).secret;
   };

   const person = new Person("Sheetal");
   console.log(person.getSecret()); // Output: This is private
   ```

2. **DOM Element Caching:**
   - WeakMaps are useful for associating metadata with DOM elements without risking memory leaks.
   
---

### **Key Differences Between Map and WeakMap**
| Feature           | Map                                | WeakMap                          |
|-------------------|------------------------------------|-----------------------------------|
| Key Type          | Any data type.                    | Only objects.                    |
| Garbage Collection| No automatic cleanup.             | Keys are garbage collected.      |
| Iterability       | Iterable (`for...of`).            | Not iterable.                    |
| Size Property     | Has a `.size` property.           | No `.size` property.             |

---

Would you like to explore more examples or dive into specific use cases involving WeakMaps? Let me know!