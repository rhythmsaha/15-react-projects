import React from "react";
import Button from "./Button";
import classes from "./styles/Hero.module.css";

const Hero = () => {
    return (
        <>
            <section className={classes.Hero}>
                <div className={classes.Hero_center}>
                    <article className={classes.Hero_info}>
                        <h1>
                            Payments infrastructure <br />
                            for the internet
                        </h1>
                        <p>
                            Millions of companies of all sizes—from startups to
                            Fortune 500s—use Stripe’s software and APIs to
                            accept payments, send payouts, and manage their
                            businesses online.
                        </p>
                        <Button>Start now</Button>
                    </article>
                    <article className={classes.Hero_images}>
                        <img
                            src="https://raw.githubusercontent.com/john-smilga/react-projects/master/13-stripe-submenus/final/src/images/phone.svg"
                            className={classes.Phone_img}
                            alt="phone"
                        />
                    </article>
                </div>
            </section>
        </>
    );
};

export default Hero;
