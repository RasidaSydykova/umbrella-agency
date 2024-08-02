'use client';
import React from 'react';
import FounderCard from '@/features/AboutUs/Founders/components/FounderCard/FounderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './Founders.scss';
import 'swiper/css';

const Founders = () => {
  return (
    <section className="founders container">
      <h2 className="founders-title">Основатели</h2>
      <div className="founders-cards-desktop">
        {[...Array(3)].map((_, index) => (
          <FounderCard
            key={index}
            img="/assets/about-us/founders/founder-img.jpg"
            text="“Мы верим в силу интегрированного подхода, объединяющего клиентский и агентский опыт”"
            name="Андрей Александров"
            company="Бывший маркетинг-директор компании из списка Forbes"
          />
        ))}
      </div>
      <div className="founders-cards-mobile">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          pagination={false}
          navigation={{
            nextEl: '.mySwiper__btns__next',
            prevEl: '.mySwiper__btns__prev',
          }}
          modules={[Pagination, Navigation]}
          style={{ overflow: 'visible' }}
          className="mySwiper"
          initialSlide={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            993: {
              slidesPerView: 2,
            },
          }}
        >
          {[...Array(3)].map((_, index) => (
            <SwiperSlide>
              <FounderCard
                key={index}
                img="/assets/about-us/founders/founder-img.jpg"
                text="“Мы верим в силу интегрированного подхода, объединяющего клиентский и агентский опыт”"
                name="Андрей Александров"
                company="Бывший маркетинг-директор компании из списка Forbes"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Founders;
