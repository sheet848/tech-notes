Memoization is a programming optimization technique that improves the performance of functions by storing the results of expensive function calls and reusing them when the same inputs occur again. This technique is commonly used in recursion, dynamic programming, and functional programming to save computation time.

---

### **How Memoization Works**
1. The function is modified to cache its results.
2. When the function is called:
   - If the input has been processed before, the cached result is returned.
   - If it's a new input, the function computes the result, stores it in the cache, and then returns it.

---

### **Example: Fibonacci Sequence with Memoization**
Calculating Fibonacci numbers is a classic example where memoization is beneficial, as the naive recursive solution recalculates the same values repeatedly.

#### Without Memoization (Inefficient):
```javascript
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2); // Recalculates for the same inputs
}

console.log(fib(40)); // Slow!
```

#### With Memoization (Efficient):
```javascript
function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (n in memo) return memo[n]; // Use cached result
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // Compute and cache result
    return memo[n];
}

console.log(fib(40)); // Much faster!
```

---

### **Key Concepts in Memoization**
- **Cache:** A storage mechanism (e.g., object or map) where computed results are stored using function inputs as keys.
- **Purity:** Memoization works best with **pure functions**, which are functions that always return the same output for the same input and have no side effects.

---

### **Advantages of Memoization**
- Reduces redundant calculations by reusing previous results.
- Improves performance, especially in recursive or computationally intensive functions.

### **Disadvantages of Memoization**
- Requires additional memory to store cached results.
- Not suitable for functions with a large number of unique inputs, as the cache could grow too large.

---

### **Applications of Memoization**
- Solving recursive problems, such as the Fibonacci sequence, factorials, or dynamic programming tasks.
- Improving the performance of expensive API calls (with caching).
- Optimizing rendering in web development frameworks like React (e.g., `useMemo`).

Let me know if you'd like further explanation or a more advanced example!