import './Statement.css'
import { Link } from 'react-router-dom'

function Statement () {
  return (
    <div className='img-overlay'>
    <div className='Statement'>
      <div className='intro'>
      <h1 className='name'>Jack Alfonso</h1>
      <h2 className='dev'>Frontend Developer</h2>
      </div>
      <div className='summary'>
      <p >I'm a creative problem solver with a passion for continuous learning and collaboration.</p>
      {/* <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-mail"><path className="mail-primary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/><path className="mail-secondary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/></svg>
        <p className='label'>Contact Me</p>
      </button> */}
      </div>
      <div className='stack'>  
      <div className='scroll-wrapper'>
        <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"  /></a>  
        <a href="https://www.w3schools.com/css/" target="_blank"><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="CSS3" /></a>  
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"  /></a>  
        <a href="https://www.javascript.com/" target="_blank"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="JavaScript"  /></a>  
        <a href="https://www.figma.com/" target="_blank"><img  src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Figma" /></a>  
        <a href="https://expressjs.com/" target="_blank"><img  src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" /></a>  
        <a href="https://www.postgresql.org/" target="_blank"><img  src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" /></a>  
        </div>
      </div>  
    </div>
    </div>
  )
}

export default Statement