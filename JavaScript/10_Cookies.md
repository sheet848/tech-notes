Cookies in JavaScript are small pieces of data stored on the user's browser by a website. They are commonly used to persist user information between page loads or visits, such as user preferences, session management, and tracking. Here's a detailed look:

---

### **What Are Cookies?**
- Cookies are key-value pairs stored as strings in the browser.
- They are sent with every HTTP request to the server, making them useful for maintaining state, like logged-in sessions.
- However, they have limitations such as size (typically 4KB per cookie) and privacy concerns.

---

### **How to Work with Cookies in JavaScript**

1. **Creating/Setting Cookies**
   You can set a cookie using `document.cookie`. Example:
   ```javascript
   document.cookie = "username=Sheetal; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
   ```
   - `username=Sheetal` is the key-value pair.
   - `expires` sets the expiration date. If omitted, the cookie becomes a session cookie (deleted when the browser is closed).
   - `path=/` specifies that the cookie is available to all pages on the domain.

2. **Reading Cookies**
   Cookies can be read from `document.cookie`:
   ```javascript
   console.log(document.cookie);
   // Output: "username=Sheetal; theme=dark"
   ```
   Note: `document.cookie` returns all cookies as a single string, so you'll need to parse it if you're looking for a specific cookie.

3. **Updating Cookies**
   To update a cookie, set it again with the same key and a new value:
   ```javascript
   document.cookie = "username=NewSheetal; path=/";
   ```

4. **Deleting Cookies**
   You can delete a cookie by setting its expiration date to a past date:
   ```javascript
   document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
   ```

---

### **Important Cookie Attributes**
- `secure`: Ensures the cookie is only sent over HTTPS.
- `httpOnly`: Prevents client-side JavaScript from accessing the cookie (set by the server).
- `sameSite`: Controls whether cookies are sent with cross-site requests. Can be `Strict`, `Lax`, or `None`.
- `domain`: Specifies which domain can access the cookie.

---

### **Use Cases for Cookies**
1. **Session Management:** Storing session IDs to keep users logged in.
2. **User Preferences:** Remembering user settings like theme (e.g., light or dark mode).
3. **Analytics and Tracking:** Tracking user behavior for analytics purposes.

---

### **Limitations**
- Cookies are included in every HTTP request, which can increase bandwidth usage.
- Size limit: Cookies are typically limited to 4KB each.
- Security: Cookies are vulnerable to attacks like Cross-Site Scripting (XSS) or Cross-Site Request Forgery (CSRF) if not configured securely.

If you'd like, I can explain related topics like **localStorage vs. cookies**, security best practices, or walk you through practical examples! Just say the word.