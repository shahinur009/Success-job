import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();

    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-1/4 h-[530px] py-12 px-10 bg-blue-600 text-white font-semibold">
                <div>
                    <ul>
                        {
                            isAdmin ? <>
                                <li className="flex">
                                    <NavLink to='/dashboard'>
                                        Admin Home
                                    </NavLink>
                                </li>
                            </>
                                :
                                <li>
                                    <NavLink to='/dashboard'>
                                        User Home
                                    </NavLink>
                                </li>

                        }
                    </ul>
                </div>
                {/* shared link */}
                <div className="divider"></div>
                <div>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/all-jobs'>All Jobs</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;