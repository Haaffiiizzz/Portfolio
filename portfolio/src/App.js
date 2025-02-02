import Nav from "./Navigation.jsx"
import Footer from "./Footer.jsx"
import About from "./About.jsx"
import Welcome from "./Welcome.jsx"
import Projects from "./Projects.jsx"
import Connect from "./Connect.jsx"

function App() {
  return (
    <>
      <Welcome/>
      <Nav/>

      <div id="sectionHeader"><h1>About</h1></div>
      <About/>

      <div id="sectionHeader"><h1>Projects</h1></div>
      <Projects/>
      
      <div id="sectionHeader"><h1>Connect</h1></div>
      <Connect/>
      
      <Footer/>
   
    </>
    
   
  )
 
}

export default App;
