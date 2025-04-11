1. App.js
```jsx
import React, { useState, useEffect} from "react"
import "./styles.css"

const App = () => {

    const [theme, setTheme] = useState("light");

    //set the theme -using local storage
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    //check the local storage beforehand for any theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme) {
            setTheme(theme);
            document.body.className = savedTheme;
        }
    }, []);

    //toggle the button
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <>
            <div>
                <h2>{theme === "light"? "Light" : "Dark"} Theme</h2>
                <button
                    onClick={toggleTheme}>
                    Toggle to {theme === "light" ? "dark mode" : "light mode"}</button>
            </div>
        </>
    )
}

export default App;
```

2. styles.css
```css
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}

body.light {
    background: #fff;
    color: #000;
}

body.dark {
    background: #000;
    color: #fff;
}

```

# Approach

1. create the basic UI - heading, button
2. set theme via useState
3. apply the class theme to body -> useEffect
4. check the class theme to body and apply -> useEffect
5. create toggle function
6. cond renderign for teh UI

