import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        autoplay={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/public/assets/home/06.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/05.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/04.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/03.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/03.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/05.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/home/01.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
