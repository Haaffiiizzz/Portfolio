import Nav from "./Navigation.jsx"
import Footer from "./Footer.jsx"
import Intro from "./Intro.jsx"
import Project from "./Projects.jsx"

function App() {
  return (
    <>
      <Nav/>
      <main>
        <Intro/>
        <div id="projects">
          <Project
          projectName="Tadhkir"
          projectDescription="Hello world"/>
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
