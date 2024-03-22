import { useState } from 'react';

import styles from './../styles/gallery.module.scss';
import { Slides } from 'data/slides';

export default function Gallery() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    function plusSlides(slideIndex: number): void {
        let nextIndex = activeSlideIndex + slideIndex;

        if (nextIndex < 0) nextIndex = Slides.length - 1;
        if (nextIndex > Slides.length - 1) nextIndex = 0;

        setActiveSlideIndex(nextIndex);
    }

    return (
        <div className={styles.gallery}>
            <div className={styles.galleryCounter}>
                {activeSlideIndex + 1}/{Slides.length}
            </div>
            {Slides.map((slide, index) => {
                return (
                    <div
                        className={`${styles.gallerySlide} ${index === activeSlideIndex ? styles.gallerySlideActive : null}`}
                        key={index}
                    >
                        <div className={styles.gallerySlideImg}>
                            <img
                                src={`./../../public/images/slides/${slide.src}`}
                            />
                        </div>

                        <div className={styles.slideText}>{slide.text}</div>
                    </div>
                );
            })}
            <button
                className={`${styles.galleryButton} ${styles.galleryButtonNext}`}
                onClick={() => plusSlides(1)}
            >
                ❯
            </button>{' '}
            <button
                className={styles.galleryButton}
                onClick={() => plusSlides(-1)}
            >
                ❮
            </button>
        </div>
    );
}
