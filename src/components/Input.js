import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import TextField from '@mui/material/TextField';
import { MdOutlinePostAdd } from "react-icons/md";
import IconButton from '@mui/material/IconButton';
import { FiEdit } from "react-icons/fi";




export default function InputBar() {
    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title !== '') {
            await addDoc(collection(db, 'todos'), {
                title,
                completed: false,
            })
            setTitle('')
        }
    }


    return (
        <form className="form_input" onSubmit={handleSubmit}>
            <div className="input_container">
                <TextField
                    className="input_bar"
                    id="outlined-basic" 
                    label="Add new Task" 
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <IconButton className="submit_btn">
                    <MdOutlinePostAdd/>
                </IconButton>
            </div>
            <span className="note">Click on the task to edit then press <FiEdit/> to confirmed </span>

        </form>
    )
}
