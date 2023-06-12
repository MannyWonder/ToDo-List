import { useState } from 'react';
import AddToDoButton from './AddToDo';
import './main.css';

function Welcome() {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    function addTodo() {
        if (item) {
            setList(prevList => [...prevList, item])
        }
        setItem('');
    }

    function handleChange(e) {
        setItem(e.target.value)
    }

    const todos = list.map((list, key) => {
        return <li key={key}>{list}</li>
    })
    return (
        <>
            <div className='box'>
                <h1>Home</h1>
                <AddToDoButton handleChange={handleChange} addTodo={addTodo} item={item}/>
                <div className="wrapper">
                    <h1>Welcome To My App</h1>
                    <p>This is going to be the coolest app in the world!</p>
                    <ul>
                        {todos}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Welcome