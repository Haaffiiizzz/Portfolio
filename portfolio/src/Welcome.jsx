

function Welcome() {
    const resumeLink = "https://docs.google.com/document/d/1iT8PucOE4N3lGe7YkbRKnghtVT6V4CFiIz6xUIlcBdc/edit?usp=sharing"
    return (
        
        <div id="welcome">
            <div className="moveLeft">(Website Still Under Construction!)</div>
            <div className="moveLeft">Hello, I am Abdulhafiz.</div>
            <div className="moveRight">An Aspiring Software Engineer.</div>
            <div><a href="#about" className="appear">Learn More About Me</a></div>
            <div id="smallWelcomeLink">
                <a href={resumeLink} target="_blank" className="appearLate">View My Resume</a>
                <a href="#" className="appearLate">Contact Me</a>
            </div>

        </div>
        
    )
}

export default Welcome