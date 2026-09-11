import React from 'react';
import "./about.css";
import Me from "../../assets/toddler2.png";
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
                            I’m Rand Hasan, 22 years old, from Pittsburgh, PA, but now based in New York City!
                        </p>

                        <p className="about__description">
                            I started off wanting to become a Software Engineer, but discovered through my business courses that I enjoy finance and strategy as much as I do coding.
                        </p>

                        <p className="about__description">
                            Some of my other interests include long-distance running, swimming, the beauty industry, social psychology, amateur photography, late-night comedy shows, rap and hip-hop, reading (mostly non-fiction), hanging out with my family and friends, college basketball, singing, anything vintage, and being outside.
                        </p>

                    </div>

                    <div className="about__icons">
                        <img src={Marathon1} alt="marathon medal" className="about__icon" />
                        <img src={SwimCap} alt="swim cap" className="about__icon" />
                        <img src={Marathon2} alt="marathon medal" className="about__icon" />
                        <img src={SwimRibbons} alt="swim ribbons" className="about__icon" />
                    </div>

                    <div className="about__button-container">
                        <button 
                            className="btn"
                            onClick = {() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth"
                                });

                                setTimeout(() => {
                                    const subject = document.getElementById("subject");
                                    subject.value = "Request to View Resume";
                
                                }, 500);
                            }}
                            >
                            Request Resume
                            
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About