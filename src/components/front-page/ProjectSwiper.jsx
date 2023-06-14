import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import { NavigationButton } from "../CustomButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import CustomButton from "../CustomButton";

export default function ProjectSwiper() {
  return (
    <section className="flex items-center justify-center w-full mx-auto lg:col-span-3">
      <Swiper
        initialSlide={1}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        grabCursor={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full max-w-[550px] relative h-full">
            This is a project
          </div>
          {/* <img src="/slide1.jpg" alt="image1" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide2.jpg" alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide3.jpg" alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide4.jpg" alt="image4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide5.jpg" alt="image5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide2.jpg" alt="image5" />
        </SwiperSlide>

        <div className="flex items-center justify-center gap-2 mx-auto mt-4">
          <div className="prev">
            <NavigationButton></NavigationButton>
          </div>
          <div className="next">
            <NavigationButton></NavigationButton>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
