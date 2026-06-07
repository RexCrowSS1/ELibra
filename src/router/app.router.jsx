import {createBrowserRouter} from "react-router-dom";
import DashPage from "../pages/dashboard/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashPage/>
    }
]);

export default router;