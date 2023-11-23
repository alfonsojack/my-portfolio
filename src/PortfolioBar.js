import './PortfolioBar.css'
import Project from './Project';
import matthews1 from './matthews1.png';
import matthews2 from './matthews2.png';
import matthews3 from './matthews3.png';
import matthews4 from './matthews4.png';
import coffeeScreenshot1 from './coffeeScreenshot1.png';
import coffeeScreenshot2 from './coffeeScreenshot2.png';
import coffeeScreenshot3 from './coffeeScreenshot3.png';
import coffeeScreenshot4 from './coffeeScreenshot4.png';
import rancid1 from './rancid1.png'
import rancid2 from './rancid2.png'
import rancid3 from './rancid3.png'
import rancid4 from './rancid4.png'

function PortfolioBar () {
  const projects = [
    {
      title: 'Matthews Poetry Generator',
      slides: [matthews1, matthews2, matthews3, matthews4], 
      summary: "Matthews allows users to create new poetry by combining existing poems. They can search through a poetry database and combine a poem of their choosing with another poem of equal length or they can click a button that mixes together a random assortment of poems in the database.",
      stack: ['React', 'React Router', 'HTML', 'CSS', 'Github Issues', 'Cypress E2E Testing', 'Vercel'],
      githubRepo: 'https://github.com/alfonsojack/matthews',
      deployLink: 'https://matthews-two.vercel.app/'
    }, 
    {
      title: 'Full Stack Coffee Shop Ratings',
      slides: [coffeeScreenshot1, coffeeScreenshot2, coffeeScreenshot3, coffeeScreenshot4],
      summary: "For this project, my team and I built a database storing ratings and relevant information for coffee in the Denver area. The frontend application we built allows users to click through coffee shops, view their information, and rate them accordingly.",
      stack: ['Knex', 'Express', 'PostgreSQL', 'React', 'React Router', 'HTML', 'CSS', 'Github Issues', 'Cypress E2E Testing', 'Vercel'],
      githubRepo: 'https://github.com/alfonsojack/caphill-coffee',
      deployLink: 'https://caphill-coffee-brown.vercel.app/'
    },
    {
      title: 'Rancid Tomatillos Movie Directory', 
      slides: [rancid1, rancid2, rancid3, rancid4],
      summary: 'This was my first project transitioning from vanilla JavaScript to React.js. Users can navigate through a directory of movies, view details on a separate page, and sort through the movies by rating.',
      stack: ['React', 'React Router', 'HTML', 'CSS', 'Github Issues', 'Cypress E2E Testing', 'Vercel'],
      githubRepo: 'https://github.com/alfonsojack/Rancid_Tomatillos',
      deployLink: 'https://rancid-tomatillos-mu.vercel.app/'
    }
  ]

  return (
    <section className='PortfolioBar'>
      {projects.map((project) => (
        <Project title={project.title} summary={project.summary} slides={project.slides} stack={project.stack} githubRepo={project.githubRepo} deployLink={project.deployLink}/>
      ))}
    </section>
  )
}

export default PortfolioBar