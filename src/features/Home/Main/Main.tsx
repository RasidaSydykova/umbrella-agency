import React from 'react';
import FormLink from '@/components/FormLink/FormLink';
import './Main.scss';
import Background from '@/UI/Background/Background';

const Main = () => {
  const bannerLink = `url("/assets/main-img.jpeg")`;
  return (
    <section className="hero-section">
      <div
        className="hero-section-banner"
        style={{ backgroundImage: bannerLink, backgroundSize: 'cover' }}
      >
        <div className="hero-section-banner-wrapper container">
          <div className="background">
            <Background />
          </div>
          <h1 className="hero-section-banner-wrapper-title">
            Мы стремимся стать партнером в digital-маркетинге, которому вы доверяете
          </h1>
          <p className="hero-section-banner-wrapper-subtitle">
            Предлагаем комплексный анализ вашего бизнеса и индивидуальные стратегии для PPC, SEO и
            других ключевых направлений
          </p>
          <div className="hero-section-banner-wrapper-link">
            <FormLink />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
