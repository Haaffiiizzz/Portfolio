import PortfolioImage from "./assets/images/PortfolioImage.png"
import JobAPP from "./assets/images/JobAPP.svg"
import ItemsAPI from "./assets/images/ItemsAPI.png"
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
            title: "Tadhkir Prayer App",
            description: "A prayer tracking app for reminders and accountability.",
            repo: "https://www.github.com/haaffiiizzz/tadhkir",
            live: "#",
            align: "right",
            image: PortfolioImage,
            skills: ["react", "nodejs", "github"]
        },
        {
            id: 3,
            title: "Job Tracker",
            description: "Working on a webapp that tracks job applications and interview progress using Gmail and Gemini APIs.",
            repo: "https://www.github.com/haaffiiizzz/JobApp_Tracker",
            live: "#",
            align: "left",
            image: JobAPP,
            skills: ["python", "git", "fastapi", "github"]
        },
        {
            id: 4,
            title: "ItemsAPI",
            description: "A FastAPI based RESTful API containing item prices from different countries",
            repo: "#",
            live: "#",
            align: "right",
            image: ItemsAPI,
            skills: ["fastapi", "python", "postgresql", "supabase", "github"]
        },
        {
            id: 5,
            title: "Muktashif",
            description: "A deep-learning model that can recognize verses of Quranic recitation from audio",
            repo: "#",
            live: "#",
            align: "right",
            image: PortfolioImage,
            skills: ["fastapi", "python", "tensorflow", "pytorch", "github"]
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
                    <img src={project.image} alt={`${project.title} Image`} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.repo}>Repo</a>
                    <a href={project.live}>Live</a>
                    <div id="projectSkill">
                        {project.skills.map((skill) => (
                            <img
                                key={skill}
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`}
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
