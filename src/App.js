
import './App.css';
import { useState, useEffect } from 'react'
import Input from './components/Input'
import List from './components/List';
import { db } from './firebase'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import Footer from './components/Footer';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArray);
        });
        return () => unsub();
    }, []);

    const handleEdit = async (todo, title) => {
        await updateDoc(doc(db, "todos", todo.id), { title: title });
    };
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
    };
    const handleRemove = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };

    return (
        <div className="App">
            <div className="todo_container">
                <Input />
                {todos.map((todo, index) => (
                    <List
                        key={index}
                        todo={todo}
                        handleEdit={handleEdit}
                        toggleComplete={toggleComplete}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
                <Footer todos={todos.length} />
        </div>
    );
}

export default App;
