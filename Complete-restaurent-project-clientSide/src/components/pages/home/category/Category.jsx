import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import SectionTitle from "../../../section title/SectionTitle"

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../../assets/home/slide1.jpg';
import slide2 from '../../../../assets/home/slide2.jpg';
import slide3 from '../../../../assets/home/slide3.jpg';
import slide4 from '../../../../assets/home/slide4.jpg';
import slide5 from '../../../../assets/home/slide5.jpg';


const Category = () => {
  return (
    <section className='max-w-[1320px] mx-auto'>
      <SectionTitle
      heading={"Order Online"}
      subHeadeing={"From 11:00am to 10:00pm "}
      >
      </SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className='ml-16'>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Category