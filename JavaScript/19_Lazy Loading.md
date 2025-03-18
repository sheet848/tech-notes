**Lazy loading** is a technique in JavaScript that defers the loading of resources (such as images, videos, or JavaScript modules) until they are actually needed. This improves page load time and overall performance, as it reduces the initial download size and minimizes unnecessary resource loading.

---

### **Key Benefits of Lazy Loading**
1. **Improved Performance:** Pages load faster as only critical resources are loaded upfront.
2. **Reduced Bandwidth Usage:** Resources that are never needed (e.g., below-the-fold images) are not downloaded.
3. **Better User Experience:** Users can interact with the visible parts of the page more quickly.

---

### **How Lazy Loading Works**
1. **Images & Videos:** Media is loaded only when it comes into the user's viewport (i.e., when it's about to become visible on the screen).
2. **JavaScript Modules:** Code splitting and dynamic imports are used to load JavaScript only when it is required.

---

### **Lazy Loading Images**
Starting from HTML5, the `loading` attribute can be used to enable lazy loading for images and iframes:
```html
<img src="example.jpg" alt="Example" loading="lazy">
```
- `loading="lazy"` defers loading the image until it is in (or near) the viewport.

### **Lazy Loading with Intersection Observer**
For browsers that do not support the `loading` attribute, JavaScript can be used with the `IntersectionObserver` API:
```javascript
const images = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Replace placeholder with actual source
            img.classList.remove("lazy");
            observer.unobserve(img); // Stop observing after loading
        }
    });
});

images.forEach((img) => observer.observe(img));
```
1. This example uses a placeholder image (`src`) and the actual image stored in `data-src`.
2. Images load only when they enter the viewport.

---

### **Lazy Loading JavaScript Modules**
You can use **dynamic imports** to load JavaScript modules when needed:
```javascript
// Function that loads a module only when triggered
async function loadFeature() {
    const { featureFunction } = await import("./feature.js");
    featureFunction(); // Use the dynamically loaded module
}

document.getElementById("loadButton").addEventListener("click", loadFeature);
```
- Reduces the initial bundle size by splitting the code into smaller chunks.

---

### **Lazy Loading Videos**
Similar to images, you can defer video loading by specifying a `poster` image and using JavaScript:
```html
<video controls preload="none" poster="placeholder.jpg">
    <source src="example.mp4" type="video/mp4">
</video>
```
- `preload="none"` ensures the video is not loaded until the user interacts with it.

---

### **Use Cases for Lazy Loading**
- Image-heavy websites, like online stores or media galleries.
- Single-page applications (SPAs) that load content dynamically.
- Web applications where only specific components are used based on user actions.

Would you like me to explore a specific lazy loading scenario or optimize its implementation further? Let me know!