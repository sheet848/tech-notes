import React, { useRef } from 'react'
import useClickOutside from '../hooks/useClickOutside';

const Modal = ({ isOpen, closeModal }) => {

    const modalRef = useRef();
    useClickOutside(modalRef, closeModal);

    if(!isOpen) {
        return null;
    }

  return (
    <>
        <div className="modal-overlay">
            <div className="modal-container" ref={modalRef} >
                <h1>MODAL</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          recusandae eveniet sapiente tenetur minus rerum quasi voluptatem,
          porro, cumque aliquam illo expedita, dolore tempora facilis. In
          perferendis esse impedit cumque.
                </p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    </>
  )

    { /*
        1. Create the modal: header, body and close button
        2. create props for modal state -> isOpen and closeModal
          -> add prop values to Modal in App.jsx
        3. create ref component, modalRef
        4. check status: isOpen via if statement
        5. Add onClick event to button to closeModal
        6. add custom hook function useClickOutside

      */ }

}

export default Modal
