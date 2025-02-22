

function Welcome() {
    const resumeLink = "https://drive.google.com/file/d/1gkGE-2gH2tBx3F2YxZ1_zxJS3k0lJi98/view?usp=sharing"
    return (
        
        <div id="welcome">
            <div className="moveLeft">Hello, I am Abdulhafiz.</div>
            <div className="moveRight">An Aspiring Software Engineer.</div>
            <div><a href="#about" className="appear">Learn More About Me</a></div>
            <div id="smallWelcomeLink">
                <a href={resumeLink} target="_blank" className="appearLate">View My Resume</a>
                <a href="#connects" className="appearLate">Contact Me</a>
            </div>

        </div>
        
    )
}

export default Welcome