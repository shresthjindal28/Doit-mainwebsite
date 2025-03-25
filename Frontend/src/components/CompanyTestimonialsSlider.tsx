"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Slider: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Image
              src="/slider-image-1.jpg"
              alt="Slide 1"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Image
              src="/slider-image-2.jpg"
              alt="Slide 2"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Image
              src="/slider-image-3.jpg"
              alt="Slide 3"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
