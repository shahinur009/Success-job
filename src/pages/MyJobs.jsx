import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyJobs = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        getData()

    }, [user])

    const getData = async () => {
        const { data } = await axiosSecure(`/jobs/${user?.email}`)
        setJobs(data)
    }

    const handleDelete = async (id) => {
        try {
            const { data } = await axiosSecure.delete(`/job/${id}`)
            console.log(data);
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error"
                    });
                }
            });
            getData()
        } catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    }
    return (
        <>
            <div

                className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2
                    className="mb-4 text-xl font-bold">jobs: <span className="text-green-500">{jobs.length}</span> </h2>
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
                                <th className="p-3">Job Title</th>
                                <th className="p-3">User Name</th>
                                <th className="p-3">Photo URL</th>
                                <th className="p-3">Job Category</th>
                                <th className="p-3">Salary Range</th>
                                <th className="p-3 text-right">Job Posting Date</th>
                                <th className="p-3">Job Deadline</th>
                                <th className="p-3">Applicants Number</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map(job => (
                                    <tr key={job._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                        <td className="p-3">
                                            <p>{job.job_title}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{job.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">{job.image}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">{job.category}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{job.salary_range}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{job.posting_date}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{job.deadline}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{job.applicants_number}</p>
                                        </td>
                                        <td className="flex text-right">
                                            <button onClick={() => handleDelete(job._id)} className="text-xl mr-2"><MdDelete /></button>

                                            <Link to={`/update/${job._id}`} className="text-xl"><FaEdit /></Link>
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

export default MyJobs;
