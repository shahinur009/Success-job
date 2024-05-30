import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/image/logo.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic();
    let [showPassword, setShowPassword] = useState(false)
    const { signIn, signInWithGoogle, user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const from = location.state || '/';

    // google sign in
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle()
            // // console.log(result.user)
            // const { data } = await axiosPublic.post(`/jwt`,
            //     {
            //         email: result?.user?.email,
            //         name: result?.user?.displayName,
            //     },
            //     { withCredentials: true }
            // )
            const { data } = await axiosPublic.post(`/users`, {

                email: result?.user?.email,
                name: result?.user?.displayName,

            })
            console.log(data)
            toast.success('sign in successfully')
            navigate(from, { replace: true })
        } catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }
    //email password sign in 
    const handleSignIn = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password)
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
                {
                    email: result?.user?.email,
                },
                { withCredentials: true }
            )
            console.log(data)
            navigate(from, { replace: true })
            toast.success('sign in successfully')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    if (user || loading) return;


    return (
        <>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "0%", "0%"],
                }}
                className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h1 className="text-2xl font-bold text-center">Login Please</h1>
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-32 md:h-36" src={logo} alt="" />
                </div>

                <form onSubmit={handleSignIn} className="mt-6">
                    <div>
                        <label className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                        <input type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="photo" className="text-sm">Password</label>
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <label className="password cursor-pointer absolute -ml-7 pt-2"
                            onClick={handleShowPassword}>
                            {
                                showPassword ?
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setShowPassword(false)}
                                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>



                                    ) :

                                    (<svg xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => setShowPassword(true)}

                                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    )
                            }

                        </label>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        or login with Social Media
                    </a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Do not have an account? <Link to='/registration' href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Registration</Link></p>
            </motion.div>
        </>
    );
};

export default Login;