A **Service Worker** is a special type of JavaScript file that **runs in the background** of your web app — separate from the main browser thread — and acts as a **network proxy, cache manager, and event handler**.

In short:

> 🚀 **Service workers let you build offline-capable, fast-loading, reliable web apps** — like Progressive Web Apps (PWAs).

---

### 🧠 What Can a Service Worker Do?

- ✅ **Intercept network requests**
    
- ✅ **Cache assets** (HTML, CSS, JS, images, APIs)
    
- ✅ **Serve cached content offline**
    
- ✅ Handle **push notifications**
    
- ✅ Perform background **sync tasks**
    

---

### 🔄 Life Cycle

1. **Register**: You register the service worker in your main JS file.
    
2. **Install**: Browser installs it and runs the install event (where you can pre-cache files).
    
3. **Activate**: It takes control of the page and starts intercepting fetch requests.
    
4. **Fetch**: Every network request can now be intercepted and custom-handled (like serving from cache).
    

---

### 💻 Example

#### 1. Registering the service worker (in `main.js` or `index.js`)

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('Service Worker registered', reg))
    .catch(err => console.error('Registration failed:', err));
}
```

#### 2. Inside `service-worker.js`

```javascript
// Cache during install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js'
      ]);
    })
  );
});

// Serve from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

---

### ⚠️ Key Notes

- Only works on **HTTPS** (except localhost)
    
- Runs in a separate thread (can’t access DOM directly)
    
- Can be a bit tricky to manage cache versions and updates
    

---

# Example of Service Worker in PWA

Here's a small Progressive Web App (PWA) with offline-first support using a service worker. The preview above shows:

- A basic HTML page
    
- Online/offline status detection
    
- PWA manifest included
    
- Service worker registration
    

---

### 🧠 Next, create these files alongside the HTML:

#### 1. `manifest.json`

```json
{
  "name": "PWA Offline Example",
  "short_name": "PWA Offline",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#317EFB",
  "icons": [{
    "src": "icon.png",
    "sizes": "192x192",
    "type": "image/png"
  }]
}
```

#### 2. `service-worker.js`

```javascript
const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URLS = ['/', '/index.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(OFFLINE_URLS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => caches.match('/'));
  );
});
```

---

### ✅ Features

- Works offline after first load (cached pages)
    
- Detects offline/online status
    
- Can be installed on mobile home screen (PWA)
    


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#317EFB"/>
  <link rel="manifest" href="manifest.json">
  <title>PWA Offline Example</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 2rem; }
    .status { color: green; font-weight: bold; }
  </style>
</head>
<body>
  <h1>📱 PWA + Offline Support</h1>
  <p class="status">You're online</p>
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(err => console.error('Service Worker registration failed:', err));
    }

    window.addEventListener('online', () => document.querySelector('.status').textContent = "You're online");
    window.addEventListener('offline', () => document.querySelector('.status').textContent = "You're offline (cached mode)");
  </script>
</body>
</html>

```

![[Pasted image 20250406134528.png]]