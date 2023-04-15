import android from '../../source/header/01.svg';
import apple from '../../source/header/02.svg';
import photo from '../../source/header/03.png';
import line from '../../source/header/04.svg';
import create from '../../source/header/CR EA TE.png';
import './sectionheader.css';
const Fade = require('react-reveal/Fade');
const Flip = require('react-reveal/Flip');

export const SectionHeader = () => {
    return (
        <section className="page__header-section">
            <Flip left>
                <img src={line} alt="vector" className='blue-line' />
            </Flip>
            <div className="section-header__container">
                <div className="section-header__left">
                    <div className="section-header__left-app">
                        <Fade left cascade>
                            <div className="left-app__items">
                                <a href="/" className="left-item__link">
                                    <img src={apple} alt="" className="left-item__img" />
                                </a>
                                <a href="/" className="left-item__link">
                                    <img src={android} alt="" className="left-item__img android" />
                                </a>
                            </div>
                        </Fade>
                        <Fade left>
                            <h4 className="left-app__sub-title">
                                App available
                            </h4>
                        </Fade>
                    </div>
                    <div className="section-header__left-text">
                        <Fade left>
                            <p className="left-text__content">
                                CHOOSE YOUR <br />
                                WINTER <br />
                                APPAREL
                                <span className="left-text__look">
                                    LOOK
                                </span>
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="section-header__right">
                    <Fade top>
                        <div className="section-header__right-photo">
                            <img src={photo} className="right-photo__img" alt='photo' />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}