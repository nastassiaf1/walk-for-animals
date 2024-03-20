import { MouseEventHandler } from 'react';

import styles from './../styles/gallery.module.scss';
import { Slides } from 'constants/slides';

export default function Gallery() {
    function plusSlides(
        position: number
    ): MouseEventHandler<HTMLAnchorElement> {}

    return (
        <div className={styles.gallery}>
            {Slides.map((slide, index) => {
                return (
                    <div className={styles.slide} key={index}>
                        <div className={styles.slideImg}>
                            <img src={`./../../public/images/slides/1.jpeg`} />
                        </div>

                        <div className={styles.slideText}>{slide.text}</div>
                    </div>
                );
            })}
            <a className="next" onClick={plusSlides(1)}>
                ❯
            </a>{' '}
            <a className="prev" onClick={plusSlides(-1)}>
                ❮
            </a>
        </div>
    );
}
