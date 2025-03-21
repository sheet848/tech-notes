import { useState } from 'react'
import Modal from './components/Modal'
import './App.css'

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="App">
        <button className="modal-button" onClick={() => setShowModal(true)}>
          Show Modal
        </button>
        <Modal isOpen={showModal} closeModal={() => setShowModal(false)}/>
      </div>
    </>
  )

  { /* 1. Create the Show Modal button
       2. Link the modal component
       3. Create the showModal useState; value is false
       4. add onClick event to run setShowModal function; value changed to true

       --> go to create Modal component

       5. add props to Modal
        --> isOpen: value of showModal
        --> close Modal should trigger function setShowModal: false

  */}
}

export default App
