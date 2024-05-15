import { RiFindReplaceLine } from "react-icons/ri";
import { FaSearchDollar } from "react-icons/fa";
import { TbBrandSuperhuman } from "react-icons/tb";
// motion
import { motion } from 'framer-motion'
// import { fadeIn } from '../components/Framer'


const WeDo = () => {
    return (
        <>
            <motion.h1
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                className="text-xl md:text-4xl text-center py-5 font-bold">How <span className="text-red-700">Success Jobs</span> Works for You?</motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-3">

                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">

                    <div className="w-full p-5 h-80 bg-base-300 bg-center bg-cover rounded-lg shadow-md">
                        <RiFindReplaceLine className="text-5xl" />
                        <h1 className="text-secondary">
                            Begin by conducting a thorough self-assessment to understand your skills, strengths, weaknesses, interests, values, and career aspirations. Reflect on your past experiences, achievements, and areas of expertise to identify your unique selling points.</h1></div>
                    <div className="w-80 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Find the Right Job</h3>

                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200"></span>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">

                    <div className="w-full p-5 h-80 bg-base-300 bg-center bg-cover rounded-lg shadow-md">
                        <FaSearchDollar className="text-5xl" />

                        <h1 className="text-secondary">
                            Research industries, companies, and job roles that interest you. Explore job market trends, demand for specific skills, and salary ranges in your desired field. Use online job boards, company websites, professional networking platforms, and informational interviews to gather insights into potential job opportunities.</h1></div>
                    <div className="w-80 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Research Companies
                        </h3>

                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200"></span>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">

                    <div className="w-full p-5 h-80 bg-base-300 bg-center bg-cover rounded-lg shadow-md">
                        <TbBrandSuperhuman className="text-5xl" />

                        <h1 className="text-secondary">
                            Prepare thoroughly for job interviews by researching the company, practicing common interview questions, and showcasing your skills and accomplishments. Be ready to articulate how your experiences and qualifications make you the ideal candidate for the position.</h1></div>
                    <div className="w-80 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Prepare for Interviews</h3>

                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200"></span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeDo;