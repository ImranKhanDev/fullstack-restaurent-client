import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle heading={'Open 24x7 for you'} subHeading={'Food Category'}>

      </SectionTitle>
      <Swiper
        slidesPerView={4}
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
        className="mySwiper mb-4"
      >
        <SwiperSlide>
          <img src="/public/assets/menu/soup-bg.jpg" />
          <h3 className="text-center absolute bottom-4 text-4xl">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/menu/salad-bg.jpg" />
          <h3 className="text-center absolute bottom-4 text-4xl">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/menu/pizza-bg.jpg" />
          <h3 className="text-center absolute bottom-4 text-4xl">Pizza</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/public/assets/menu/salad-bg.jpg" />
          <h3 className="text-center absolute bottom-4 text-4xl">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/assets/menu/soup-bg.jpg" />
          <h2 className="text-center absolute bottom-4 text-4xl">Soup</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
