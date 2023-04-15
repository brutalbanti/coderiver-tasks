import android from '../../source/header/01.svg';
import apple from '../../source/header/02.svg';
import photo from '../../source/header/03.png';
import line from '../../source/header/04.svg'
import { Fade, Flip } from 'react-awesome-reveal';

import './sectionheader.css';


export const SectionHeader = () => {
    return (
        <section className="page__header-section">
            <Fade triggerOnce={true}>
                <img src={line} alt="vector" className='blue-line' />
            </Fade>
            <div className="section-header__container">
                <div className="section-header__left">
                    <div className="section-header__left-app">
                        <div className="left-app__items">
                            <Fade direction='left' delay={400} triggerOnce={true} cascade>
                                <a href="/" className="left-item__link">
                                    <img src={apple} alt="" className="left-item__img" />
                                </a>
                            </Fade>
                            <Fade direction='left' delay={400} triggerOnce={true} cascade>
                                <a href="/" className="left-item__link">
                                    <img src={android} alt="" className="left-item__img android" />
                                </a>
                            </Fade>
                        </div>
                        <Fade direction='left' triggerOnce={true}>
                            <h4 className="left-app__sub-title">
                                App available
                            </h4>
                        </Fade>
                    </div>
                    <div className="section-header__left-text">
                        <Fade direction='left' triggerOnce={true}>
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
                    <Fade direction='up' triggerOnce={true}>
                        <div className="section-header__right-photo">
                            <img src={photo} className="right-photo__img" alt='photo' />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}