import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import ApiWrapper from '../../functions/apiWrapper'

const apiWrapper = new ApiWrapper()

const DeleteUser = () => {
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchUser = async () => {
        try {
            const response = await apiWrapper.detail('/users/', id);
            setUserData(response.data)
        } catch (error) {
            setError('Ocorreu um erro ao pesquisar o usuário')
        }
    };

    useEffect(() => {
        fetchUser()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await apiWrapper.delete('/users/', id);
        navigate('/usuarios/') 
    };

    return (
        <>
            {error && (<p>{error}</p>)}

            {!error && (
                <div>
                    <h1>Você realmente quer deletar o usuário: {userData.name}?</h1>
                    <form onSubmit={handleSubmit}>
                        <button type='submit' className='btn btn-danger'>Deletar</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default DeleteUser;