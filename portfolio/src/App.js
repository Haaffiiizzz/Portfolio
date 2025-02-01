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
      <h1 id="sectionHeader">About</h1>
      <About/>
       <h1 id="sectionHeader">Projects</h1> 
      <Projects/>
      <h1 id="sectionHeader">Connect</h1>
      <Connect/>
      
      <Footer/>
   
    </>
    
   
  )
 
}

export default App;
