import React, {useState} from 'react';
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/TodoForm";

function App() {
    const [ todos, setTodos ] = useState([
        {
            text: "React tutorial",
            isCompleted: false,
            edit: false
        },
        {
            text: "Meet my friend",
            isCompleted: false,
            edit:false
        }
    ]);

    const add = (text)=> {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    }

    const complete = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }
    const delette = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const edit = (index) => {
        const newTodos = [...todos];
        newTodos[index].edit = true;
        setTodos(newTodos)
    }
    const change = (value, index) => {
        const newTodos = [...todos];
        newTodos[index].text = value;
        setTodos(newTodos);
    }

    return (
        <div className="App">
            {
                todos.map((todo, idx) => {
                    return (
                        <Todo key={idx} index={idx}
                            todo={todo} complete={complete}
                            delette={delette} edit={edit}
                            change={change}
                        /> 
                    )
                })
            }
            <Form add={add} />
        </div>
    );
}

export default App;
