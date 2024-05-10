import Banner from "../components/Banner";
import JobsCategory from "../components/JobsCategory";


const Home = () => {
    return (
        <div className="container px-8 py-8 mx-auto">
            <Banner />
            <JobsCategory />
        </div>
    );
};

export default Home;