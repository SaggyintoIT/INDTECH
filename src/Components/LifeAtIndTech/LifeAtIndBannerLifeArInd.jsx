import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import life1 from '../../assets/images/life_1.jpg'; // Adjust the path as needed
import leftArrow from '../../assets/images/left.png';
import rightArrow from '../../assets/images/right.png';

const BannerLifeAtInd = () => {
  useEffect(() => {
    const rev = $('.rev_slider');
    rev.on('init', function (event, slick, currentSlide) {
      const cur = $(slick.$slides[slick.currentSlide]);
      const next = cur.next();
      const next2 = cur.next().next();
      const prev = cur.prev();
      const prev2 = cur.prev().prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      prev2.addClass('slick-sprev2');
      next2.addClass('slick-snext2');
      cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
      slick.$prev = prev;
      slick.$next = next;
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      console.log('beforeChange');
      const cur = $(slick.$slides[nextSlide]);
      console.log(slick.$prev, slick.$next);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      slick.$prev.prev().removeClass('slick-sprev2');
      slick.$next.next().removeClass('slick-snext2');
      const next = cur.next();
      const prev = cur.prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      prev.prev().addClass('slick-sprev2');
      next.next().addClass('slick-snext2');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
    });

    rev.slick({
      speed: 1000,
      arrows: true,
      dots: true,
      focusOnSelect: true,
      prevArrow: `<button class="com-btn lefta"> <span><img src="${leftArrow}" alt="left" /></span></button>`,
      nextArrow: `<button class="com-btn righta"> <span><img src="${rightArrow}" alt="right" /></span></button>`,
      infinite: true,
      centerMode: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0',
      swipe: true,
      customPaging: function (slider, i) {
        return '';
      },
    });

    return () => {
      rev.slick('unslick');
    };
  }, []);

  return (
      <>
    <section className="banner bg-dark">
      <div className="text-center text-white pt-70 px-3">
        <span className="text-white fs-70 fw-200 pb-3">
          Explore Life At <span className="fw-bold">INDTechMark</span>
        </span>
        <p className="fn-18 mt-3 px-3">
          A Mindful team of tech innovators bringing world-class tech ideas to reality. We embrace the
          power of technology to provide<br /> cutting-edge digital solutions that propel our clients toward unprecedented success.
        </p>

        <div className="col-md-12 mx-auto">
          <div className="mt-4">
            <div className="rev_slider">
              <div className="rev_slide ">
                <img className="w-100 LifeSlidImg" src={life1} alt="Life at INDTechMark" />
              </div>
              <div className="rev_slide">
                <img className="w-100 LifeSlidImg" src={life1} alt="Life at INDTechMark" />
              </div>
              <div className="rev_slide">
                <img className="w-100 LifeSlidImg" src={life1} alt="Life at INDTechMark" />
              </div>
              <div className="rev_slide">
                <img className="w-100 LifeSlidImg" src={life1} alt="Life at INDTechMark" />
              </div>
              <div className="rev_slide">
                <img className="w-100 LifeSlidImg" src={life1} alt="Life at INDTechMark" />
              </div>
              <div className="rev_slide">
                <img className="w-100 LifeSlidImg" src={life1} alt="Life at INDTechMark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>

    
  );
};

export default BannerLifeAtInd;