import img from '../assets/image/demo picture/token picture.png'
import express from '../assets/image/demo picture/express.png'
import nest from '../assets/image/demo picture/nest js.png'
const Blogs = () => {
    return (
        <>
            <section className="dark:bg-gray-100 dark:text-gray-800 ">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 md:text-4xl font-bold leading-none text-center text-2xl"> <span className="text-amber-800">Blog:</span> Questions and Answers </h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">What is an access token and refresh token? How do they work and where should
                                we store them on the client side?</h3>
                            <ul className="mt-1 dark:text-gray-600">
                                <li> <span className="text-red-500 font-bold">Ans-1(A)</span> A refresh token is a special kind of token that is used to generate a new access token. It is like a spare key that lets users obtain a new key (access token) once the old one expires, without the users needing to re-authenticate. These tokens are crucial for long-term authentication and provide a seamless user experience, particularly in mobile and web applications where users expect to remain logged in across sessions.

                                    A refresh token typically looks like a random string, similar in appearance to an access token, but it is used exclusively for obtaining new access tokens. Here is an example of what a refresh token might look like:</li>
                                <br />
                                <li>
                                    <span className="font-bold text-red-600">Ans-1(B)</span>
                                    Web storage and cookies are two ways to store the data in the client browser. They are explained below: Web Storage: With the help of web storage, web applications can store data locally within the user browser. During every server request data is stored in the form of cookies.

                                </li>

                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold"> What is express js? What is Nest JS</h3>
                            <ul className="mt-1 dark:text-gray-600">
                                <li> <span className='font-bold text-red-600'>Express Js</span> Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js</li>
                                <br />
                                <li>
                                    <span className='font-bold text-red-600'>Nest Js</span>
                                Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Token related codes:</h3>
                            <img className="mt-1 dark:text-gray-600" src={img}></img>
                        </div>
                        <div>
                            <h3 className="font-semibold">Express js and Next js code:</h3>
                            <span>Express js</span>
                            <img src={express} className="mt-1 dark:text-gray-600"></img>
                            <br /> <span>Nest Js</span>
                            <img src={nest} className="mt-1 dark:text-gray-600"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;