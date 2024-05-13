import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    useQuery({
        
    })

    const [applied, setApplied] = useState([]);

    useEffect(() => {
        getData()

    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/applied-jobs/${user?.email}`)
        setApplied(data)
    }
    console.log(applied)


    return (
        <>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-xl font-bold">Applied jobs: <span className="text-green-500">{applied.length}</span> </h2>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="" value="On-Site Job">On-Site Job</option> 
                    <option value="Remote Job">Remote Job</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Part-time">Part-time</option>
                </select>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Buyer Email</th>
                                <th className="p-3">User Name</th>
                                <th className="p-3">Resume</th>
                                <th className="p-3">Job Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applied.map(apply => (
                                    <tr key={apply._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                        <td className="p-3">
                                            <p>{apply.buyer?.email}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{apply.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">{apply.resume}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">{apply.category}</p>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;