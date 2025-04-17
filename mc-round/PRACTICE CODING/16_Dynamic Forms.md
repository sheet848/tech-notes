```jsx
import React, { useState } from 'react';
import './styles.css'

const formConfig = [
    { label: "Name", type: "text", name: "name", required: true },
    { label: "Email", type: "email", name: "email", required: true },
    { label: "Age", type: "number", name: "age" },
    { label: "Country", type: "text", name: "country" }
];

const App = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted: " + JSON.stringify(formData, null, 2));
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            {
                formConfig.map((field) => (
                    <div key={field.name}>
                        <label>{field.label}</label>
                        <input 
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                    </div>
                ))
            }

            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default App
```

