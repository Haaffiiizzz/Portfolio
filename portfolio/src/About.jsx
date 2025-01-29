import React, { useState, useEffect, useRef } from "react";
import Skill from "./Skill.jsx"
import hero from "./assets/images/avatar.svg"


const middleCircleSkills = [
    {
        skill: "SQLAlchemy",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
        proficiency: "Intermediate",
        note: "SQLAlchemy has been my go-to ORM tool for building robust, scalable databases. I’ve used it extensively in projects like DealWatch, where I managed complex queries and ensured seamless integration with FastAPI."
    },
    {
        skill: "FastAPI",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        proficiency: "Advanced",
        note: "FastAPI has been an essential part of my development toolkit, especially for creating high-performance APIs like in Muktashif and DealWatch. Its speed and simplicity make it my favorite for backend development."
    },
    {
        skill: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        proficiency: "Advanced",
        note: "PostgreSQL is my trusted database choice for handling structured data. I’ve optimized queries and managed data efficiently for multiple projects, ensuring reliability and performance."
    },
    {
        skill: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        proficiency: "Advanced",
        note: "Version control with Git has been crucial for my collaboration and solo projects. It keeps my work organized and ensures I can track every change while working on complex systems."
    },
    {
        skill: "Postman",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        proficiency: "Advanced",
        note: "Postman has been indispensable for testing APIs. I rely on it to validate endpoints and debug issues, ensuring my projects are reliable and user-friendly."
    },
    {
        skill: "Selenium",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
        proficiency: "Advanced",
        note: "Selenium’s automation capabilities have helped me scrape data efficiently, like in DealWatch, where I used it to monitor shopping sites for real-time price changes."
    }
];

const outerCircleSkills = [
    {
        skill: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        proficiency: "Intermediate",
        note: "I enjoy using React for building intuitive, dynamic frontends. I’ve applied it in projects like this Portfolio website to create interactive user experiences that seamlessly connect with backends."
    },
    {
        skill: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        proficiency: "Intermediate",
        note: "JavaScript brings my web applications to life. Whether it's scripting for React or standalone features, it’s been vital for creating responsive, user-centric designs."
    },
    {
        skill: "Go",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
        proficiency: "Beginner",
        note: "Go is a language I’ve been exploring for its efficiency in building fast and scalable applications. It’s a new frontier I’m excited to master further."
    },
    {
        skill: "Heroku",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg",
        proficiency: "Intermediate",
        note: "Deploying projects to Heroku has streamlined my workflow. It’s my go-to for hosting web applications, ensuring accessibility and smooth performance."
    },
    {
        skill: "PyTorch",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        proficiency: "Beginner",
        note: "I’m currently using PyTorch to implement deep learning models in projects like Muktashif, where I'm training neural networks for complex audio-to-text processing tasks."
    },
    {
        skill: "OAuth",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg",
        proficiency: "Intermediate",
        note: "OAuth has been a key part of ensuring secure user authentication in my projects, enabling seamless integration with external services while protecting sensitive data."
    }
];

const mainSkill = [
    {
        skill: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        proficiency: "Advanced",
        note: "Python is the backbone of my development journey. From solving complex problems on LeetCode to building full-stack applications, it’s my most versatile and proficient skill."
    }
];


function About() {

    useEffect(() => {
        const middleIcons = document.querySelectorAll(".middleIcon");
        const outerIcons = document.querySelectorAll(".outerIcon");
    
        const pauseAnimation = (icons) => {
            icons.forEach((icon) => {
                icon.style.animationPlayState = "paused";
            });
        };
    
        const resumeAnimation = (icons) => {
            icons.forEach((icon) => {
                icon.style.animationPlayState = "running";
            });
        };
    
        
        middleIcons.forEach((icon) => {
            icon.addEventListener("mouseenter", () => {
                pauseAnimation(middleIcons);
                
            });
    
            icon.addEventListener("mouseleave", () => {
                resumeAnimation(middleIcons);
                
            });
        });
    
        
        outerIcons.forEach((icon) => {
            icon.addEventListener("mouseenter", () => {
                pauseAnimation(outerIcons);
            });
    
            icon.addEventListener("mouseleave", () => {
                resumeAnimation(outerIcons);
            });
        });
    
        return () => {
            
            middleIcons.forEach((icon) => {
                icon.removeEventListener("mouseenter", () => {});
                icon.removeEventListener("mouseleave", () => {});
            });
    
            outerIcons.forEach((icon) => {
                icon.removeEventListener("mouseenter", () => {});
                icon.removeEventListener("mouseleave", () => {});
            });
        };
    }, []);

    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [coordinates, setCoordinates] = useState([0, 0]);

    // code below to set skill icons to move or pause when hovered
    useEffect (() => {
        const centerSkill = document.querySelector(".centerSkill")
        const middleIcons  = document.querySelectorAll(".middleIcon")
        const outerIcons  = document.querySelectorAll(".outerIcon")

        centerSkill.addEventListener('mouseenter', () => {
            middleIcons.forEach((icon) => {
                icon.style.animationPlayState = "paused"
            }) 

            outerIcons.forEach((icon) => {
                icon.style.animationPlayState = "paused"
            }) 


        })

        centerSkill.addEventListener('mouseleave', () => {
            middleIcons.forEach((icon) => {
                icon.style.animationPlayState = "running"
            }) 

            outerIcons.forEach((icon) => {
                icon.style.animationPlayState = "running"
            }) 


        })

        return () => {
            centerSkill.removeEventListener("mouseenter", () => {})
            centerSkill.removeEventListener("mouseleave", () => {})
          };
    }, []);

    // code below to set skill card location when skill is hovered

    useEffect(() => {
        const div = document.getElementById('skillsContainer');

        const handleMouseEnter = (event) => {
            const offsetX = event.offsetX; 
            const offsetY = event.offsetY;

            setCoordinates([offsetX, offsetY]);
        };

            div.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            div.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    //  code below to let about info only move when in view
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === aboutRef.current) {
                            entry.target.classList.add("moveRight");
                        } else if (entry.target === skillsRef.current) {
                            entry.target.classList.add("moveLeft");
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (skillsRef.current) observer.unobserve(skillsRef.current);
        };
    }, []);

    return (
        <div id="about">

            {/* <h1 id="sectionHeader">About</h1> */}
            
            
                <div className="aboutSection" ref={aboutRef}>
                    <img src={hero} alt="hero" />
                    I am an Applied Computer Science student at the University of Winnipeg. I love solving problems and 
                    picking my brain. Whether taking on new projects or
                    solving DSA problems on LeetCode, I love to challenge myself. For fun, I love to play Call of Duty and watch
                    crime or mystery shows.
                </div>

                
                <div id="skillsContainer" ref={skillsRef}>

                    {hoveredSkill && (
                            <Skill
                                skillName={hoveredSkill.skill}
                                note={hoveredSkill.note}
                                coordinates={coordinates}
                            />
                        )}
                
                    <div id="centerIcon">
                        {mainSkill.map((icon, index) => (
                            <img
                            key={index}
                            src={icon.src}
                            alt={icon.skill}
                            className="centerSkill"
                            onMouseEnter={() => setHoveredSkill(icon)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            />

                        ))}
                        
                    </div>

                    
                    <div id="middleCircle">
                            {middleCircleSkills.map((icon, index, arr) => {

                                const angle = (index / arr.length) * 360;
                                const isSmallScreen = window.innerWidth <= 730;

                                const transformStyle = isSmallScreen
                                    ? `translate(${15 * Math.cos((angle * Math.PI) / 180)}vw, ${15 * Math.sin((angle * Math.PI) / 180)}vw)`
                                    : `translate(10vw) rotate(${angle}deg)`;

                                return (
                                    <img
                                        key={index}
                                        src={icon.src}
                                        alt={icon.skill}
                                        className="middleIcon"
                                        style={{
                                            transform: transformStyle,
                                            animation: isSmallScreen ? "none" : `revolveClockWise 20s linear infinite`,
                                            animationDelay: isSmallScreen ? "0s" :`${(index / arr.length) * 20}s`,
                                        }}
                                        onMouseEnter={() => setHoveredSkill(icon)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    />
                                );
                            })}
                        </div>

                    <div id="outerCircle">
                        {outerCircleSkills.map((icon, index, arr) => {
                            const angle = (index / arr.length) * 360;
                            const isSmallScreen = window.innerWidth <= 730;

                            const transformStyle = isSmallScreen
                                ? `translate(${30 * Math.cos((angle * Math.PI) / 180)}vw, ${30 * Math.sin((angle * Math.PI) / 180)}vw)`
                                : `translate(17vw) rotate(${angle}deg)`;
                        
                            return (
                                <img
                                key={index}
                                src={icon.src}
                                alt={icon.skill}
                                className="outerIcon"
                                style={{
                                    transform: transformStyle,
                                    animation: isSmallScreen ? "none" : `revolveAntiClockWise 30s linear infinite`,
                                    animationDelay: isSmallScreen ? "0s" :`${(index / arr.length) * 30}s`,
                                    
                                }}
                                onMouseEnter={() => setHoveredSkill(icon)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                />
                            );
                        })}
                    </div>
                    
                </div>   
                     
           
        </div>
    )
}

export default About