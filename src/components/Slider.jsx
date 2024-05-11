/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slider = ({ image, text }) => {
    return (
        <>
            <section className="dark:bg-gray-100 dark:text-gray-800 shadow-md border-y-2">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center w-full lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image}
                            alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="md:text-4xl font-bold leading-none sm:text-xl">
                            {text}
                        </h1>
                        <p>Software engineers design and develop software systems, digital marketers promote products online, and data analysts analyze large datasets to derive insights for informed decision-making.
                        </p>
                        <div className="flex flex-col mt-5 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/login' rel="noopener noreferrer" href="#" className="px-8 btn py-3 text-lg font-semibold border rounded dark:border-gray-800">Join Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;