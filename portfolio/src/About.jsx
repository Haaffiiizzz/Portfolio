import streak from "./assets/images/streak.png"
import React, { useState, useEffect } from "react";
import Skill from "./Skill.jsx"

const middleCircleSkills = [
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
    },
    {
        skill: "SQLAlchemy",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
        proficiency: "Intermediate"
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

  

function About() {

    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        const middleIcons  = document.querySelectorAll(".middleIcon");
        middleIcons.forEach((middleIcon) => {
            middleIcon.addEventListener('mouseenter', () => {
                
                middleIcons.forEach((icon) => {
                    icon.style.animationPlayState = 'paused';
        
                });
                
            });
        
            middleIcon.addEventListener('mouseleave', () => {
        
                middleIcons.forEach((icon) => {
                    icon.style.animationPlayState = "running";
                });

                
        
            });
        
        });
        return () => {
            middleIcons.forEach((middleIcon) => {
              middleIcon.removeEventListener("mouseenter", () => {});
              middleIcon.removeEventListener("mouseleave", () => {});
            });
          };
    }, []);

    // for outer icons
    useEffect(() => {
        const outerIcons  = document.querySelectorAll(".outerIcon");
        outerIcons.forEach((outerIcon) => {
            outerIcon.addEventListener('mouseenter', () => {
                
                outerIcons.forEach((icon) => {
                    icon.style.animationPlayState = 'paused';
        
                });

                
            });
        
            outerIcon.addEventListener('mouseleave', () => {
        
                outerIcons.forEach((icon) => {
                    icon.style.animationPlayState = "running";
                });
                
        
            });
        
        });
        return () => {
            outerIcons.forEach((outerIcon) => {
              outerIcon.removeEventListener("mouseenter", () => {});
              outerIcon.removeEventListener("mouseleave", () => {});
            });
          };
    }, []);


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




    return (
        <div id="about">
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>


            <h1 id="sectionHeader">About</h1>
            
            <div className="aboutSectionLeft">
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
                    {middleCircleSkills.map((icon, index, arr) => (
                        <img
                        key={index}
                        src={icon.src}
                        alt={icon.skill}
                        className="middleIcon"
                        style={{
                            transform: `translate(10vw) rotate(${(index / arr.length) * 360}deg) `,
                            animationDelay: `${(index / arr.length) * 20}s`,
                          }}
                        onMouseEnter={() => setHoveredSkill(icon)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        />
                    ))}
                    </div>

                <div id="outerCircle">
                    {outerCircleSkills.map((icon, index, arr) => (
                        <img
                        key={index}
                        src={icon.src}
                        alt={icon.skill}
                        className="outerIcon"
                        style={{
                            transform: `translate(17vw) rotate(${(index / arr.length) * 360}deg)`,
                            animationDelay: `${(index / arr.length) * 30}s`,
                            
                        }}
                        onMouseEnter={() => setHoveredSkill(icon)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        />
                    ))}
                </div>
            </div>           
                

            <div className="aboutSectionLeft">
                <h1 id="miniHeading"> GitHub Stats</h1>
                <object data="https://streak-stats.demolab.com?user=haaffiiizzz&theme=highcontrast&hide_border=False&type=svg" type="image/png" style={{width: "100%"}}>
                    <img src={streak} alt="GitHub Streak"/>
                </object>   
            </div>

            
           
        </div>
    )
}

export default About