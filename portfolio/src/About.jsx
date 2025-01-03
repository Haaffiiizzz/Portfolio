import backgroundVid from "./assets/videos/aboutBack.mp4"
import streak from "./assets/images/streak.png"
import { useEffect } from "react";

const middleCircleSkills = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg"

  ];
  
const outerCircleSkills = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg"
  ];




  

function About() {

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


    return (
        <div id="about">
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            {/* <video autoPlay loop muted playsInline preload="auto" onLoadedMetadata={(e) => (e.target.playbackRate = 0.4)}>
                <source src={backgroundVid} type="video/mp4"/>
            </video> */}

            <h1 id="sectionHeader">About</h1>
            
            <div className="aboutSectionLeft">
                I am an Applied Computer Science student at the University of Winnipeg. I love solving problems and 
                picking my brain. Whether taking on new projects or
                solving LeetCode problems, I love to challenge myself. For fun, I love to play Call of Duty and watch
                crime or mystery shows.
            </div>

            {/* <div id="skills">
                {
                    skillIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} style={{ "--angle": `${(index / skillIcons.length) * 360}deg` }} className="skillIcon"/>
                ))}

            </div> */}

            <div id="skillsContainer">
            
                <div id="centerIcon">
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    alt="Python"
                    className="centerSkill"
                    />
                </div>

                
                <div id="middleCircle">
                    {middleCircleSkills.map((icon, index, arr) => (
                        <img
                        key={index}
                        src={icon}
                        alt={`Middle Skill ${index + 1}`}
                        className="middleIcon"
                        style={{
                            transform: `translate(10vw) rotate(${(index / arr.length) * 360}deg) `,
                            animationDelay: `${(index / arr.length) * 20}s`,
                          }}
                        
                        />
                    ))}
                    </div>

                <div id="outerCircle">
                    {outerCircleSkills.map((icon, index, arr) => (
                        <img
                        key={index}
                        src={icon}
                        alt={`Outer Skill ${index + 1}`}
                        className="outerIcon"
                        style={{
                            transform: `translate(17vw) rotate(${(index / arr.length) * 360}deg)`,
                            animationDelay: `${(index / arr.length) * 30}s`,
                            
                        }}
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