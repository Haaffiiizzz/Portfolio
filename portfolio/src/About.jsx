import React, { useState, useEffect, useRef } from "react";
import Skill from "./Skill.jsx"
import hero from "./assets/images/avatar.svg"


const middleCircleSkills = [

    {
        skill: "SQLAlchemy",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
        proficiency: "Intermediate"
    },
    
    {
        skill: "FastAPI",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        proficiency: "Advanced"
    },
    {
        skill: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        proficiency: "Advanced"
    },
    {
        skill: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        proficiency: "Advanced"
    },
    {
        skill: "Postman",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        proficiency: "Advanced"
    },
    {
        skill: "Selenium",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
        proficiency: "Advanced"
    }
];

const outerCircleSkills = [
    {
        skill: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        proficiency: "Intermediate"
    },
    {
        skill: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        proficiency: "Intermediate"
    },
    {
        skill: "Go",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
        proficiency: "Beginner"
    },
    {
        skill: "Heroku",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg",
        proficiency: "Intermediate"
    },
    {
        skill: "PyTorch",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        proficiency: "Beginner"
    },
    {
        skill: "OAuth",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg",
        proficiency: "Intermediate"
    }
];

const mainSkill = [{
    skill: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    proficiency: "Advanced"
}]

// note: fix hopver on imavge instead of div

function About() {

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

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("moveRight"); 
            }
            });
        },
        { threshold: 0.5 }
        );

        if (aboutRef.current) {
        observer.observe(aboutRef.current);
        }

        return () => {
        if (aboutRef.current) {
            observer.unobserve(aboutRef.current);
        }
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

                
                <div id="skillsContainer">

                    {hoveredSkill && (
                            <Skill
                                skillName={hoveredSkill.skill}
                                Proficiency={hoveredSkill.proficiency}
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
                
                     
                

            {/* <div className="aboutSectionLeft">
                <h1 id="miniHeading"> GitHub Stats</h1>
                <object data="https://streak-stats.demolab.com?user=haaffiiizzz&theme=highcontrast&hide_border=False&type=svg" type="image/png" style={{width: "100%"}}>
                    <img src={streak} alt="GitHub Streak"/>
                </object>   
            </div> */}

            
           
        </div>
    )
}

export default About