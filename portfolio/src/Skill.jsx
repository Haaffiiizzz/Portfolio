
function Skill({skillName, Proficiency, coordinates}){

    return (
        <div id="skillCard" className="appearSkillCard" style={{left: `${coordinates[0]}px`, top: `${coordinates[1]}px`, transform: "translate(-50%, -100%)"}}>
            <h1>{skillName}</h1>
            <h1>Proficiency:</h1>
            <p>{Proficiency}</p>
            <h1>Experience</h1>
        </div>
    )
}

export default Skill