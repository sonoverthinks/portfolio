import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationButton } from "../CustomButton";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { LeftArrowIcon, RightArrowIcon } from "../svgComponents";
// import Link from "next/link";

export default function ProjectSwiper() {
  return (
    <section className="w-full text-center lg:col-span-3">
      <h3 className="text-[24px] md:text-[32px] font-bold leading-[30px] md:leading-[40px] mb-5">
        My Work
      </h3>
      <div className="w-full overflow-hidden">
        <Swiper
          initialSlide={1}
          slidesPerView="auto"
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          grabCursor={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <p>01</p>
            <p>Reviving Retro PCs</p>
            <p>What happens when old PCs</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>01</p>
            <p>Reviving Retro PCs</p>
            <p>What happens when old PCS</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>01</p>
            <p>Reviving Retro PCs</p>
            <p>What happens when old PCs</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>01</p>
            <p>Reviving Retro PCs</p>
            <p>What happens when old PCs</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>01</p>
            <p>Reviving Retro PCs</p>
            <p>What happens when old PCs</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>01</p>
            <p>Reviving Retro PCs</p>
            <p>What happens when old PCs</p>
          </SwiperSlide> */}
          <SwiperSlide>
            <img src="/slide1.jpg" alt="image1" />
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
            <img src="/slide3.jpg" alt="image6" />
          </SwiperSlide>
          <div className="flex items-center justify-center gap-2 mx-auto mt-4">
            <div className="prev">
              <NavigationButton>
                <div className="w-4">
                  <LeftArrowIcon />
                </div>
              </NavigationButton>
            </div>
            <div className="next">
              <NavigationButton>
                <div className="w-4">
                  <RightArrowIcon />
                </div>
              </NavigationButton>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

/* 
   <div className="flex items-center justify-center gap-2 mx-auto mt-4">
          <div className="prev">
            <NavigationButton>
              <div className="w-4">
                <LeftArrowIcon />
              </div>
            </NavigationButton>
          </div>
          <div className="next">
            <NavigationButton>
              <div className="w-4">
                <RightArrowIcon />
              </div>
            </NavigationButton>
          </div>
*/
