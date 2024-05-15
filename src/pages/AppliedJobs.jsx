import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { FaCloudDownloadAlt } from "react-icons/fa";



const AppliedJobs = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient();

    const { data: applied = [], isLoading, isError, error } = useQuery({
        queryFn: ({ queryKey }) => {
            return getData(queryKey[2])
        },
        queryKey: ['applied-jobs', user?.email],
    })
    const getData = async (filter) => {
        const { data } = await axiosSecure(`/applied-jobs/${user?.email}?filter=${filter}`)
        return data
    }
    const mutation = useMutation({
        mutationFn: getData,
        onSuccess: (data) => {
            queryClient.setQueryData(['applied-jobs', user?.email], data);
        }
    });

    const handleDownload = (resume) => {
        // Assuming resume is a URL to the PDF file
        window.open(resume, '_blank');
    };

    if (isLoading) return <p>please wait data loading....</p>
    if (isError || error) {
        console.log(isError, error)
    }
    return (
        <>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-[12px] md:text-xl font-bold">Applied jobs: <span className="text-green-500">{applied.length}</span> </h2>

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
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

                                    onChange={(e) => {
                                        mutation.mutate(e.target.value)
                                    }}
                                >
                                    <option >Select here</option>
                                    <option value="On-Site Job">On-Site Job</option>
                                    <option value="Remote Job">Remote Job</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Part-time">Part-time</option>
                                </select>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applied?.map(apply => (
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
                                        <td className="p-3">
                                            <button className="focus:outline-none" onClick={() => handleDownload(apply.resume)}><FaCloudDownloadAlt className="text-xl text-blue-600" /></button>
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