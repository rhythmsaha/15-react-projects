import React, { useEffect, useState } from "react";
import styles from "./styles/Reviews.module.css";
import Data from "../Data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Reviews = () => {
    const [index, setIndex] = useState(2);
    useEffect(() => {
        const lastIndex = Data.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setIndex(index + 1);
        }, 3000);

        return () => {
            clearTimeout(autoSlide);
        };
    }, [index]);

    return (
        <>
            <div className={styles.Header}>
                <span>/</span> Reviews
            </div>
            <section className={styles.Reviews}>
                {Data.map((article, articleIndex) => {
                    let articleClass = `${styles.Article} ${styles.nextSlide}`;

                    if (articleIndex === index) {
                        articleClass = `${styles.Article} ${styles.activeSlide}`;
                    }

                    if (
                        articleIndex === index - 1 ||
                        (index === 0 && articleIndex === Data.length - 1)
                    ) {
                        articleClass = `${styles.Article} ${styles.lastSlide}`;
                    }

                    return (
                        <article key={article.id} className={articleClass}>
                            <div className={styles.Image}>
                                <img src={article.image} alt={article.name} />
                            </div>
                            <div className={styles.Name}>{article.name}</div>
                            <div className={styles.Title}>{article.title}</div>
                            <div className={styles.Quote}>{article.quote}</div>
                        </article>
                    );
                })}
                <button onClick={() => setIndex(index - 1)}>
                    <FaAngleLeft />
                </button>
                <button onClick={() => setIndex(index + 1)}>
                    <FaAngleRight />
                </button>
            </section>
        </>
    );
};

export default Reviews;
