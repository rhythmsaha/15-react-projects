import React, { useEffect, useState } from "react";
import styles from "./styles/Container.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const Container = () => {
    const [experiences, setExperiences] = useState([]);
    const [value, setValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch(
            "https://course-api.com/react-tabs-project"
        );
        const data = await response.json();
        setExperiences(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className={styles.Container}>
                <div className={styles.Heading}>
                    <h1>Experience</h1>
                </div>
                <div className={styles.Loading}>
                    <div className={styles.Loader}></div>
                </div>
            </div>
        );
    }
    const { company, dates, duties, title } = experiences[value];

    const changeComapanyHandler = (val) => {
        setValue(val);
    };
    return (
        <div className={styles.Container}>
            <div className={styles.Heading}>
                <h1>Experience</h1>
            </div>
            <div className={styles.InfoSection}>
                <div className={styles.BtnGroup}>
                    {experiences.map((exp, index) => {
                        return (
                            <button
                                onClick={() => changeComapanyHandler(index)}
                                className={`${styles.TabBtns} ${
                                    index === value && styles.activeTab
                                }`}
                                key={exp.id}
                            >
                                {exp.company}
                            </button>
                        );
                    })}
                </div>
                <div className={styles.Informations}>
                    <div className={styles.Title}>{title}</div>
                    <span className={styles.company}>{company}</span>
                    <div className={styles.Date}>{dates}</div>
                    <div className={styles.Jobs}>
                        {duties.map((duty, index) => {
                            return (
                                <div className={styles.Job} key={index}>
                                    <span className={styles.Icons}>
                                        <FaAngleDoubleRight />
                                    </span>
                                    <span className={styles.JobInFo}>
                                        {duty}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;
