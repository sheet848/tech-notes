### 🚦 What is **Distributed Rate Limiting**?

**Distributed Rate Limiting** is a technique to **control the number of requests** a user or client can make to a service **across multiple servers or instances** in a **distributed system**.

It's crucial when your backend runs on **multiple nodes (microservices, containers, edge servers, etc.)**, and you want to **enforce a global rate limit** (not just per node).

---

## 🧠 Why It’s Important

Without distributed rate limiting:

- A user could **exceed limits** by routing requests to multiple backend nodes
    
- It's **hard to coordinate limits** if each server keeps track independently
    
- You risk **DDoS**, **overloading**, or **unfair usage**
    

---

## 📦 Common Use Cases

- Limit API requests per user/IP
    
- Protect backend services from spikes
    
- Enforce fair usage policies on freemium plans
    
- Throttle bots or bad actors
    

---

## ⚙️ How It Works (High-Level)

### Key Elements:

- **Token bucket / leaky bucket / sliding window algorithms**
    
- A **shared data store** to sync state between servers
    
- Optional: edge-level enforcement (CDN, API gateways)
    

---

## 🧰 Popular Approaches

### 1. **Centralized Rate Limiting**

- All nodes check/update a **central store** like Redis
    

```plaintext
Request → App Server → Redis
         (Check + Update user rate count)
```

#### ✅ Pros:

- Easy to implement
    
- Consistent global limits
    

#### ❌ Cons:

- Redis can become a **bottleneck**
    
- Slight **latency** penalty
    

---

### 2. **Distributed Counters via Redis / Memcached**

Use Redis with TTL:

```bash
INCR user:123:requests
EXPIRE user:123:requests 60
```

If count > limit, reject the request.

#### 🔄 Optimized with Lua script (atomic):

```lua
-- Atomic check and increment in Redis
local current = redis.call("INCR", KEYS[1])
if current == 1 then
  redis.call("EXPIRE", KEYS[1], ARGV[1])
end
return current
```

---

### 3. **Token Bucket with Shared Store**

Every request tries to “take a token” from the bucket.

- Bucket refills at a steady rate (e.g., 5 tokens/sec)
    
- Can be implemented in Redis with Lua for atomicity
    

---

### 4. **Distributed Rate Limiting with API Gateway**

Use API gateways like:

- **Kong**
    
- **NGINX + Lua**
    
- **Envoy**
    
- **AWS API Gateway**
    
- **Cloudflare / Akamai / Fastly**
    

These gateways:

- Apply rate limits at **edge level**
    
- Use **global or region-shared** counters
    
- Offload logic from your app servers
    

---

## 📉 Algorithms for Rate Limiting

|Algorithm|Pros|Cons|
|---|---|---|
|**Fixed Window**|Simple, fast|Burst allowed at edges|
|**Sliding Window**|Smoother control|Needs more memory|
|**Leaky Bucket**|Smooth request rate|Can delay burst requests|
|**Token Bucket**|Allows bursts, flexible|Slightly more complex|

---

## ✅ Best Practices

- Use **Redis** with Lua for atomic, distributed counters
    
- Apply rate limits at **multiple layers** (API Gateway + app level)
    
- Monitor rejected requests to fine-tune thresholds
    
- Use **sharding** or partitioning if your central store becomes bottlenecked
    
- Consider **priority buckets** (e.g., premium users = more tokens)
    

---

## 🛠 Example: Node.js + Redis (Token Bucket Pseudo)

```js
const redis = require("ioredis")();
const limit = 100;

async function isAllowed(userId) {
  const key = `rate:${userId}`;
  const tokens = await redis.get(key);

  if (tokens === null || parseInt(tokens) < limit) {
    await redis.incr(key);
    await redis.expire(key, 60); // 60s window
    return true;
  }
  return false;
}
```

---

Let me know if you want to build this into a project, like an API gateway middleware or Redis-based rate limiter in Node, Go, or Python!