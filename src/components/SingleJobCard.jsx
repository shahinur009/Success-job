/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleJobCard = ({ job }) => {

    const { category, _id, job_title,
        applicants_number, name, posting_date, salary_range, deadline
    } = job || {};
    // console.log(job)
    return (
        <>
            <div title="Want to see detail first login" className="container md:mx-auto px-6 py-6 w-full md:w-96  border-2 rounded-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-950">{job_title}</h1>
                    <span className="bg-yellow-200 text-yellow-800 rounded-md">{category}</span>
                </div>
                <p className="text-blue-800 font-semibold">posted by: {name}</p>
                <div className="flex justify-between items-center mt-5">

                    <p>Posting date:{posting_date}</p>
                    <p>Deadline:{deadline}</p>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <p>Salary: {salary_range}</p>
                    <p>Applicants number: {
                        applicants_number}</p>
                </div>
                <div className="flex justify-center pt-5">
                    <Link to={`/job/${_id}`} className="btn btn-secondary w-1/2">View Details</Link>
                    {/* 
                    
                    */}
                </div>
            </div>
        </>
    );
};

export default SingleJobCard;