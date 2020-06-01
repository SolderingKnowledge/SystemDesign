import React, {useState}  from 'react';

function Todo({todo, index, complete, delette, edit, change}) {
    const [ value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        change(value, index);
        setValue("");
    }
    return (
        <h1 style={{textDecoration: todo.isCompleted?
            "line-through": ""
        }}>
            {todo.edit? 
                <form onSubmit={handleSubmit}>
                    <input placeholder={todo.text} value={todo.text}
                    onChange={(e)=> {
                        setValue(e.target.value);
                    }} 
                    /> 
                </form> : todo.text
            }
            <button onClick={()=> complete(index)}>
                {todo.isCompleted? "completed": "complete"}
            </button>
            <button onClick={()=> edit(index)}>
                edit
            </button>
            <button onClick={()=> delette(index)}>
                x
            </button>
        </h1>
    );
}

export default Todo;