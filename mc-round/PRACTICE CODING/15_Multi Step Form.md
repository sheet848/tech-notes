```jsx
import React, { useState } from 'react';
import './styles.css'

const App = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        country: "",
    });

    const nextStep = () => {
        if(step < 3) setStep(step + 1);
    }

    const prevStep = () => {
        if(step > 1) setStep(step - 1);
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted sucessfully");
    }
    
    return (
        <>
        <div className="form-container">
            <h2>Multi Step Form</h2>
            <form onSubmit={handleSubmit}>

                { step === 1 && (
                    <div className="form-step">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                )}

                { step === 2 && (
                     <div className="form-step">
                    <label>Age:</label>
                     <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                    <label>Country:</label>
                     <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                )}

                { step === 3 && (
                <div className="form-step">
                    <h3>Confirm Details:</h3>
                    <p><strong>Name:</strong>{formData.name}</p>
                    <p><strong>Email:</strong>{formData.email}</p>
                    <p><strong>Age:</strong>{formData.age}</p>
                    <p><strong>Country:</strong>{formData.country}</p>
                </div>
                )}
               
                <div className="buttons">
                    { step > 1 && (
                        <button type="button" onClick={prevStep}>Back</button>
                    )}
                    { step < 3 && (
                        <button type="button" onClick={nextStep}>Next</button>
                    )}
                    { step === 3 && (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </div>
        </>
    )
}

export default App
```

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

.form-container {
  width: 320px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  background: #f3f4f6;
  text-align: left;
}

h2 {
  text-align: center;
}

.form-step {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

.buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 0.6rem 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #1e40af;
}
```