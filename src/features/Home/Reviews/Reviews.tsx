'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from '@/features/Home/Reviews/components/ReviewCard/ReviewCard';
import './Reviews.scss';
import 'swiper/css';

const Reviews = () => {
  return (
    <section className="reviews container">
      <div className="wrapper">
        <h3 className="title">Отзывы</h3>
        <div className="buttons">
          <div className="mySwiper__btns__prev button">
            <img className="arrow" src="/assets/home/review/left-arrow.svg" alt="Left arrow" />
          </div>
          <div className="mySwiper__btns__next button">
            <img className="arrow" src="/assets/home/review/right-arrow.svg" alt="Right arrow" />
          </div>
        </div>
      </div>

      <div className="swiper-cards">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={false}
          navigation={{
            nextEl: '.mySwiper__btns__next',
            prevEl: '.mySwiper__btns__prev',
          }}
          modules={[Pagination, Navigation]}
          style={{ overflow: 'visible' }}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {[...Array(6)].map((_, index) => (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide>
              <ReviewCard
                key={index}
                img="/assets/home/review/review-img.jpg"
                name="Елена Стрелецкая"
                company="Исполнительный директор “Novotel”"
                review="Lorem ipsum dolor sit amet consectetur. Risus semper nascetur morbi aenean
                purus congue. Laoreet quam sed sit tempus in. Mauris amet mi sit in nisi pellentesque.
                Fusce mauris habitant et imperdiet orci sit elit egestas dolor.Lorem ipsum dolor
                sit amet consectetur. Risus semper nascetur morbi aenean purus congue. Laoreet quam sed sit
                tempus in. Mauris amet mi sit in nisi pellentesque. "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
