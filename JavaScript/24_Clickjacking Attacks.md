A **clickjacking attack** (also known as a UI redress attack) is a type of web-based attack where an attacker tricks users into clicking on something different from what they perceive, often by hiding malicious elements under visible, legitimate UI components. This can result in users unintentionally performing actions like sharing sensitive data, approving malicious transactions, or compromising their accounts.

---

### **How Clickjacking Works**
1. The attacker embeds the target website (e.g., a banking page or social media account) inside an `<iframe>` on their malicious page.
2. The `<iframe>` is styled (e.g., with transparency or positioning) so that users can't see it or recognize it as malicious.
3. The user is tricked into clicking a visible button or link on the attacker's page, but their clicks are actually interacting with the embedded content in the hidden `<iframe>`.

Example HTML snippet for a clickjacking attack:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Malicious Page</title>
    <style>
        iframe {
            opacity: 0; /* Makes the target iframe invisible */
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <h1>Click here to win a prize!</h1>
    <button>Click Me!</button>
    <iframe src="https://www.victim-website.com"></iframe>
</body>
</html>
```
In this example:
- The attacker hides an iframe containing a legitimate page (e.g., a login form or a button to transfer funds).
- The user clicks on what appears to be the attacker's visible button but interacts with the invisible iframe instead.

---

### **Prevention Techniques**
To protect your website and users from clickjacking attacks, you can use the following methods:

1. **X-Frame-Options HTTP Header:**
   - Add the `X-Frame-Options` header to your server responses to control whether your site can be embedded in an `<iframe>`.
   - Possible values:
     - `DENY`: Prevents the page from being framed.
     - `SAMEORIGIN`: Allows framing only on the same origin.
     - `ALLOW-FROM URI`: Specifies a specific origin allowed to embed the page.
   ```javascript
   // Example for a Node.js (Express) server
   app.use((req, res, next) => {
       res.setHeader("X-Frame-Options", "DENY");
       next();
   });
   ```

2. **Content Security Policy (CSP):**
   - Use the `frame-ancestors` directive in your Content Security Policy to restrict which origins can embed your site in an `<iframe>`.
   ```html
   <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self';">
   ```
   This ensures that only the same origin can embed your page.

3. **Frame Busting with JavaScript:**
   - Prevent your site from being loaded inside an iframe using JavaScript (although this is less reliable than using headers).
   ```javascript
   if (window.top !== window.self) {
       window.top.location = window.self.location; // Break out of the iframe
   }
   ```

4. **User Awareness:**
   - Educate users on avoiding suspicious links and websites to reduce the likelihood of falling victim to clickjacking attacks.

---

Clickjacking is a serious security concern for modern web applications. Implementing the above measures will significantly reduce the risk of such attacks. Let me know if you'd like to explore any specific prevention method further!