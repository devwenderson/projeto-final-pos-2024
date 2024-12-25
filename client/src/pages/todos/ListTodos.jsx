import { useEffect, useState } from "react";
import ApiWrapper from "../../functions/apiWrapper";

const apiWrapper = new ApiWrapper()

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTodos = async () => {
        try {
            setIsLoading(true);
            const todosData = await apiWrapper.listAll('/todos/');
            setTodos(todosData);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchTodos()
    }, [])

    return (
        <>
            <h1>Lista de tarefas</h1>

            {!isLoading && !error && todos.length > 0 && (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.title} ({todo.user}) - {todo.is_complete} </li>
                    ))}
                </ul>
            )
            
            }
        </>
    )
}

export default ListTodos