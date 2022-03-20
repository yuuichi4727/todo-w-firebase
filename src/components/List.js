import { useState } from 'react'
import { FiCheck, FiTrash2, FiEdit } from "react-icons/fi";
import IconButton from '@mui/material/IconButton';



export default function List({ todo, toggleComplete, handleRemove, handleEdit }) {
    const [newTitle, setNewTitle] = useState('')

    const handleChange = (e) => {
        if (todo.completed === true) {
            setNewTitle(todo.title)
        } else {
            todo.title = ""
            setNewTitle(e.target.value)
        }
    }

    return (
        <div className="list_container">
            <div className="info">
                <input
                    className={todo.completed === false ? "todo-item-title" : "todo-item-title-completed"}
                    value={todo.title === "" ? newTitle : todo.title}
                    onChange={handleChange}
                />
                <span className="todo-item-status">{todo.completed === false ? 'In Progress' : 'Completed'}</span>
            </div>
            <div className="btn_group">
                <IconButton className="btn-status" onClick={() => toggleComplete(todo)}>
                    <FiCheck />
                </IconButton>
                <IconButton className="btn-edit" onClick={() => handleEdit(todo, newTitle)}>
                    <FiEdit />
                </IconButton>
                <IconButton className="btn-remove" onClick={() => handleRemove(todo.id)}>
                    <FiTrash2 />
                </IconButton>
            </div>

        </div>
    )
}
