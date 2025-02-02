import LinkedIn from "./assets/images/LinkedIn.png";
import { useEffect, useRef } from "react";

const Connect = () => {
    const connectRefs = useRef([]);

    const connects = [
        {
            id: 1,
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/haaffiiizzz",
            align: "left",
            image: LinkedIn
        },
        {
            id: 2,
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/haaffiiizzz",
            align: "right",
            image: LinkedIn
        },
        {
            id: 3,
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/haaffiiizzz",
            align: "left",
            image: LinkedIn
        },
        {
            id: 4,
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/haaffiiizzz",
            align: "right",
            image: LinkedIn
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (window.innerWidth > 730) {
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

        connectRefs.current.forEach((el) => el && observer.observe(el));

        return () => {
            connectRefs.current.forEach((el) => el && observer.unobserve(el));
        };
    }, []);

    return (
        <div id="connects">
            {connects.map((connect, index) => (
                <div
                    key={connect.id}
                    className="connect"
                    align={connect.align}
                    ref={(el) => (connectRefs.current[index] = el)}
                >
                    <a href={connect.link} target="_blank" rel="noreferrer">
                        <img src={connect.image} alt={connect.platform} />
                        <p>{connect.platform}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Connect;
