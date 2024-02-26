import Home from "../pages/Home";
import Itens from "../pages/Itens";
import CreateItens from "../pages/create-Itens";
import DetailIten from "../pages/detail-Iten";
import UpdateIten from "../pages/update-Iten";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "itens",
            element: <Itens />, children: [
                {
                    path: "create",
                    element: <CreateItens />
                },
                {
                    path: 'detalhes/:id',
                    element: <DetailIten />
                },
                {
                    path: 'editar/:id',
                    element: <UpdateIten />
                }
            ]
        }
    ]
)
export default router;