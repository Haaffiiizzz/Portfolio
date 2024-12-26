import Nav from "./Navigation.jsx"
import Footer from "./Footer.jsx"
import Intro from "./Intro.jsx"
import Project from "./Projects.jsx"
import thumbnail4 from "./assets/images/thumbnail_4.png"
import thumbnail5 from "./assets/images/thumbnail_5.png"
import thumbnail3 from "./assets/images/thumbnail_3.png"

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
            imageSrc={thumbnail3}
            altText="Tadhkir"
            projectLink="https://github.com/Haaffiiizzz/Tadhkir"/>

          <Project
            projectName="Muktashif"
            projectDescription="This app leverages Machine Learning
            to identify the verse and Surah of a Qur'an recitation 
            from an audio file. It aims to assist users in easily 
            discovering and navigating Qur'anic content through 
            audio recognition."
            imageSrc={thumbnail4}
            altText="Muktashif"
            projectLink="https://github.com/Haaffiiizzz/Muktashif"/>

          <Project
            projectName="DealWatch"
            projectDescription="A website that extracts product details 
            from Amazon and Best Buy, including support for Amazon wishlists
             and tracking price changes for users. Built with FastAPI, 
             Selenium, and PostgreSQL, this project provides a comprehensive
              solution for tracking and managing product information, showcasing
               expertise in RESTful API development, web scraping, and data tracking."
            imageSrc={thumbnail5}
            altText="Dealwatch"
            projectLink="https://github.com/Haaffiiizzz/DealWatch"/>
        </div>
       
      </main>
      
      <Footer/>
   
    </>
    
   
  )
 
}

export default App;
