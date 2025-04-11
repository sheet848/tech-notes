```jsx
//App.jsx
import React, { useState } from "react"
import Modal from "./Modal"

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <div className="container">
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Welcome to the Modal</h2>
                <p>This modal is fully accessible with keyboard and screen readers.</p>
                <button onClick={() => alert("Action inside Modal")}>Take Action</button>
            </Modal>
        </>
    )
}

export default App
```

```jsx
//Modal.jsx

import React, { useEffect, useRef } from "react"
import './styles.css'

const Modal = ({ children, isOpen, onClose }) => {

    const dialogRef = useRef(null);
    const previousFocusRef = useRef(null);

    useEffect(() => {
        if(isOpen) {
            dialogRef.current?.focus();

            //element to shift focus for AA
            previousFocusRef.current = document.activeElement;

            const handleKeyDown = (e) => {
                // escape key AA
                if(e.key === "Escape") onClose();
                
                // trap focus inside a modal
                const focusElements = dialogRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const first = focusElements[0];
                const last = focusElements[focusElements.length - 1];
                
                // tab focus
                if(e.key === "Tab") {
                    if(e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }

            document.addEventListener("keydown", handleKeyDown);

            return () => {
                document.removeEventListener("keydown", handleKeyDown);
                previousFocusRef.current?.focus();
            }
        }
    }, [isOpen, onClose]);

    //send no value on what ever condition
    if(!isOpen) return null;

    // close modal when clicked on overlay
    const handleOverlayClick = (e) => {
        if(e.target === e.currentTarget) onClose();
    };
    
    return (
        <>
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal"
                    role="dialog"
                    ref={dialogRef}
                    aria-modal="true"
                        tabIndex={-1}>
                <button className="close-btn" onClick={onClose}
                                aria-label="Close dialog"> X </button>
                {children}
            </div>
        </div>
        </>
    )
}

export default Modal

```

```css
// modal css

.container {
    padding: 2rem;
}

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0 , 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.7rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}
```

1. Create page with button to open modal
2. Create Modal UI with take action and close button
3. create useState -> isOpen for modal status
4. use useEffect to create dialogRef and use it to open modal
5. have overlayclick function to close modal
6. add aria- attributes and tab index for basic accessibility
7. within useEffect add more AA for
	1. escape button click
	2. trap focus within the modal
	3. tab focus within modal