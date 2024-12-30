import { useState } from "react";
import UserWrapper from "../../functions/userWrapper";
import { useNavigate } from "react-router";
const CreateUser = () => {
    const [userData, setUserData] = useState({ name: "" })
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const apiWrapper = new UserWrapper()
    let navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiWrapper.createUser("users/", userData);
            setSuccess("Usuário cadastrado com sucesso");
            setUserData({ nome: "" });
            navigate('/usuarios/')
        } catch (error) {
            setError("Não foi possível cadastrar o usuário")
        }
    }

    return (
        <>
            <h1 className="h1">Cadastrar usuário</h1>
            {error && (<p>Ocorreu um erro</p>)}

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" placeholder="Insira o nome" value={userData.name} onChange={handleChange} required autoFocus/>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default CreateUser;