import React from "react";
import classes from "./styles/About.module.css";

const About = () => {
    return (
        <main>
            <section className={classes.AboutSection}>
                <div className={classes.Heading}>About Us</div>
                <div className={classes.Content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae repudiandae architecto qui adipisci in officiis,
                    aperiam sequi atque perferendis eos, autem maiores nisi
                    saepe quisquam hic odio consectetur nobis veritatis quasi
                    explicabo obcaecati doloremque? Placeat ratione hic
                    aspernatur error blanditiis?
                </div>
            </section>
        </main>
    );
};

export default About;
