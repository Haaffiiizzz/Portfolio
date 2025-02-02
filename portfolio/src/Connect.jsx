import { ReactComponent as LinkedIn } from "./assets/images/LinkedIn.svg";
import { ReactComponent as GitHub } from "./assets/images/GitHub.svg";
import { useEffect, useRef } from "react";

const Connect = () => {
    const connectRefs = useRef([]);

    const connects = [
        {
            id: 1,
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/haaffiiizzz",
            align: "left",
            icon: <LinkedIn />
        },
        {
            id: 2,
            platform: "GitHub",
            link: "https://www.github.com/haaffiiizzz",
            align: "right",
            icon: <GitHub />
        },
        {
            id: 3,
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/haaffiiizzz",
            align: "left",
            icon: <LinkedIn />
        },
        {
            id: 4,
            platform: "GitHub",
            link: "https://www.github.com/haaffiiizzz",
            align: "right",
            icon: <GitHub />
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
                        {connect.icon}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Connect;
