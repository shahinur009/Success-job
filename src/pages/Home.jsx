import Banner from "../components/Banner";
import JobsCategory from "../components/JobsCategory";



const Home = () => {

    return (
        <div className="container px-8 py-8 mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
            <Banner />
            <JobsCategory />

        </div>
    );
};

export default Home;