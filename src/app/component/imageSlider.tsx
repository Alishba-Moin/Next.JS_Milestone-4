// app/component/imageSlider.tsx

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 3000 }}
      className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] my-10"
    >
      <SwiperSlide className="relative h-full">
        <Image
          src="/homeImage/image1.jpg"
          alt="Slide 1"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative h-full">
        <Image
          src="/homeImage/image2.jpg"
          alt="Slide 2"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative h-full">
        <Image
          src="/homeImage/image3.jpg"
          alt="Slide 3"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative h-full">
        <Image
          src="/homeImage/image4.jpg"
          alt="Slide 4"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative h-full">
        <Image
          src="/homeImage/image5.jpg"
          alt="Slide 5"
          fill
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
