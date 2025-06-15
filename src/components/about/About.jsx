import React from 'react';
import "./about.css";
import Me from "../../assets/toddler2.png";
import ResumePDF from "../../assets/resumeBIZ.pdf";
import Marathon1 from "../../assets/marathon1.png";
import Marathon2 from "../../assets/marathon2.png";
import SwimCap from "../../assets/swimcap.png";
import SwimRibbons from "../../assets/swimribbons.png";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Me} alt="me again" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I’m Rand Hasan, a 21 year old gal from Pittsburgh, PA. Over the past few years, I’ve spent time both in and out of school exploring where technology, business, and strategy intersect — and that’s where I’ve found the most energy.
                        </p>

                        <p className="about__description">
                            Beyond academics, I love moving my body, whether it be through long-distance running or at a club swim practice. I’m also a huge nerd when it comes to social psychology, vintage cameras, and the beauty industry (makeup + skincare).
                        </p>

                        <p className="about__description">
                            Some of my other interests include late-night comedy shows, memes, rap and hip-hop, reading books (mostly non-fiction), hanging out with my friends and family, college basketball (particularly women’s and UVA + Pitt men’s), cute animals, and chatting with kids.
                        </p>

                        <p className="about__description">
                            I’m always chasing the next things to get curious about and learn more. You can always count on me for a random fun fact or even better, a fantastic restaurant recommendation (human zagat). I’m drawn to activities and work that feels impactful and human — and I’m so excited and lucky to keep exploring where that can lead.
                        </p>
                    </div>

                    <div className="about__icons">
                        <img src={Marathon1} alt="marathon medal" className="about__icon" />
                        <img src={SwimCap} alt="swim cap" className="about__icon" />
                        <img src={Marathon2} alt="marathon medal" className="about__icon" />
                        <img src={SwimRibbons} alt="swim ribbons" className="about__icon" />
                    </div>

                    <div className="about__button-container">
                        <a href={ResumePDF} download className="btn">Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About