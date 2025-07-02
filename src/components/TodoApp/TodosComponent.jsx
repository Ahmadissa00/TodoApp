import  { useEffect, useState } from 'react';
import { retrieveAllTodosforUser ,deleteTodoById,retrieveTodoById, updateTodoById} from './api/Todosapi';
import {  useAuth } from './security/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function TodosComponent() {
    const [todos, setTodos] = useState([]);
    const [mesage, setMesage] = useState('');
    const authContext = useAuth();
    const uesername = authContext.username;
    useEffect(() => refreshTodos(), []);

    const navigate = useNavigate();

    function refreshTodos() {
        retrieveAllTodosforUser(uesername)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error));
    }

    function deleteTodo(id) {
        deleteTodoById(uesername, id)
            .then( () =>{
                setMesage(`Delete of todo ${id} successful`)
                refreshTodos()
            } 

            )
            .catch(error => {
                console.log("Error deleting todo:", error)});

}

    function updateTodo(id) {
        
        retrieveTodoById(uesername, id)
            .then(() => navigate(`/todos/${id}`))
            .catch(error => console.log("Error updating todo:", error));
        

    }

   
    function updateCompletness(todo) {
        updateTodoById(uesername, todo.id, {
            ...todo,
            done: !todo.done
        })
            .then(() => {
                setMesage(`Update of todo ${todo.id} successful`)
                refreshTodos();
            })
            .catch(error => console.log("Error updating todo:", error));
        
        
    }


    return (
        <div className='container'>
            <h1>Todos</h1>
            <p>Here you can manage your todos.</p>
            {mesage &&
            <div className='alert alert-success'>
                {mesage}
                </div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>                            
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.descrption}</td>
                                <td> 
                                        {!todo.done&&    <button className="btn btn-danger" onClick={() => updateCompletness(todo)}>
                                             {todo.done.toString()}</button>}
                                        
                                        {todo.done &&   <button className="btn btn-success" onClick={() => updateCompletness(todo)}>
                                             {todo.done.toString()}</button>}

                                </td>
                                <td>{todo.date ? new Date(todo.date).toLocaleDateString() : ''}</td>
                                <td>
                                    <button className='btn btn-danger'  onClick={() => deleteTodo(todo.id)} 
                                   >
                                        Delete
                                    </button></td>
                                <td>
                                    <button className='btn btn-success' onClick={() => updateTodo(todo.id)}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <button className='btn btn-success' onClick={() => navigate('/todos/-1')}>
                    Add Todo
                </button>
                </div>
        </div>
    );
}