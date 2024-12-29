import ListUsers from '../pages/users/ListUsers.jsx';
import CreateUser from '../pages/users/CreateUser.jsx';
import UpdateUser from '../pages/users/UpdateUser.jsx';
import DeleteUser from '../pages/users/DeleteUser.jsx';

const userRoutes = [
    {
        path: 'usuarios/',
        element: <ListUsers />,
    },
    {
        path: 'usuarios/cadastrar/',
        element: <CreateUser />
    },
    {
        path: 'usuarios/editar/:id/',
        element: <UpdateUser />
    },
    {
        path: 'usuarios/deletar/:id/',
        element: <DeleteUser />
    },
]

export default userRoutes;