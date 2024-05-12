
const Blogs = () => {
    return (
        <>
            <section className="dark:bg-gray-100 dark:text-gray-800 ">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl"> <span className="text-amber-800">Blog:</span> Questions and Answers </h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">What is an access token and refresh token? How do they work and where should
                                we store them on the client side?</h3>
                            <p className="mt-1 dark:text-gray-600">ans here</p>
                        </div>
                        <div>
                            <h3 className="font-semibold"> What is express js? What is Nest JS</h3>
                            <p className="mt-1 dark:text-gray-600">ans here</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Token related codes:</h3>
                            <p className="mt-1 dark:text-gray-600">code here</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Express js and Next js code:</h3>
                            <p className="mt-1 dark:text-gray-600">code here</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;