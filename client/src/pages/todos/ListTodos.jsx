import { useEffect, useState } from "react";
import TodoWrapper from "../../functions/todoWrapper"; 
import 'bootstrap/dist/css/bootstrap.min.css'
const todoWrapper = new TodoWrapper()

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTodos = async () => {
        try {
            setIsLoading(true);
            const response = await todoWrapper.listTodo('todos/');
            setTodos(response.data);
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

            {/* Se estiver carregando */}
            {isLoading && (<p>Carregando tarefas</p>)}

            {/* Se tiver erro */}
            {!isLoading && error && (<p>Erro no cliente</p>)}

            {!isLoading && !error && todos.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Tarefa</td>
                            <td>Usuário</td>
                            <td>Concluída</td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo)=>(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.user}</td>
                                <td>{todo.is_complete ? 'Sim' : 'Não'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<p>Tarefas não encontradas</p>)}
        </>
    )
}

export default ListTodos