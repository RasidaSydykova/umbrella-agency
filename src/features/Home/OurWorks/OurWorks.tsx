'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import OurWorkCard from '@/features/Home/OurWorks/components/OurWorkCard';
import './OurWorks.scss';
import 'swiper/css';

const OurWorks = () => {
  return (
    <section className="our-works container">
      <h2 className="our-works-title">Наши работы</h2>
      <div className="our-works-cards-desktop">
        {[...Array(6)].map((_, index) => (
          <OurWorkCard
            key={index}
            link="/"
            img="/assets/home/our-works/our-work-1.jpg"
            text="SEO для Novotel. Рост поискового трафика"
            boldText="с 6к до 1млн"
          />
        ))}
      </div>
      <div className="our-works-cards-mobile">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={false}
          navigation={{
            nextEl: '.mySwiper__btns__next',
            prevEl: '.mySwiper__btns__prev',
          }}
          modules={[Pagination, Navigation]}
          style={{ overflow: 'visible' }}
          className="mySwiper"
        >
          {[...Array(6)].map((_, index) => (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide>
              <OurWorkCard
                key={index}
                link="/"
                img="/assets/home/our-works/our-work-1.jpg"
                text="SEO для Novotel. Рост поискового трафика"
                boldText="с 6к до 1млн"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorks;
