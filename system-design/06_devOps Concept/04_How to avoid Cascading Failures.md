A **cascading failure** happens when one part of a system fails and triggers a **chain reaction** of failures across other parts. Think of it like dominoes falling — one problem can bring down the whole system.

---

## 💥 Real-World Analogy

Imagine you're at a concert. One exit gets blocked (failure), causing a rush to other exits (overload), which then collapse under pressure (more failure). Panic spreads. That’s a **cascading failure**.

---

## 🧨 Common Triggers

- A **service goes down**, and others retry repeatedly
    
- A **slow service** causes queues to grow and timeouts to pile up
    
- **Resource exhaustion** (CPU, memory, threads, DB connections)
    

---

## ✅ How to Prevent Cascading Failures

Here's how to build resilience and stop one failure from taking down everything:

---

### 1. **Timeouts**

- Always set timeouts for network or database calls
    
- Prevents services from **waiting forever**
    

```js
axios.get('/api', { timeout: 3000 }) // 3-second max wait
```

---

### 2. **Circuit Breaker Pattern**

- Automatically stops calling a failing service after repeated errors
    
- Gives the system time to recover
    
- Example tool: **Netflix Hystrix**, **Resilience4j**
    

```ts
if (failureRate > threshold) {
  // Open the circuit
  return fallbackResponse();
}
```

---

### 3. **Bulkheads**

- Isolate parts of your system so one failure doesn't sink the whole ship
    
- Limit how many resources each component can use
    
- E.g., each service gets a fixed thread pool or connection pool
    

---

### 4. **Rate Limiting & Throttling**

- Protects services from being overwhelmed
    
- Example: Allow only 100 requests/sec per user
    

---

### 5. **Load Shedding**

- Drop low-priority requests when the system is overloaded
    
- Keeps core functionality alive (like dropping search traffic but keeping login alive)
    

---

### 6. **Graceful Degradation**

- Instead of crashing, offer a simpler fallback
    
- Example: Show cached content if live content is unavailable
    

---

### 7. **Retries with Exponential Backoff**

- Don't retry immediately — space out retries with increasing delay
    
- Reduces load on already struggling services
    

```js
retry(attempts++, delay = 1000 * 2 ** attempts)
```

---

### 8. **Monitoring and Alerts**

- Early detection helps prevent problems from snowballing
    
- Tools: Prometheus, Grafana, Datadog, New Relic
    

---

## 🧪 Bonus: Chaos Engineering

Test your system’s resilience by **intentionally causing failures** (like Netflix’s Chaos Monkey). If a single failure brings down the system, fix it before it happens in production.

---

## 📌 Summary Table

|Technique|Purpose|
|---|---|
|Timeouts|Avoid infinite waiting|
|Circuit Breakers|Stop talking to failing services|
|Bulkheads|Isolate failures|
|Rate Limiting|Control incoming traffic|
|Load Shedding|Drop non-critical requests|
|Graceful Degradation|Provide a fallback UX|
|Retry with Backoff|Avoid flooding on retries|
|Monitoring|Catch problems early|

---

Let me know if you'd like visuals, code samples, or a system walkthrough!