import './Statement.css'
import { Link } from 'react-router-dom'
import Contact from './Contact.js'
import jack from './Jack-Alfonso-headshot.jpeg'

function Statement () {
  return (
    <div className='img-overlay'>
    <div className='Statement'>
      <div className='intro'>
      <h1 className='name'>Jack Alfonso</h1>
      <h2 className='dev'>Frontend Developer</h2>
      <div className='summary'>
      <p >I'm a creative problem solver with a passion for continuous learning and collaboration.</p>
      </div>
      <div>
        <img className='headshot' src={jack}></img>
      </div>
      <div className='buttoncont'>
        <Link className='a' id='minor' to='https://docs.google.com/document/d/1cRiINs9tj3WW0LbQe9Zp8kHi4L_X-Qas6o2lbzuFcqI/edit?usp=sharing' target="_blank" rel="noopener noreferrer"><p className='p'>Resume</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-user-add"><path class="linkprimary" d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z"/><polygon class="linkprimary" points="14 2 20 8 14 8"/></svg></Link>
        <Link className='a' to="mailto:jonathankalfonso@gmail.com"><p className='p'>Contact Me</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-mail"><path className="mailprimary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/><path className="mailprimary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/></svg></Link>
        <Link className='a'id='minor' to='https://www.linkedin.com/in/jonathan-jack-alfonso/' target="_blank" rel="noopener noreferrer"><p className='p'>LinkedIn</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-user-add"><path className="linkprimary" d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><path className="linkprimary" d="M17 9V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2zm-1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/></svg></Link>
      </div>
      {/* <div className='tech'>
        <div className='column'>
        <a href="https://reactjs.org/" target="_blank"><img className='img' src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"  /></a>  
        <a href="https://www.w3schools.com/css/" target="_blank"><img className='img' src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="CSS3" /></a>  
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img className='img' src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"  /></a>  

        </div>
        <div className='column'>
        <a href="https://www.figma.com/" target="_blank"><img  className='img'  src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Figma" /></a>  
        <a href="https://expressjs.com/" target="_blank"><img className='img'  src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" /></a>  
        <a href="https://www.postgresql.org/" target="_blank"><img  className='img' src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" /></a> 
        </div>      
      </div> */}
      </div>
      {/* <div className='summary'>
      <p >I'm a creative problem solver with a passion for continuous learning and collaboration.</p>
      </div> */}
      <div className='stack'>  
      <div className='scroll-wrapper'>
        <a href="https://reactjs.org/" target="_blank"><img className='img' src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"  /></a>  
        <a href="https://www.w3schools.com/css/" target="_blank"><img className='img' src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="CSS3" /></a>  
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img className='img' src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"  /></a>  
        <a href="https://www.javascript.com/" target="_blank"><img className='img'src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="JavaScript"  /></a>  
        <a href="https://www.figma.com/" target="_blank"><img className='img' src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Figma" /></a>  
        <a href="https://expressjs.com/" target="_blank"><img className='img' src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" /></a>  
        <a href="https://www.javascript.com/" target="_blank"><img className='img'src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="JavaScript"  /></a>  
        <a href="https://www.postgresql.org/" target="_blank"><img  className='img'src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" /></a>  
        </div>
      </div>  
    </div>
    </div>
  )
}

export default Statement