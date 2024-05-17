// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

import SectionTitle from "../../../section title/SectionTitle"

// import 'swiper/css';
// import 'swiper/css/pagination';

// import slide1 from '../../../assets/home/slide1.jpg';
// import slide2 from '../../../assets/home/slide2.jpg';
// import slide3 from '../../../assets/home/slide3.jpg';
// import slide4 from '../../../assets/home/slide4.jpg';
// import slide5 from '../../../assets/home/slide5.jpg';


const Category = () => {
  return (
    <section>
      <SectionTitle
      heading={"Order Online"}
      subHeadeing={"From 11:00am to 10:00pm "}
      >
      </SectionTitle>

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </section>
  )
}

export default Category