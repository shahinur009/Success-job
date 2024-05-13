// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// const AllJobs = () => {
//     const [jobs, setJobs] = useState([])
//     const { _id } = useParams()

//     useEffect(() => {
//         const getData = async () => {
//             const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
//             setJobs(data)
//         }
//         getData();
//     }, [])
//     console.log(jobs)
//     return (
//         <div>
//             {
//                 jobs.map(job => (
//                     <div key={job._id} title="Want to see detail first login" className="container md:mx-auto px-6 py-6 w-full md:w-[420px]  border-2 rounded-md">
//                         <div className="flex justify-between items-center">
//                             <h1 className="text-xl font-bold text-gray-950">{job.job_title}</h1>
//                             <span className="bg-yellow-200 text-yellow-800 rounded-md">{job.category}</span>
//                         </div>
//                         <p className="text-blue-800 font-semibold">posted by: {name}</p>
//                         <div className="flex justify-between items-center mt-5">

//                             <p>Posting date:{job.posting_date}</p>
//                             <p>Deadline:{job.deadline}</p>
//                         </div>
//                         <div className="flex justify-between items-center mt-5">
//                             <p>Salary: {job.salary_range}</p>
//                             <p>Applicants number: {
//                                 job.applicants_number}</p>
//                         </div>
//                         <div className="flex justify-center pt-5">
//                             <Link to={`/job/${_id}`} className="btn btn-secondary w-1/2">View Details</Link>
//                             {/* 
                    
//                     */}
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

// export default AllJobs;