'use client';
import React, { useEffect } from 'react';
import FounderCard from '@/features/AboutUs/Founders/components/FounderCard/FounderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './Founders.scss';
import 'swiper/css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectFounders } from '@/features/AboutUs/Founders/foundersSlice';
import { fetchFounders } from '@/features/AboutUs/Founders/foundersThunk';

const Founders = () => {
  const dispatch = useAppDispatch();
  const founders = useAppSelector(selectFounders);

  useEffect(() => {
    dispatch(fetchFounders());
  }, [dispatch]);

  console.log(founders);

  return (
    <section className="founders container">
      <h2 className="founders-title">Основатели</h2>
      <div className="founders-cards-desktop">
        {founders.map((founder) => (
          <FounderCard key={founder.id} founder={founder} />
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
          loop={true}
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
          <SwiperSlide>
            {founders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Founders;
