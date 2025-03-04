import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddCampaigns from "../pages/AddCampaigns/AddCampaigns";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/addCampaigns",
                element: <AddCampaigns></AddCampaigns>
            }
        ]
    },
    {
        path: "*",
        element: <h2>Error Occurred!</h2>
    }
])

export default router;