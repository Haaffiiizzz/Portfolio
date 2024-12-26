import Nav from "./Navigation.jsx"
import Footer from "./Footer.jsx"
import Intro from "./Intro.jsx"
import Project from "./Projects.jsx"
import thumbnail4 from "./assets/images/thumbnail_4.png"

function App() {
  return (
    <>
      <Nav/>
      <main>
        <Intro/>
        <div id="projects">
          <Project
          projectName="Tadhkir"
          projectDescription="Tadhkir is a Prayer Reminder and
           Tracker app designed to help users stay consistent 
          with their Salah. It provides timely reminders a few 
          minutes before each prayer, tracks completed prayers
           for accountability, and ensures accurate prayer 
           times based on your location. With a clean and 
           intuitive interface, Tadhkir makes managing your 
           daily prayers simple and seamless."
          imageSrc={thumbnail4}
          altText="Tadhkir"
          projectLink="https://github.com/Haaffiiizzz/Tadhkir"/>

          <Project
          projectName="Muktashif"
          projectDescription="Hello again"/>
        </div>
       
        
      </main>
      
      <Footer/>
   
    </>
    
   
  )
 
}

export default App;
