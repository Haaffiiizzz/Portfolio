import PortfolioImage from "./assets/images/PortfolioImage.png"
import JobApp from "./assets/images/JobApp.png"
import ItemsAPI from "./assets/images/ItemsAPI.png"
import OpenAI from "./assets/images/OpenAI.svg"
import DealWatch from "./assets/images/DealWatch.png"
import { useEffect, useRef } from "react";

const Projects = () => {
    const projectRefs = useRef([]);

    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "My personal portfolio showcasing my projects and skills using React.js",
            repo: "https://www.github.com/haaffiiizzz/portfolio",
            live: "#",
            align: "left",
            image: PortfolioImage,
            skills: ["react", "javascript", "html5", "css3", "github"]
        },
        {
            id: 2,
            title: "DealWatch",
            description: "A web app that lets users easily find products from different e-commerce platforms and get recommendations on the best deals.",
            repo: "https://www.github.com/haaffiiizzz/dealwatch",
            live: "http://dealwatch.abdulhafizdada.com/docs",
            align: "right",
            image: DealWatch,
            skills: ["python", "selenium", "openai", "fastapi", "react", "heroku", "git"]
        },
        {
            id: 3,
            title: "Job Tracker",
            description: "Working on a webapp that tracks job applications and interview progress using Gmail and Gemini APIs.",
            repo: "https://www.github.com/haaffiiizzz/JobApp_Tracker",
            live: "#",
            align: "left",
            image: JobApp,
            skills: ["python", "git", "fastapi", "github"]
        },
        {
            id: 4,
            title: "ItemsAPI",
            description: "A FastAPI based RESTful API containing item prices from different countries",
            repo: "https://github.com/Haaffiiizzz/ItemsAPI",
            live: "https://itemsapi.abdulhafizdada.com/docs#/",
            align: "right",
            image: ItemsAPI,
            skills: ["fastapi", "python", "postgresql", "supabase", "github"]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (window.innerWidth > 730){
                            if (entry.target.getAttribute("align") === "left") {
                                entry.target.classList.add("moveRight");
                            } else {
                                entry.target.classList.add("moveLeft");
                            }
                        } else {
                            entry.target.classList.add("appear");
                        }
                        
                        
                    }
                });
            },
            { threshold: 0.3 }
        );

        projectRefs.current.forEach((el) => el && observer.observe(el));

        return () => {
            projectRefs.current.forEach((el) => el && observer.unobserve(el));
        };
    }, []);

    return (
        <div id="projects">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className="project"
                    align={project.align}
                    ref={(el) => (projectRefs.current[index] = el)}
                >
                    <img src={project.image} alt={`${project.title}`} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.repo} target="_blank" rel="noreferrer">Repo</a>
                    <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                    <div id="projectSkill">
                        {project.skills.map((skill) => (
                            <img
                                key={skill}
                                src={skill === "openai"
                                    ? OpenAI
                                    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`
                            }
                                alt={skill}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
