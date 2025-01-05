
function Skill({skillName, Proficiency}){
    
    return (
        <div id="skillCard">
            <h1>{skillName}</h1>
            <h1>Proficiency:</h1>
            <p>{Proficiency}</p>
            <h1>Experience</h1>
        </div>
    )
}

export default Skill