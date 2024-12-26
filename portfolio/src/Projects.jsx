
function Project({projectName, projectDescription, imageSrc, altText, projectLink}){
    return (
        <div className="project">
            <img src={imageSrc} alt={altText}/>
            <h2>{projectName}</h2>
            <a href={projectLink}><p>{projectDescription}</p></a>
        </div>
    )
}

export default Project

