'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from '@/features/Home/Reviews/components/ReviewCard/ReviewCard';
import './Reviews.scss';
import 'swiper/css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchReviews } from '@/features/Home/Reviews/reviewsThunk';
import { selectReviews } from '@/features/Home/Reviews/reviewsSlice';

const Reviews = () => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

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
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard
                img={review.avatar}
                name={review.fullname}
                company={review.company_name}
                position={review.position}
                review={review.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
