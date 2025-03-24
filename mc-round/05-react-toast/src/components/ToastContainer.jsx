import React, { useRef, useState } from 'react'

const ToastContainer = () => {

    const [toast, setToast] = useState([]);
    const timeRef = useRef({});

    // adding a toast
    const handleAdd = (message, type) => {
        const toastId = new Date().getTime();
        const newToast = [...toast, { toastId, message, type }];

        console.log("Toast", toast);
        setToast(newToast);
        timeRef.current[toastId] = setTimeout(() => handleClose(toastId), 5000);
    }

    // closing a toast
    const handleClose = (toastId) => {
        clearTimeout(timeRef.current[toastId]);
        delete timeRef.current[toastId];

        setToast((prevToast) => {
            const filterArray = prevToast.filter((item) => {
                return item.toastId !== toastId;
            });
            return filterArray;
        });
    }

  return (
    <>
    <div className="container">
        <div className="toast-container">
            {
                toast.map(({ toastId, message, type }) => (
                    <div key={toastId} className={`toast ${type}`}>
                        <div className="toast-content">{message}</div>
                        <button className="close-btn" onClick={() => handleClose(toastId)}> × </button>
                    </div>
                ))
            }
        </div>
        <div className="btn-container">
            <button onClick={() => handleAdd("SUCCESS", "success")}>SUCCESS</button>
            <button onClick={() => handleAdd("INFO", "info")}>INFO</button>
            <button onClick={() => handleAdd("WARNING", "warning")}>WARNING</button>
            <button onClick={() => handleAdd("ERROR", "error")}>ERROR</button>
        </div>
    </div>
    </>
  )
}

export default ToastContainer