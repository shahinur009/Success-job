import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "./useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;