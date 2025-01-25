
function Skill({note, coordinates}){

    return (
        <div id="skillCard" className="appearSkillCard" style={{left: `${coordinates[0]}px`, top: `${coordinates[1]}px`, transform: "translate(-50%, -100%)"}}>
            <p>{note}</p>  
        </div>
    )
}

export default Skill