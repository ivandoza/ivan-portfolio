import React, { useEffect } from "react";
import styles from './Projects.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import pancakeProject from "../../assets/pancakeswap.png";
import BackgroundAnimation from "../Home/Background/BackgroundAnimation";
import Button from "../Buttons/Button";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className={styles.projects}>
            {/* <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div> */}
        <BackgroundAnimation className={styles.fondo} />
            <div className={styles.titleCont}>
                <h1 className={styles.title}>
                        Some Projects in Web Development
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
                                    PancakeSwap
                                </h5>
                                <div className={styles.tech}>
                                    <span className={styles.techItem} style={{
                                        color: "#76a9fa", borderColor: "#76a9fa"
                                    }}>
                                        React
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#e3a008", borderColor: "#e3a008"
                                    }}>
                                        JavaScript
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#8da2fb", borderColor: "#8da2fb"
                                    }}>
                                        TypeScript
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#FF8080", borderColor: "#FF8080"
                                    }}>
                                        Sass
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#FFB43A", borderColor: "#FFB43A"
                                    }}>
                                        ETH Blockchain
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#AAD2E8", borderColor: "#AAD2E8"
                                    }}>
                                        Web3.js
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#279FE3", borderColor: "#279FE3"
                                    }}>
                                        Swiper.js
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#E32727", borderColor: "#E32727"
                                    }}>
                                        Git
                                    </span>
                                </div>
                                <p className={styles.cardParagraph}>
                                    I developed a Horse Care Professional
                                    marketplace using React, TypeScript, Shadcn
                                    UI, Stripe Payment gateway, Express.js,
                                    Auth0, and Supabase database, ensuring a
                                    robust platform for seamless services and
                                    transactions.
                                </p>
                                <div className={styles.btnCont}>
                                    <Button isBlack texto="See Code" icon={<FaGithub />} link={"https://github.com/fs4-equipo1/pancake-swap"}/>
                                    <Button isWeb texto="View Web" icon={<TbExternalLink />} link={"https://pancake-swap-eta.vercel.app/"} />
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
                                    PancakeSwap
                                </h5>
                                <div className={styles.tech}>
                                    <span className={styles.techItem} style={{
                                        color: "#76a9fa", borderColor: "#76a9fa"
                                    }}>
                                        React
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#e3a008", borderColor: "#e3a008"
                                    }}>
                                        JavaScript
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#8da2fb", borderColor: "#8da2fb"
                                    }}>
                                        TypeScript
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#FF8080", borderColor: "#FF8080"
                                    }}>
                                        Sass
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#FFB43A", borderColor: "#FFB43A"
                                    }}>
                                        ETH Blockchain
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#AAD2E8", borderColor: "#AAD2E8"
                                    }}>
                                        Web3.js
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#279FE3", borderColor: "#279FE3"
                                    }}>
                                        Swiper.js
                                    </span>
                                    <span className={styles.techItem} style={{
                                        color: "#E32727", borderColor: "#E32727"
                                    }}>
                                        Git
                                    </span>
                                </div>
                                <p className={styles.cardParagraph}>
                                    I developed a Horse Care Professional
                                    marketplace using React, TypeScript, Shadcn
                                    UI, Stripe Payment gateway, Express.js,
                                    Auth0, and Supabase database, ensuring a
                                    robust platform for seamless services and
                                    transactions.
                                </p>
                                <div className={styles.btnCont}>
                                    <Button isBlack texto="See Code" icon={<FaGithub />} link={"https://github.com/fs4-equipo1/pancake-swap"} isPortfolio />
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