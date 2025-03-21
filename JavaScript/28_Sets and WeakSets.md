### **Sets**

A `Set` is a collection of **unique values**. This means it automatically filters out duplicate entries. Sets are particularly useful when you need to ensure data uniqueness.

#### Key Features:

1. Stores **unique values** only (no duplicates).
    
2. Allows any value type: primitive or object.
    
3. Maintains the order of insertion (though it doesn't index elements like arrays).
    

#### Common Methods and Properties:

- `new Set(iterable)`: Creates a new `Set` from an iterable (e.g., an array).
    
- `.add(value)`: Adds a value to the set.
    
- `.delete(value)`: Removes a value from the set.
    
- `.has(value)`: Checks if a value exists in the set (returns `true` or `false`).
    
- `.clear()`: Removes all values.
    
- `.size`: Returns the number of values in the set.
    

#### Example:

```Javascript

const mySet = new Set([1, 2, 3, 3, 4]); // Duplicates are ignored
console.log(mySet); // Output: Set(4) {1, 2, 3, 4}

mySet.add(5);
console.log(mySet.has(2)); // Output: true
mySet.delete(1);
console.log(mySet); // Output: Set(4) {2, 3, 4, 5}
```

#### Use Cases:

- Removing duplicates from an array.
    
- Tracking unique items (e.g., users in a session).

---

A **WeakSet** in JavaScript is a collection of objects, similar to a regular `Set`, but it has some key differences that make it unique. Here’s a rundown:

---

### **Key Characteristics of WeakSets**
1. **Only Stores Objects:**
   - Unlike `Set`, which can store any type of value (e.g., strings, numbers), a `WeakSet` can only store **objects**.
   - Primitive values like numbers or strings are not allowed.

2. **Weak References:**
   - Objects in a `WeakSet` are held by **weak references**. This means the objects can be garbage collected if there are no other references to them.
   - This is useful for memory management, as objects in a `WeakSet` don’t prevent garbage collection.

3. **No Iteration:**
   - A `WeakSet` is not iterable. You cannot loop through its elements using `for...of` or other iterators. 
   - This is because its elements are weakly held and may disappear at any time due to garbage collection.

4. **No Size Property:**
   - A `WeakSet` does not have a `size` property, as its contents are not reliably enumerable.

---

### **Common Methods of WeakSet**
- `WeakSet.add(value)`: Adds an object to the `WeakSet`.
- `WeakSet.has(value)`: Checks if an object exists in the `WeakSet`.
- `WeakSet.delete(value)`: Removes an object from the `WeakSet`.

---

### **Example of a WeakSet**
```javascript
const weakSet = new WeakSet();

let obj1 = { name: "Sheetal" };
let obj2 = { age: 25 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true

obj1 = null; // Remove reference to the object
// obj1 is now eligible for garbage collection
```

Here:
- `obj1` and `obj2` are stored in the `WeakSet`.
- When `obj1` is set to `null`, it becomes eligible for garbage collection and will eventually be removed from the `WeakSet`.

---

### **Use Cases of WeakSet**
1. **Tracking Objects without Retention:**
   - It’s useful when you need to keep track of objects, but don’t want to prevent them from being garbage collected.
   - Example: Tracking DOM elements or other objects that may be removed dynamically.

2. **Memory-Sensitive Applications:**
   - WeakSets are ideal for use cases where efficient memory management is crucial, such as caching.

---

### **Key Differences Between Set and WeakSet**
| Feature          | Set                                | WeakSet                          |
|------------------|------------------------------------|-----------------------------------|
| Value Type       | Any value (objects, primitives).  | Only objects.                    |
| Garbage Collection | No automatic cleanup.            | Objects can be garbage collected.|
| Iterability      | Iterable (e.g., `for...of`).       | Not iterable.                    |
| Size Property    | Has `.size` property.             | No `.size` property.             |

---

Would you like to explore WeakMaps next or dive deeper into the practical applications of WeakSets? Let me know!