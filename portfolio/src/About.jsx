import backgroundVid from "./assets/videos/aboutBack.mp4"
import streak from "./assets/images/streak.png"

function About() {
    return (
        <div id="about">

            <video autoPlay loop muted playsInline preload="auto" onLoadedMetadata={(e) => (e.target.playbackRate = 0.4)}>
                <source src={backgroundVid} type="video/mp4"/>
            </video>

            <h1 id="sectionHeader">About</h1>
            
            <div id="highlight">
                I am an Applied Computer Science student at the University of Winnipeg. I love solving problems and 
                picking my brain. Whether taking on new projects or
                solving LeetCode problems, I love to challenge myself. For fun, I love to play Call of Duty and watch
                crime or mystery shows.
            </div>

            <div id="streak">
                <h1 id="miniHeading"> GitHub Stats</h1>
                <object data="https://streak-stats.demolab.com?user=haaffiiizzz&theme=highcontrast&hide_border=False&type=png" type="image/png" style={{width: "100%"}}>
                    <img src={streak} alt="GitHub Streak"/>
                </object>   
            </div>

            <div id="skills">


            </div>
           
        </div>
    )
}

export default About