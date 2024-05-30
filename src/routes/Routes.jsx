import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyJobs from "../pages/MyJobs";
import Updated from "../pages/Updated";
import PrivateRoutes from "./PrivateRoutes";
import AppliedJobs from "../pages/AppliedJobs";
import Blogs from "../pages/Blogs";
import AllJobs from "../pages/AllJobs";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
// import AllJobs from "../pages/AllJobs";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/all-jobs',
                element: <AllJobs />,
            },
            {
                path: '/job/:id',
                element: <PrivateRoutes>
                    <JobDetails />
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes>
                    <Updated />
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <PrivateRoutes>
                    <AddJob />
                </PrivateRoutes>
            },
            {
                path: '/my-jobs',
                element: <PrivateRoutes>
                    <MyJobs />
                </PrivateRoutes>
            },
            {
                path: '/applied-jobs',
                element: <PrivateRoutes>
                    <AppliedJobs />
                </PrivateRoutes>
            }


        ]
    },
    // admin route
    {
        path: 'dashboard',
        element: <Dashboard />
    }
]);

export default router