
function Skill({skillName, Proficiency, coordinates}){

    return (
        <div id="skillCard" style={{top: `${coordinates[1]}%`, right: `${coordinates[0]}%`}}>
            <h1>{skillName}</h1>
            <h1>Proficiency:</h1>
            <p>{Proficiency}</p>
            <h1>Experience</h1>
        </div>
    )
}

export default Skill