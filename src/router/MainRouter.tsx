import { createBrowserRouter } from "react-router-dom";
import MainPage from "../component/MainPage";
import Detail from "../component/Detail";
import MenuPage from "../component/MenuPage";

const mainRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainPage/>,
    },
    {
        path:"/detail",
        element: <Detail/>
    },
    {
        path:"/menu",
        element: <MenuPage/>
    },
])
export default mainRouter;