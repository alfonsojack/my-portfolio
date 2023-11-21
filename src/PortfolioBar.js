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
  const matthewsSlides = [matthews1, matthews2, matthews3, matthews4];
  const coffeeSlides = [coffeeScreenshot1, coffeeScreenshot2, coffeeScreenshot3, coffeeScreenshot4]
  const rancidSlides = [rancid1, rancid2, rancid3, rancid4]


  return (
    <section className='PortfolioBar'>
      <Project slides={matthewsSlides} title="Matthews Poetry Generator"/>
      <Project slides={coffeeSlides} title="Full Stack Coffee Shop Ratings"/>
      <Project slides={rancidSlides} title="Rancid Tomatillos Movie Directory"/>
    </section>
  )
}

export default PortfolioBar