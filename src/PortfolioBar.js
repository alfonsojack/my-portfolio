import './PortfolioBar.css'
import Project from './Project';
import matthews1 from './matthews1.png';
import matthews2 from './matthews2.png';
import matthews3 from './matthews3.png';
import matthews4 from './matthews4.png';
import coffeeScreenshot1 from './coffeeScreenshot1.png';
import coffeeScreenshot2 from './coffeeScreenshot1.png';
import coffeeScreenshot3 from './coffeeScreenshot1.png';

function PortfolioBar () {
  const matthewsSlides = [matthews1, matthews2, matthews3, matthews4];
  const coffeeSlides = [coffeeScreenshot1, coffeeScreenshot2, coffeeScreenshot3]
  return (
    <section className='PortfolioBar'>
      <Project slides={matthewsSlides} title="Matthews Poetry Generator"/>
      <Project slides={coffeeSlides} title="Cap Hill Coffee Shop Directory"/>
    </section>
  )
}

export default PortfolioBar