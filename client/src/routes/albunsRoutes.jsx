import ListAlbuns from "../pages/albuns/ListAlbuns";
import CreateAlbum from "../pages/albuns/CreateAlbum";
import UpdateAlbum from "../pages/albuns/UpdateAlbum";
import DeleteAlbum from "../pages/albuns/DeleteAlbum";

const albunsRoutes = [
    {
        path: 'albuns/',
        element: <ListAlbuns />
    },
    {
        path: 'albuns/cadastrar/',
        element: <CreateAlbum />
    },
    {
        path: 'albuns/atualizar/:id/',
        element: <UpdateAlbum />
    },
    {
        path: 'albuns/deletar/:id/',
        element: <DeleteAlbum />
    }
]

export default albunsRoutes;