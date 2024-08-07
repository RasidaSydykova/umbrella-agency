'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import OurWorkCard from '@/features/Home/OurWorks/components/OurWorkCard';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectPortfolios } from '@/features/Home/OurWorks/portfoliosSlice';
import { fetchPortfolios } from '@/features/Home/OurWorks/portfoliosThunk';
import './OurWorks.scss';
import 'swiper/css';

const OurWorks = () => {
  const dispatch = useAppDispatch();
  const portfolios = useAppSelector(selectPortfolios);

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, [dispatch]);

  return (
    <section className="our-works container">
      <h2 className="our-works-title">Наши работы</h2>
      <div className="our-works-cards-desktop">
        {portfolios.map((portfolio) => (
          <OurWorkCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
      <div className="our-works-cards-mobile">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={0}
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
            },
            375: {
              slidesPerView: 1.5,
            },
          }}
        >
          {portfolios.map((portfolio) => (
            <SwiperSlide>
              <OurWorkCard key={portfolio.id} portfolio={portfolio} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorks;
