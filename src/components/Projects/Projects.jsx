import React, { useEffect } from "react";
import styles from './Projects.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import pancakeProject from "../../assets/pancakeswap.png";

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className={styles.projects}>
            {/* <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div> */}

            <div className={styles.titleCont}>
                <h1 className={styles.title}>
                    <span>
                        Some Projects
                    </span>
                    {" In "}
                    <span className={styles.title2}>
                        Web Development
                    </span>
                </h1>
            </div>

            <div className={styles.cards}>
                <div
                    data-aos="flip-left"
                    data-aos-anchor-placement="bottom-bottom"
                    className={styles.tarjeta}
                >
                    {" "}
                    <div className={styles.gradientBorder}></div>
                    <div className={styles.gradientborder2}></div>
                    <div className={styles.tarjeta2}>
                        <div className={styles.tarjetaInterior}>
                            {" "}
                            <img
                                className={styles.cardImage}
                                src={pancakeProject}
                                alt="website_image"
                                width="300px"
                            />
                            <div className={styles.cardText}>
                                <h5 className={styles.cardTitle}>
                                    Horse Care
                                </h5>
                                <p className={styles.cardParagraph}>
                                    I developed a Horse Care Professional
                                    marketplace using React, TypeScript, Shadcn
                                    UI, Stripe Payment gateway, Express.js,
                                    Auth0, and Supabase database, ensuring a
                                    robust platform for seamless services and
                                    transactions.
                                </p>
                                <div className={styles.btnCont}>
                                    <a
                                        href="https://github.com/DIWAKARKASHYAP/test-assignment"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.viewCode}
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href="https://test-assignment-i5mu.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.viewPage}
                                    >
                                        {/* <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "} */}
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-anchor-placement="bottom-bottom"
                    className={styles.tarjeta}
                >
                    {" "}
                    <div className={styles.gradientBorder}></div>
                    <div className={styles.gradientborder2}></div>
                    <div className={styles.tarjeta2}>
                        <div className={styles.tarjetaInterior}>
                            {" "}
                            <img
                                className={styles.cardImage}
                                src={pancakeProject}
                                alt="website_image"
                                width="300px"
                            />
                            <div className={styles.cardText}>
                                <h5 className={styles.cardTitle}>
                                    Horse Care
                                </h5>
                                <p className={styles.cardParagraph}>
                                    I developed a Horse Care Professional
                                    marketplace using React, TypeScript, Shadcn
                                    UI, Stripe Payment gateway, Express.js,
                                    Auth0, and Supabase database, ensuring a
                                    robust platform for seamless services and
                                    transactions.
                                </p>
                                <div className={styles.btnCont}>
                                    <a
                                        href="https://github.com/DIWAKARKASHYAP/test-assignment"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.viewCode}
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href="https://test-assignment-i5mu.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.viewPage}
                                    >
                                        {/* <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "} */}
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;