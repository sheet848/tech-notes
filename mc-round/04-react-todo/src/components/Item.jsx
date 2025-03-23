import React from 'react'

const Item = ({ key, todo, handleComplete, handleDelete }) => {

    //const [isEditing, setIsEditing] = useState(false);

    //const handleEdit = (e) => {
    //    setIsEditing(true);
    //};

  return (
    <>
    <div className="todo-item" key={key}>
        <span className={` todo-text ${todo?.isCompleted ? "completed" : ""}`}>
            {todo?.value}
        </span>
        <div className="todo-actions">
            <button className="action-button complete"
            title='Mark as Complete'
            onClick={() => handleComplete(todo?.id)}>
                ✓
            </button>
            <button className="action-button delete"
                title='Delete task'
                onClick={handleDelete(todo?.id)}>
                ×📝
            </button>

            {/* {isEditing && <span>✏️</span>}

            <button className="action-button edit"
                title='editing new'
                onClick={handleEdit()}>
            </button>
            */}
        </div>
    </div>
    </>
  )
}

export default Item