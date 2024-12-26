import { useEffect, useState } from "react";
import ApiWrapper from "../../functions/apiWrapper";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"  

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

            {/* Se estiver carregando */}
            {isLoading && (<p>Carregando tarefas</p>)}

            {/* Se tiver erro */}
            {!isLoading && error && (<p>Erro no cliente</p>)}

            {!isLoading && !error && todos.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Tarefa</TableHead>
                            <TableHead>Tarefa</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            ) : (<p>Tarefas não encontradas</p>)}
        </>
    )
}

export default ListTodos