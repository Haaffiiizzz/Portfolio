
function Project({projectName, projectDescription, imageSrc, altText, projectLink}){
    return (
        
        <div className="project">
            <a href={projectLink} target="_blank">
                <img src={imageSrc} alt={altText}/>
                <h2>{projectName}</h2>
                <p>{projectDescription}</p>
            </a>
        </div>
        
    )
}

export default Project

