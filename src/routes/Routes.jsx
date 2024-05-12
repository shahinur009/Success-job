import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyJobs from "../pages/MyJobs";





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
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <AddJob />
            },
            {
                path: '/my-jobs',
                element: <MyJobs />
            }


        ]
    },
]);

export default router