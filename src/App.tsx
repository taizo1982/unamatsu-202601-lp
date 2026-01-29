import { useState, useEffect } from 'react';
import heroAvif from '../design/hero-onigiri.avif';
import heroWebp from '../design/hero-onigiri.webp';
import heroJpg from '../design/hero-onigiri.jpg';
import logoWhAvif from '../design/unamatsu_logo_wh.avif';
import logoWhWebp from '../design/unamatsu_logo_wh.webp';
import logoWhPng from '../design/unamatsu_logo_wh.png';
import logoYokoWhPng from '../design/unamatsu_logo_yoko_wh.png';
import featureUnagiAvif from '../design/feature-unagi.avif';
import featureUnagiWebp from '../design/feature-unagi.webp';
import featureUnagiJpg from '../design/feature-unagi.jpg';
import featureHitsuAvif from '../design/feature-hitsumabushi.avif';
import featureHitsuWebp from '../design/feature-hitsumabushi.webp';
import featureHitsuJpg from '../design/feature-hitsumabushi.jpg';
import shopAvif from '../design/shop-exterior.avif';
import shopWebp from '../design/shop-exterior.webp';
import shopPng from '../design/shop-exterior.png';
import './unamatsu.css';

const LINE_URL = 'https://page.line.me/750yomcm?openQrModal=true';

export default function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [floatingVisible, setFloatingVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHeaderScrolled(scrollY > 80);

      const hero = document.querySelector('.hero');
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setFloatingVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="unamatsu-lp">
      {/* Header */}
      <header className={`header ${headerScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="header-logo">
            <img src={logoYokoWhPng} alt="うな松" />
          </div>
          <nav className="header-nav">
            <a href="tel:077-516-4013" className="header-tel">
              <span className="header-tel-number">077-516-4013</span>
              <span className="header-tel-time">受付 10:00〜14:00</span>
            </a>
            <a href={LINE_URL} className="header-cta">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              LINE登録
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <picture>
            <source srcSet={heroAvif} type="image/avif" />
            <source srcSet={heroWebp} type="image/webp" />
            <img src={heroJpg} alt="うな松特製鰻おにぎり" />
          </picture>
        </div>
        <div className="hero-content">
          <span className="hero-badge">2026.2.1 START</span>
          <h1 className="hero-catch">
            <span className="price">350<span>円 / 1個</span></span>
            なのに、ちゃんと鰻。
          </h1>
          <p className="hero-sub">
            お吸い物をかければ、ひつまぶし風。<br />
            二度楽しめる、鰻おにぎり。
          </p>
          <div className="hero-meta">
            <span className="hero-meta-item">2026年2月1日発売</span>
            <span className="hero-meta-item">テイクアウト専用</span>
            <span className="hero-meta-item">お吸い物付き</span>
          </div>
        </div>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* Concept */}
      <section className="concept">
        <div className="concept-vertical">鰻専門店の矜持</div>
        <div className="concept-inner">
          <h2 className="concept-heading scroll-fade">
            鰻屋が、本気で作りました。
          </h2>
          <p className="concept-text scroll-fade">
            「鰻は好きだけど、ちょっと高い。」<br />
            そんな声に応えたくて、鰻専門店が本気で考えました。
            <span className="concept-highlight">
              手軽に。でも、妥協はしない。<br />
              それが、うな松特製鰻おにぎりです。
            </span>
          </p>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="feature">
        <div className="feature-grid">
          <div className="feature-image">
            <picture>
              <source srcSet={featureUnagiAvif} type="image/avif" />
              <source srcSet={featureUnagiWebp} type="image/webp" />
              <img src={featureUnagiJpg} alt="鰻の存在感" loading="lazy" />
            </picture>
          </div>
          <div className="feature-content">
            <span className="feature-label">TASTE 01</span>
            <h2 className="feature-heading scroll-fade">
              ちゃんと、<br />鰻の存在感。
            </h2>
            <p className="feature-text scroll-fade">
              炊き立てのご飯に、特製のタレと鰻を混ぜ込み、鰻をドンと乗せました。<br /><br />
              ご飯との相性を考え抜いた、鰻おにぎり専用の味付けです。<br /><br />
              一口目から、「これは、ちゃんと鰻だ。」<br />
              そう感じていただける仕上がりです。
            </p>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="feature feature-alt">
        <div className="feature-grid">
          <div className="feature-image">
            <picture>
              <source srcSet={featureHitsuAvif} type="image/avif" />
              <source srcSet={featureHitsuWebp} type="image/webp" />
              <img src={featureHitsuJpg} alt="ひつまぶし風" loading="lazy" />
            </picture>
          </div>
          <div className="feature-content">
            <span className="feature-label">TASTE 02</span>
            <h2 className="feature-heading scroll-fade">
              実は、<br />二度美味しい。
            </h2>
            <p className="feature-text scroll-fade">
              うな松特製鰻おにぎりは、付属のお吸い物をかけるだけで、ひつまぶし風としてもお楽しみいただけます。<br /><br />
              ・最初は、そのまま鰻おにぎりで<br />
              ・途中から、お吸い物をかけてさっぱりと<br /><br />
              一つで二通りの味わい。この満足感で、350円です。
            </p>
          </div>
        </div>
      </section>

      {/* HowTo */}
      <section className="howto">
        <div className="howto-inner">
          <header className="howto-header">
            <p className="howto-label scroll-fade">HOW TO EAT</p>
            <h2 className="howto-heading scroll-fade">うな松流・二段階の楽しみ方</h2>
          </header>
          <div className="howto-steps">
            <div className="howto-step scroll-fade">
              <span className="howto-step-num">01</span>
              <h3 className="howto-step-title">まずは、そのまま</h3>
              <p className="howto-step-text">鰻・タレ・ご飯の一体感をお楽しみください。</p>
            </div>
            <div className="howto-step scroll-fade">
              <span className="howto-step-num">02</span>
              <h3 className="howto-step-title">お吸い物をかけて</h3>
              <p className="howto-step-text">旨みが広がる、ひつまぶし風に。</p>
            </div>
          </div>
          <p className="howto-note scroll-fade">
            ※時間がない方はSTEP1だけでも ／ ゆっくり食べたい方は、ぜひSTEP2まで
          </p>
        </div>
      </section>

      {/* Target */}
      <section className="target">
        <div className="target-inner">
          <header className="target-header">
            <h2 className="target-heading scroll-fade">こんな方におすすめ</h2>
          </header>
          <div className="target-list">
            {[
              '講義や仕事の合間に、さっと食べたい方',
              '小腹を満たしたい午後のひとときに',
              '鰻は好きだけど、普段はなかなか食べられない方',
              'ちょっとした差し入れを探している方',
            ].map((text, i) => (
              <div key={i} className="target-item scroll-fade">
                <span className="target-item-icon"></span>
                <span className="target-item-text">{text}</span>
              </div>
            ))}
          </div>
          <p className="target-note scroll-fade">軽食でも、満足感はしっかりあります。</p>
        </div>
      </section>

      {/* Spec */}
      <section className="spec">
        <div className="spec-inner">
          <header className="spec-header">
            <p className="spec-label scroll-fade">PRODUCT</p>
            <h2 className="spec-heading scroll-fade">価格・商品仕様</h2>
          </header>
          <div className="spec-card scroll-fade">
            <div className="spec-card-header">
              <p className="spec-card-name">うな松特製鰻おにぎり</p>
              <p className="spec-card-price">350<span>円（税込）/ 1個</span></p>
            </div>
            <div className="spec-card-body">
              <ul className="spec-list">
                <li>お吸い物付き</li>
                <li>テイクアウト専用</li>
                <li>1個からご購入いただけます</li>
              </ul>
              <p className="spec-note">※数量限定のため、売り切れ次第終了</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="shop">
        <div className="shop-inner">
          <header className="shop-header">
            <p className="shop-label scroll-fade">SHOP</p>
            <h2 className="shop-heading scroll-fade">店舗情報</h2>
          </header>
          <div className="shop-grid">
            <div className="shop-image scroll-fade">
              <picture>
                <source srcSet={shopAvif} type="image/avif" />
                <source srcSet={shopWebp} type="image/webp" />
                <img src={shopPng} alt="うな松 店舗外観" loading="lazy" />
              </picture>
            </div>
            <div className="shop-content scroll-fade">
              <h3 className="shop-name">名代 近江鰻処 うな松</h3>
              <div className="shop-info">
                <div className="shop-info-row">
                  <span className="shop-info-label">住所</span>
                  <span className="shop-info-value">〒525-0059<br />滋賀県草津市野路8丁目22-6</span>
                </div>
                <div className="shop-info-row">
                  <span className="shop-info-label">電話番号</span>
                  <span className="shop-info-value">
                    <a href="tel:077-516-4013">077-516-4013</a><br />
                    <small>受付 10:00〜14:00</small>
                  </span>
                </div>
                <div className="shop-info-row">
                  <span className="shop-info-label">営業時間</span>
                  <span className="shop-info-value">11:00〜14:00（L.O. 13:30）</span>
                </div>
                <div className="shop-info-row">
                  <span className="shop-info-label">定休日</span>
                  <span className="shop-info-value">不定休</span>
                </div>
                <div className="shop-info-row">
                  <span className="shop-info-label">駐車場</span>
                  <span className="shop-info-value">あり</span>
                </div>
              </div>
              <div className="shop-payment">
                <p className="shop-payment-title">お支払い方法</p>
                <p className="shop-payment-text">
                  クレジットカード / PayPay / au PAY / d払い / 楽天Edy / 交通系IC ほか
                </p>
              </div>
              <a href="https://www.google.com/maps/search/名代+近江鰻処+うな松" target="_blank" rel="noopener noreferrer" className="btn-map">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Googleマップで確認
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section id="line-cta" className="line-cta">
        <div className="line-cta-inner">
          <header className="line-cta-header">
            <p className="line-cta-label scroll-fade">LINE OFFICIAL</p>
            <h2 className="line-cta-heading scroll-fade">
              公式LINEから<br />ご予約・ご注文ができます。
            </h2>
          </header>
          <div className="line-benefits">
            <div className="line-benefit scroll-fade">
              <p className="line-benefit-num">01</p>
              <h3 className="line-benefit-title">店内飲食特典</h3>
              <p className="line-benefit-desc">ご飯大盛り無料 または<br />薬味無料（LINE画面提示）</p>
            </div>
            <div className="line-benefit scroll-fade">
              <p className="line-benefit-num">02</p>
              <h3 className="line-benefit-title">限定クーポン配信</h3>
              <p className="line-benefit-desc">LINE登録者限定の<br />お得なクーポンを定期配信</p>
            </div>
            <div className="line-benefit scroll-fade">
              <p className="line-benefit-num">03</p>
              <h3 className="line-benefit-title">スタンプで無料UP</h3>
              <p className="line-benefit-desc">スタンプ5つで松・竹・梅の<br />鰻の量が1ランクアップ</p>
            </div>
          </div>
          <div className="line-cta-action scroll-fade">
            <p className="line-cta-note">登録は無料です。</p>
            <a href={LINE_URL} className="btn-line">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              LINE公式アカウントを追加する
            </a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="closing">
        <div className="closing-inner">
          <h2 className="closing-catch scroll-fade">
            <span className="closing-line"><span className="accent">350円</span>なのに、ちゃんと鰻。</span>
            <span className="closing-line">そして、二度美味しい。</span>
          </h2>
          <p className="closing-text scroll-fade">
            ご予約・ご注文は、公式LINEからどうぞ。
          </p>
          <div className="closing-cta scroll-fade">
            <p className="closing-date">2026年2月1日 販売開始</p>
            <a href={LINE_URL} className="btn-line">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINE公式アカウントを追加する
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <picture>
          <source srcSet={logoWhAvif} type="image/avif" />
          <source srcSet={logoWhWebp} type="image/webp" />
          <img src={logoWhPng} alt="うな松" className="footer-logo" />
        </picture>
        <a href="tel:077-516-4013" className="footer-tel">
          <span className="footer-tel-number">077-516-4013</span>
        </a>
        <span className="footer-tel-time">受付時間 10:00〜14:00</span>
        <p className="footer-address">
          〒525-0059 滋賀県草津市野路8丁目22-6<br />
          営業時間 11:00〜14:00（L.O. 13:30）
        </p>
        <p className="footer-copy">&copy; 2026 うな松 All rights reserved.</p>
      </footer>

      {/* Floating CTA */}
      <div className={`floating-cta ${floatingVisible ? 'visible' : ''}`}>
        <div className="floating-cta-inner">
          <div className="floating-cta-text">
            <p className="floating-cta-price">350円<span>（税込）/ 1個</span></p>
            <p className="floating-cta-sub">鰻おにぎり｜お吸い物付き</p>
          </div>
          <a href={LINE_URL} className="floating-cta-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINE登録
          </a>
        </div>
      </div>
    </div>
  );
}
