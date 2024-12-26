import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"  
import ApiWrapper from '../../functions/apiWrapper';

const apiWrapper = new ApiWrapper();

const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            setIsLoading(true)
            const usersData = await apiWrapper.listAll('/users/');
            setUsers(usersData)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <h1>Usuários</h1>

            {/* Se estiver carregando */}
            {isLoading && (<p>Carregando usuários</p>)}

            {/* Se der erro */}
            {error && (<p>Algo deu errado em nosso site. A culpa não foi sua!</p>)}

            {/* Quando terminar a requisição */}
            {!isLoading && !error && users.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Nome</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user)=>(
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (<p>Usuários não encontrados</p>)}
        </>
    )
}

export default ListUsers