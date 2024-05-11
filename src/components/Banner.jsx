import banner from '../assets/image/Banner.jpg'
import dataAnalyst from '../assets/image/data anylist.png'
import marketing from '../assets/image/marketing_specialist.jpg'
import software from '../assets/image/software engineer.webp'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Slider from './Slider';

const Banner = () => {
    return (
        <div className='md:container px-2 py-2 md:px-6 md:py-6 md:mx-auto'>
            <Swiper
                cssMode={true}
                navigation={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {/* slider 1 */}
                <SwiperSlide>
                    <Slider image={banner} text='Success Jobs is a largest job hunting place in South-Asia'/>
                </SwiperSlide>

                {/* slider 2 */}
                <SwiperSlide>
                    <Slider image={dataAnalyst} text='Data Analyst job place here' />
                </SwiperSlide>

                {/* slider 3 */}
                <SwiperSlide>
                    <Slider image={marketing} text='Digital marketing job place here' />
                </SwiperSlide>

                {/* slider 4 */}
                <SwiperSlide>
                    <Slider image={software} text='You are a software Engineer find out your dream job'/>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;