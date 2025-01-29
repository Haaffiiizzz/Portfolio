import PortfolioImage from "./assets/images/PortfolioImage.png"
import { useEffect, useRef } from "react";

const Projects = () => {
    const projectRefs = useRef([]);

    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A personal portfolio showcasing my projects and skills.",
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
            description: "An app that tracks job applications and interview progress.",
            repo: "https://www.github.com/haaffiiizzz/JobApp_Tracker",
            live: "#",
            align: "left",
            image: PortfolioImage,
            skills: ["python", "git", "fastapi", "github"]
        },
        {
            id: 4,
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
                        if (entry.target.getAttribute("align") === "left") {
                            entry.target.classList.add("moveRight");
                        } else {
                            entry.target.classList.add("moveLeft");
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
