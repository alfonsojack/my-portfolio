import './Project.css'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';



function Project({slides, title, summary, githubRepo, deployLink, stack}) {
  const [index, setIndex] = useState(0);
  const [moreInfo, setMoreInfo] = useState(false);
  const timeoutRef = useRef(null);

  // const joinedStack = stack.join(, )

  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // const handleMoreInfoClick = () => {
  //   setMoreInfo(true);
  // };

  const handleMoreInfoClick = () => {
    setMoreInfo((prevMoreInfo) => !prevMoreInfo);
  };



  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const navigateToGitHub = () => {
    window.location.href = githubRepo; 
  };

  return (
    <div>
  {!moreInfo ? (
    <div className="slideshow">
        <div className='project-header'>
        <h2>{title}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-information" onClick={handleMoreInfoClick}><path className="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/><path className="secondary" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
        </div>
            <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
      {slides.map((image, index) => (
          <img
            className="slide"
            key={index}
            src={image}
          ></img>
        ))}
      </div>
      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div> ) : 
    <div className='slideshow moreInfo'>
      <div className='project-header'>
      <h2>{title}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-home" onClick={handleMoreInfoClick}><path className="homeprimary" d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path className="homesecondary" d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"/></svg>
      </div>
      <div className='project-summary'>
      <h2 className='head'>Summary</h2>
      <p className='project-summary'>{summary}</p>
      </div>
      <div className='project-summary'>
      <h2 className='head'>Tech Stack</h2>
      <p className='project-summary'>{stack.join(', ')}</p>
      </div>
      <div className='project-buttons'>
      <Link className='a' to={githubRepo} target="_blank" rel="noopener noreferrer">
    <p className='p'>GitHub Repo</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-external-window">
      <path className="mailprimary" d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"/>
      <path className="mailprimary" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"/>
    </svg>
  </Link>
  
  {deployLink && (
    <Link className='a' to={deployLink} target="_blank" rel="noopener noreferrer">
      <p className='p'>Deployed Site</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-external-window">
        <path className="mailprimary" d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"/>
        <path className="mailprimary" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"/>
      </svg>
    </Link>
  )}
      </div>
    </div>
    }
</div>
  )
}

export default Project