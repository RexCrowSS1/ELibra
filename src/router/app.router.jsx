import {createBrowserRouter} from "react-router-dom";
import DashPage from "../pages/readinghub/page";
import BookshelfPage from "../pages/bookshelf/page";
import MoodPage from "../pages/moodfinder/page";
import ClubsPage from "../pages/clubs/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashPage/>
    },
    {
        path: "/bookshelf",
        element: <BookshelfPage/>
    },
    {
        path: "/moodfinder",
        element: <MoodPage/>
    },
    {
        path: "/clubs",
        element: <ClubsPage/>
    }
]);

export default router;