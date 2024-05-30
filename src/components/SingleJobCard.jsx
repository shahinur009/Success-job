/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SingleJobCard = ({ job }) => {
    const { user } = useAuth()
    console.log(user)

    const { category, _id, job_title,
        posting_date, salary_range, deadline, applicants_number,
    } = job || {};

    // console.log(job)
    return (
        <>
            <div title="Want to see detail first login" className="container md:mx-auto px-2 md:px-6 py-2 md:py-6 w-full md:w-96  border-2 rounded-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-[13px] md:text-xl font-bold text-gray-950">{job_title}</h1>
                    <span className="bg-yellow-200 text-[10px] md:text-[12px] text-yellow-800 rounded-md">{category}</span>
                </div>
                <p className="text-blue-800 font-semibold">posted by: {user?.displayName}</p>
                <div className="flex justify-between items-center mt-2 md:mt-5">

                    <p className="text-[12px] md:text-[14px]"> <span className="font-bold">Posting Date:</span> {posting_date}</p>
                    <p className="text-[12px] md:text-[16px]"> <span className="font-bold">Deadline:</span> {deadline}</p>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <p className="text-[12px] md:text-[16px]"> <span className="font-bold">Salary:</span> {salary_range}</p>
                    <p className="text-[12px] md:text-[16px]"> <span className="font-bold">Applicants number: </span>{applicants_number}</p>
                </div>
                <div className="flex justify-center pt-5">
                    <Link to={`/job/${_id}`} className="btn btn-sm md:btn-secondary w-1/2">View Details</Link>
                    {/* 
                    
                    */}
                </div>
            </div>
        </>
    );
};

export default SingleJobCard;