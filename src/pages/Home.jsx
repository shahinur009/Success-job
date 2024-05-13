import Banner from "../components/Banner";
import JobsCategory from "../components/JobsCategory";
import OurJobProcess from "../components/OurJobProcess";
import WeDo from "../components/WeDo";



const Home = () => {

    return (
        <div className="md:container md:px-8 md:py-8 md:mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
            <Banner />
            <JobsCategory />
            <OurJobProcess />
            <WeDo/>

        </div>
    );
};

export default Home;