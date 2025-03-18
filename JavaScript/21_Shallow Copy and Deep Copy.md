In JavaScript, **shallow copy** and **deep copy** refer to different ways of duplicating objects or arrays. Understanding the distinction between the two is crucial for managing data structures and avoiding unintended side effects.

---

### **Shallow Copy**
A **shallow copy** creates a new object or array, but it only copies the first level of properties. If the properties are references to other objects or arrays, those references are copied, not the actual nested objects. This means that changes made to nested objects will affect both the original and the copied object.

#### **Example: Shallow Copy**
```javascript
const original = { name: "Sheetal", address: { city: "Bhubaneswar" } };

// Create a shallow copy using Object.assign or the spread operator
const shallowCopy = { ...original };

shallowCopy.name = "John";
shallowCopy.address.city = "Cuttack";

console.log(original.name); // Output: "Sheetal" (unchanged)
console.log(original.address.city); // Output: "Cuttack" (nested object affected)
```

In the example:
- The top-level `name` property is copied by value.
- The `address` property (an object) is copied by reference, so changes to `shallowCopy.address` also affect `original.address`.

---

### **Deep Copy**
A **deep copy** creates a completely independent copy of an object or array, including all nested objects and arrays. Changes made to the copied structure do not affect the original.

#### **Ways to Create a Deep Copy**

1. **Using `JSON.stringify` and `JSON.parse`:**
   A simple way to create a deep copy is by converting the object to a JSON string and then back to an object. However, this method has limitations (e.g., it does not handle functions, `Date` objects, or `undefined`).
   ```javascript
   const original = { name: "Sheetal", address: { city: "Bhubaneswar" } };
   const deepCopy = JSON.parse(JSON.stringify(original));

   deepCopy.address.city = "Cuttack";

   console.log(original.address.city); // Output: "Bhubaneswar" (unchanged)
   ```

2. **Using Libraries (e.g., Lodash):**
   Libraries like Lodash provide a reliable method for creating deep copies.
   ```javascript
   import _ from "lodash";
   const deepCopy = _.cloneDeep(original);

   deepCopy.address.city = "Cuttack";

   console.log(original.address.city); // Output: "Bhubaneswar" (unchanged)
   ```

3. **Manual Recursion (Custom Deep Copy Function):**
   For custom objects, you can write a recursive function to handle deep copying.
   ```javascript
   function deepCopy(obj) {
       if (obj === null || typeof obj !== "object") {
           return obj; // Return primitives as-is
       }
       const copy = Array.isArray(obj) ? [] : {};
       for (let key in obj) {
           copy[key] = deepCopy(obj[key]);
       }
       return copy;
   }

   const original = { name: "Sheetal", address: { city: "Bhubaneswar" } };
   const deepCopyObj = deepCopy(original);

   deepCopyObj.address.city = "Cuttack";

   console.log(original.address.city); // Output: "Bhubaneswar" (unchanged)
   ```

---

### **Key Differences**
| **Aspect**           | **Shallow Copy**                      | **Deep Copy**                           |
|-----------------------|---------------------------------------|-----------------------------------------|
| **Copies References** | Only the first level of the object or array. | Creates a completely independent copy.  |
| **Nested Objects**    | Still linked to the original object.   | Fully independent of the original object. |
| **Performance**       | Faster as it doesn’t traverse deeply. | Slower due to recursive copying.         |
| **Common Methods**    | `Object.assign()`, spread operator (`...`). | `JSON.parse(JSON.stringify())`, custom recursion, Lodash’s `_.cloneDeep`. |

---

### **When to Use Each**
- Use a **shallow copy** if you're working with simple objects or arrays where nested structures don't matter.
- Use a **deep copy** when you need to work with complex nested objects and want to avoid accidental modifications to the original data.

Let me know if you'd like help with more advanced examples or related concepts!