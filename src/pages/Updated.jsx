import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";



const Updated = () => {
    const job = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { id } = useParams();

    const { job_title, posting_date, deadline, category, salary_range, job_description, image, applicants_number, } = job || {};

    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target;
        const job_title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const posting_date = form.date.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const salary_range = form.salary.value;
        const image = form.image.value;
        const applicants_number = form.number.value;
        const job_description = form.description.value;

        const jobData = {

            job_title,
            name,
            email,
            posting_date,
            deadline,
            category,
            salary_range,
            image,
            applicants_number,
            job_description,
            buyer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            },
        }
        try {
            const { data } = await axiosSecure.put(`/job/${id}`, jobData)
            console.log(data)
            toast.success('Information updated successfully')
            navigate('/my-jobs')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }


    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="px-4 mx-auto max-w-2xl">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new job</h2>
                    <form onSubmit={handleUpdate} >
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label name="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                                <input type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type job title" required="" defaultValue={job_title} />
                            </div>
                            <div className="w-full">
                                <label name="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                <input type="text" name="name" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" disabled defaultValue={user?.displayName} />
                            </div>
                            <div className="w-full">
                                <label name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" disabled defaultValue={user?.email} />
                            </div>
                            <div className="w-full">
                                <label name="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Posting Date</label>
                                <input type="text" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={posting_date} />
                            </div>
                            <div className="w-full">
                                <label name="deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Application Deadline  </label>
                                <DatePicker name="deadline" className="rounded-lg border block w-full p-3" selected={startDate} onChange={(date) => setStartDate(date)} defaultValue={deadline} />

                            </div>
                            <div>
                                <label name="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Category</label>
                                <select id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={category}>
                                    <option selected="" value="On-Site Job">On-Site Job</option>
                                    <option value="Remote Job">Remote Job</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Part-time">Part-time</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label name="salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary range</label>
                                <input type="salary" name="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type salary range" defaultValue={salary_range} />
                            </div>
                            <div className="w-full">
                                <label name="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Picture URL </label>
                                <input type="text" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Picture URL" defaultValue={image} />
                            </div>
                            <div className="w-full">
                                <label name="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Applicant Number </label>
                                <input type="number" name="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type here applica" defaultValue={applicants_number} />
                            </div>
                            <div className="sm:col-span-2">
                                <label name="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                                <textarea id="description" name="description" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="write job description here">{job_description}</textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 btn btn-success">
                            Update job
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Updated;