import './Home.css'
import PortfolioBar from './PortfolioBar'
import Statement from './Statement'

function Home () {
  return (
    <section className='Home'>
      <Statement/>
      <PortfolioBar/>
    </section>
  )
}

export default Home