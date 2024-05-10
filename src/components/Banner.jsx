import banner from '../assets/image/Banner.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto px-6'>
            <div
                className='w-full bg-center bg-base-100 bg-cover h-[30rem]'
                style={{
                    backgroundImage: `url(${banner}) `,
                }}
            >
            </div>
        </div>
    );
};

export default Banner;