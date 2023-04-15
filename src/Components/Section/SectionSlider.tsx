import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './slider.css';
import one from '../../source/slider/01.png';
import two from '../../source/slider/02.png';
import three from '../../source/slider/03.png';
const Fade = require('react-reveal/Fade');

const image = [one, two, three, one, two, three]

const params = {
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 45,
    slidesPerGroup: 1,
    breakpoints: {
        400: {
            slidesPerView: 1.5,
        },
        625: {
            slidesPerView: 2.5,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4.5,
        }
    }
}
export const SectionSlider = () => {
    return (
        <section className="page__slider">
            <div className="slider__container">
                <Fade bottom>
                    <h1 className="slider__title">
                        CHOOSE LOOKS
                    </h1>
                </Fade>
                <div className="slider__content">
                    <Fade top>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            {...params}
                        >
                            {image.map((url, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={url} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Fade>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
                <Fade bottom>
                    <div className="slider__title">
                        MORE ABOUT US
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="slider__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.
                        </p>
                        <br />
                        <p>
                            Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.
                        </p>
                    </div>
                </Fade>
            </div>
        </section>
    )
}