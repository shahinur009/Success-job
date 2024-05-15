import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const FramerMotion = () => {
    return (
        <>
            <section>
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "0%", "0%"],
                    }}

                    className="dark:bg-violet-600">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="text-xl md:text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">Explore <span className="text-red-700">YourSelf</span> </h1>

                        <div className="flex flex-wrap justify-center">
                            <Link to='/login' type="button" className="mt-3 px-8 py-3 m-2 text-[12px] md:text-lg font-semibold rounded dark:bg-gray-100 md:btn-primary md:btn btn-sm dark:text-gray-900">Get Started</Link>

                        </div>
                    </div>
                </motion.div>
                <img src="https://i.ibb.co/sKTH3Pd/Motion.webp" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
            </section>
        </>
    );
};

export default FramerMotion;