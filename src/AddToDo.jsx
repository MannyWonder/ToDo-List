const AddToDoButton = (props) => {
    const {
        handleChange,
        item,
        addTodo
    } = props;

    return (
        <div>
            <form className='input'> 
                <input className='inputfield'
                    placeholder="Enter Task" 
                    onChange={e => handleChange(e)}
                    value = {item}
                />
                <button className='add' onClick={addTodo} type="button">Add Task</button>
            </form>
            
        </div>
    );
}



export default AddToDoButton;