### **Consistent Hashing in System Design**

#### **1️⃣ What is Consistent Hashing?**

**Consistent Hashing** is a **specialized hashing technique** used in **distributed systems** to efficiently distribute data among servers **while minimizing reassignments** when a server is added or removed.

✅ **Solves the problem of data redistribution in traditional hashing**.  
✅ **Widely used in distributed caching systems (e.g., Memcached, Redis), database sharding, and load balancing**.

---

#### **2️⃣ Why Do We Need Consistent Hashing?**

**Problem with Traditional Hashing (Modulo Hashing)**  
A common way to assign data to servers is:

server=hash(key)mod  number of servers\text{server} = \text{hash(key)} \mod \text{number of servers}

🚨 **Issue:** When a server is added or removed, almost all keys must be reassigned. This causes massive cache misses and increases system load.

✅ **Solution: Consistent Hashing** ensures **only a small fraction of keys are reassigned** when the number of servers changes.

---

#### **3️⃣ How Consistent Hashing Works**

1. **Arrange servers on a virtual ring (hash space)**
    
    - Imagine a **circular space** (hash range from `0` to `2³²-1`).
        
    - Each server is assigned a **hash** value and placed on this ring.
        
2. **Map data keys onto the ring**
    
    - Each **key (request, cache item, etc.)** is hashed onto the same ring.
        
    - A key is **assigned to the first server in the clockwise direction**.
        
3. **Handling Server Changes**
    
    - **Adding a server:** Affects only the keys between the new server and the next server.
        
    - **Removing a server:** The keys it handled are reassigned to the next server in the ring.
        

---

#### **4️⃣ Example: Consistent Hashing in Action**

Consider **3 servers** (`A, B, C`) placed on the ring at hash positions:

```
0 --- A (100) --- B (200) --- C (300) --- 0 (wraps around)
```

Keys (`X, Y, Z`) are placed on the ring as follows:

- `hash(X) = 120` → Goes to **B**
    
- `hash(Y) = 250` → Goes to **C**
    
- `hash(Z) = 90` → Goes to **A**
    

➡ **What happens if we add a new server `D` at 150?**

- Only keys **between 100 (A) and 150 (D)** shift to `D`.
    
- Instead of reassigning **all** keys, only a few move.
    

---

#### **5️⃣ Virtual Nodes (vNodes)**

To **balance load better**, servers can have **multiple positions** on the ring using **virtual nodes**.  
✅ Prevents **hotspots** where a single server gets too much traffic.  
✅ Each server is represented **multiple times** on the ring with different hash values.

---

#### **6️⃣ Real-World Use Cases**

🔹 **Distributed Caching (Memcached, Redis)** → Ensures minimal cache misses when adding/removing servers.  
🔹 **Database Sharding** → Efficient key-based partitioning of database rows.  
🔹 **Load Balancing (CDN, API Gateways)** → Distributes requests across backend services.  
🔹 **Distributed Hash Tables (DHTs) like BitTorrent, DynamoDB** → Efficiently locate data in a P2P system.

---

#### **7️⃣ Comparison: Consistent Hashing vs. Modulo Hashing**

|Feature|Modulo Hashing|Consistent Hashing|
|---|---|---|
|**Scalability**|Poor (Rehashing required for all keys)|High (Only a fraction of keys move)|
|**Server Addition/Removal**|Causes large-scale remapping|Minimal key movement|
|**Load Balancing**|Can be uneven|More balanced with virtual nodes|

---

### **🔹 Summary**

✅ **Consistent Hashing** is a method of distributing data **efficiently** across servers in a distributed system.  
✅ Uses a **hash ring** to assign data to the **nearest server clockwise**.  
✅ **Minimizes disruption** when adding/removing servers, unlike modulo hashing.  
✅ Used in **caching, database sharding, P2P networks, and load balancing**.

Would you like me to explain **how to implement Consistent Hashing in code**? 🚀