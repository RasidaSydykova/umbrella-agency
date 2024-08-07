'use client';
import React, { useState } from 'react';
import AboutUsCard from '@/features/Home/AboutUs/components/AboutUsCard/AboutUsCard';
import Link from 'next/link';
import './AboutUs.scss';

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="about-us container">
      <div className="about-us-cards">
        <AboutUsCard
          img="/assets/home/about-us/line-chart-1.gif"
          title="Комплексная диагностика и поддержка"
          text="Мы не просто разрабатываем стратегию и план действий –
          мы сопровождаем вас на каждом этапе внедрения рекомендаций по продвижению,
          обеспечивая постоянную поддержку и адаптацию стратегий и тактик для достижения
          наилучших результатов."
        />
        <AboutUsCard
          img="/assets/home/about-us/line-chart-2.gif"
          title="Экспертная команда с обширным опытом"
          text="Наша команда состоит из профессионалов с многолетним опытом работы как на стороне
          агентств, так и на стороне клиентов. Это позволяет нам понимать ваши потребности и
          предлагать наиболее эффективные решения."
        />
        <AboutUsCard
          img="/assets/home/about-us/line-chart-3.gif"
          title="Точная и эффективная аналитика"
          text="Мы предоставляем всесторонний анализ всех ваших маркетинговых активностей на первом
          этапе партнерства, начиная со стратегии до тактики и используемых механик, чтобы выявить
          ключевые драйверы и барьеры вашей целевой аудитории."
        />
      </div>
      <div className="about-us-link">
        <Link
          href="/about-us"
          className="about-us-link"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Подробнее о компании
          <img
            className="about-us-link-arrow"
            src={isHovered ? "/assets/umbrella-arrow-green.svg" : "/assets/umbrella-arrow-neutral.svg"}
            alt="umbrella"
            style={{
              transition: 'transform 0.5s ease',
            }}
          />
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
