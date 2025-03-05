import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddCampaigns from "../pages/AddCampaigns/AddCampaigns";
import CampaignDetails from "../pages/CampaignDetails/CampaignDetails";
import AllCampaigns from "../pages/AllCampaigns/AllCampaigns";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCampaigns from "../pages/MyCampaigns/MyCampaigns";
import MyDonations from "../pages/MyDonations/MyDonations";
import PrivateRoute from "./PrivateRoute";
import UpdateCampaign from "../pages/UpdateCampaign/UpdateCampaign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/campaign/:id",
                element: <PrivateRoute>
                    <CampaignDetails></CampaignDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: "/allCampaigns",
                element: <AllCampaigns></AllCampaigns>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/addCampaigns",
                element: <PrivateRoute>
                    <AddCampaigns></AddCampaigns>
                </PrivateRoute>
            },
            {
                path: "/myCampaigns",
                element: <PrivateRoute>
                    <MyCampaigns></MyCampaigns>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/myDonations",
                element: <PrivateRoute>
                    <MyDonations></MyDonations>
                </PrivateRoute>
            },
            {
                path: "/updateCampaign/:id",
                element: <PrivateRoute>
                    <UpdateCampaign></UpdateCampaign>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <h2>Error Occurred!</h2>
    }
])

export default router;