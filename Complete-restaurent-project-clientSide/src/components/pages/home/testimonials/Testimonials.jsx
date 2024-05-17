import SectionTitle from "../../../section title/SectionTitle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="mt-16">
      <SectionTitle
        subHeadeing={"what our clients say"}
        heading={"testimonials"}
      ></SectionTitle>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" max-w-4xl mx-auto flex flex-col items-center  my-16  ">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <div className="flex space-x-6 mt-7">
                  <svg
                    width="46.000000"
                    height="85.000000"
                    viewBox="0 0 46 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path

                      id="Vector"
                      d="M42.63 41.51C40.39 39.27 37.66 38.15 34.46 38.15L21 38.15C19.4 38.15 18.03 37.59 16.91 36.47C15.79 35.34 15.23 33.98 15.23 32.38L15.23 30.46C15.23 26.21 16.73 22.58 19.74 19.58C22.74 16.58 26.37 15.07 30.61 15.07L34.46 15.07C35.5 15.07 36.4 14.69 37.16 13.93C37.92 13.17 38.31 12.27 38.31 11.23L38.31 3.53C38.31 2.49 37.92 1.59 37.16 0.83C36.4 0.07 35.5 -0.31 34.46 -0.31L30.61 -0.31C26.44 -0.31 22.47 0.5 18.68 2.12C14.9 3.74 11.62 5.94 8.86 8.7C6.09 11.47 3.9 14.74 2.28 18.53C0.65 22.31 -0.16 26.29 -0.16 30.46L-0.16 72.76C-0.16 75.97 0.96 78.69 3.21 80.94C5.45 83.18 8.18 84.3 11.38 84.3L34.46 84.3C37.66 84.3 40.39 83.18 42.63 80.94C44.87 78.69 45.99 75.97 45.99 72.76L45.99 49.69C46 46.48 44.87 43.76 42.63 41.51Z"
                      fill="#fff"
                    />
                  </svg>
                  <svg
                    width="46.000000"
                    height="85.000000"
                    viewBox="0 0 46 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path

                      id="Vector"
                      d="M42.63 41.51C40.39 39.27 37.66 38.15 34.46 38.15L21 38.15C19.4 38.15 18.03 37.59 16.91 36.47C15.79 35.34 15.23 33.98 15.23 32.38L15.23 30.46C15.23 26.21 16.73 22.58 19.74 19.58C22.74 16.58 26.37 15.07 30.61 15.07L34.46 15.07C35.5 15.07 36.4 14.69 37.16 13.93C37.92 13.17 38.31 12.27 38.31 11.23L38.31 3.53C38.31 2.49 37.92 1.59 37.16 0.83C36.4 0.07 35.5 -0.31 34.46 -0.31L30.61 -0.31C26.44 -0.31 22.47 0.5 18.68 2.12C14.9 3.74 11.62 5.94 8.86 8.7C6.09 11.47 3.9 14.74 2.28 18.53C0.65 22.31 -0.16 26.29 -0.16 30.46L-0.16 72.76C-0.16 75.97 0.96 78.69 3.21 80.94C5.45 83.18 8.18 84.3 11.38 84.3L34.46 84.3C37.66 84.3 40.39 83.18 42.63 80.94C44.87 78.69 45.99 75.97 45.99 72.76L45.99 49.69C46 46.48 44.87 43.76 42.63 41.51Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <p className="py-8 text-center">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
