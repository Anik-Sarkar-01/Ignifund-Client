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
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://ignifund-server.vercel.app/runningCampaigns')
            },
            {
                path: "/campaign/:id",
                element: <PrivateRoute>
                    <CampaignDetails></CampaignDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://ignifund-server.vercel.app/campaign/${params.id}`)
            },
            {
                path: "/allCampaigns",
                element: <AllCampaigns></AllCampaigns>,
                loader: () => fetch('https://ignifund-server.vercel.app/allCampaigns')
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
                loader: ({ params }) => fetch(`https://ignifund-server.vercel.app/campaign/${params.id}`)
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
        element: <NotFoundPage></NotFoundPage>
    }
])

export default router;