import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";



const JobDetails = () => {
    const job = useLoaderData();
    const { user } = useContext(AuthContext)


    const { _id, job_title, category, buyer_name, job_description, image, salary_range, buyer_email } = job || {};

    const handleApplication = async e => {
        e.preventDefault();
        if (user?.email === buyer_email) return toast.error('You are not permitted try another way!!')
        const form = e.target;
        const jobId = _id
        const resume = form.resume.value;
        const name = user?.displayName;
        const email = user?.email;

        const applyData = {
            jobId, resume, category, name, buyer_email, email, buyer_name, image, job_description,
        }
        console.table(applyData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/apply`, applyData)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {/* Component: card */}
            <div className="container py-6 px-6 mx-auto ">
                <div className="overflow-hidden rounded w-2/3 mx-auto  text-white shadow-md shadow-slate-200 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    {/* Image */}
                    <figure>
                        <img
                            src={image}
                            alt="card image"
                            className="aspect-video w-full"
                        />
                    </figure>
                    {/* Body*/}
                    <div className="p-6 text-center">
                        <header className="mb-4">
                            <h3 className="text-xl mb-3 font-medium text-slate-700">
                                {job_title}
                            </h3>
                            <p className="text-white md:px-16">{job_description}</p>
                            <p className=" text-black mt-2">Salary: {salary_range} </p>
                            <p>Applicants number: </p>
                        </header>
                    </div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-warning w-full" onClick={() => document.getElementById('my_modal_4').showModal()}>Apply Now</button>
                    <dialog id="my_modal_4" className="modal">
                        <form onSubmit={handleApplication} className="modal-box">
                            <h3 className="font-bold text-lg text-black" defaultValue={user?.name}>Buyer Name: {user?.displayName}</h3>
                            <p className="py-4 font-bold text-black">Buyer Email: {user?.email}</p>
                            <div className="flex font-bold">
                                <label className='text-gray-700 px-4 py-2 mt-2' htmlFor='resume'>
                                    Resume link
                                </label>
                                <input
                                    id='price'
                                    type='text'
                                    name='resume'
                                    className='block w-full mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div className="modal-action w-1/2">
                                <div method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-success">Apply Now</button>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </>
    );
};

export default JobDetails;