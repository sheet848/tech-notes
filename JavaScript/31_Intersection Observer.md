# What is Intersection Observer?

The **Intersection Observer** is a web API in JavaScript that lets you **asynchronously observe changes in the intersection (visibility)** of a target element with an ancestor element or the viewport.

In simple terms:

> It tells you **when an element becomes visible or invisible** (fully or partially) on the screen — without needing to manually use scroll events.

---

### 🔧 Common Use Cases

- **Lazy loading** images or components
    
- **Infinite scrolling** (loading more content when reaching the bottom)
    
- **Triggering animations** when elements come into view
    
- **Reporting visibility** for ads or analytics
    

---

### 💡 Basic Example

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible in viewport');
    }
  });
});

const target = document.querySelector('#myElement');
observer.observe(target);
```

- `entries` is an array of all observed elements.
    
- `entry.isIntersecting` is `true` when the element is visible (even partially) in the viewport.
    

---

### 🛠 Options You Can Pass

```javascript
const observer = new IntersectionObserver(callback, {
  root: null,             // default is the viewport
  rootMargin: '0px',      // margin around the root
  threshold: 0.5          // 0 to 1 (e.g., 0.5 means 50% of element must be visible)
});
```

---

Want a real-world example, like lazy loading images or an animation on scroll?

# More Info

Great question!

The **Intersection Observer API** is a **built-in browser API** — meaning:

✅ **You don’t have to install or import it manually**  
✅ It’s available by default in all **modern browsers**

---

### 🚫 But here's what you DO have to do:

You **must write the code** to **use** the API on your site — it's not automatic. The browser won’t observe anything unless you explicitly:

1. **Create** an `IntersectionObserver` instance
    
2. **Tell it** which elements to observe using `.observe(element)`
    

So, **it's optional** and **only used when you choose to**.

---

### 🔍 Browser Support

Intersection Observer is widely supported:

- ✅ Chrome, Firefox, Safari, Edge, Opera
    
- 🚫 Not in **Internet Explorer** (but there's a [polyfill](https://github.com/w3c/IntersectionObserver/tree/main/polyfill))
    

---

Want a small practical example of how to use it for something like **lazy loading images** or **fade-in animations**?

# Lazy Load image example

Absolutely! Here's a clean and simple example of **lazy loading images** using the **Intersection Observer API**. This improves performance by loading images **only when they are about to enter the viewport**.

---

### 🖼️ 1. HTML with `data-src` instead of `src`

```html
<img data-src="image1.jpg" alt="Image 1" class="lazy-image" width="600" height="400" />
<img data-src="image2.jpg" alt="Image 2" class="lazy-image" width="600" height="400" />
<img data-src="image3.jpg" alt="Image 3" class="lazy-image" width="600" height="400" />
```

- The actual image URL is stored in `data-src`.
    
- The `src` is left blank (or can point to a tiny placeholder) until the image comes into view.
    

---

### 🧠 2. JavaScript to Lazy Load

```javascript
const lazyImages = document.querySelectorAll('.lazy-image');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;  // Set the real image src
      img.onload = () => img.classList.add('loaded'); // Optional: add a class when loaded
      observer.unobserve(img);    // Stop observing after it's loaded
    }
  });
});

lazyImages.forEach(img => observer.observe(img));
```

---

### 🎨 Optional CSS for smooth effect

```css
.lazy-image {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

.lazy-image.loaded {
  opacity: 1;
}
```

---

### ✅ What Happens:

- Images are **not loaded** on page load.
    
- As soon as an image scrolls into view (even partially), it's **loaded and displayed**.
    
- `observer.unobserve(img)` makes sure we don't re-check the image after it's loaded.
    

---

Want a version that includes a placeholder or blur effect before the image loads?