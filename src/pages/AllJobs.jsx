import { useEffect, useState } from "react";
import axios from "axios";
import SingleJobCard from "../components/SingleJobCard";

const AllJobs = () => {
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('')


    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-jobs?page=${currentPage}&size=${itemPerPage}${search.length > 0 ? '&search=' + search : ''
            }`)
        setJobs(data)
    }
    useEffect(() => {
        getData();
    }, [currentPage, itemPerPage])


    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs-count`)
            setCount(data.count)
        }
        getCount()
    }, [])
    // console.log(jobs)

    const numberOfPages = Math.ceil(count / itemPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

    const handlePaginationBtn = (value) => {
        console.log(value)
        setCurrentPage(value)
    }
    return (
        <>
            <div className="overflow-x-auto">
                <div className="w-full mx-auto justify-center items-center text-center mb-2 md:mb-6">
                    <span className="text-[14px] md:text-xl font-bold btn btn-secondary"
                        onClick={() => getData()}
                    >Search </span>


                    <input type="search" onChange={(e) => setSearch(e.target.value)} className="p-3 border-2 rounded-md w-1/2 md:w-1/3" placeholder="Search your jobs" />
                </div>
                <div>
                    <div className="flex flex-wrap justify-center gap-5">
                        {
                            jobs.map(job => (
                                <SingleJobCard key={job._id} job={job}></SingleJobCard>
                            ))
                        }
                    </div>
                </div>
                {/* pagination section */}
                <div className="flex justify-center space-x-1 mt-2 md:mt-5 dark:text-gray-800 gap-5 ">
                    {/* previous button */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => { handlePaginationBtn(currentPage - 1) }}
                        title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100 disabled:text-white">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    {/* number button */}
                    {
                        pages.map(btn => (
                            <button
                                key={btn}
                                onClick={() => handlePaginationBtn(btn)}
                                type="button"
                                title={`Page ${btn}`}
                                className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600 ${currentPage === btn ? 'bg-yellow-600 text-white' : ''}`}
                            >
                                {btn}
                            </button>
                        ))
                    }
                    {/* next button */}
                    <button
                        disabled={currentPage === numberOfPages}
                        onClick={() => { handlePaginationBtn(currentPage + 1) }}
                        title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100 disabled:text-white">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AllJobs;