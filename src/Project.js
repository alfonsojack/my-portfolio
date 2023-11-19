import './Project.css'
import { useState, useEffect, useRef } from 'react'
import matthews1 from './matthews1.png';
import matthews2 from './matthews2.png';
import matthews3 from './matthews3.png';
import matthews4 from './matthews4.png'


function Project() {
  const slides = [matthews1, matthews3, matthews4];
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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

  return (
    <div className="slideshow">
        <h2>Matthews Poetry Generator</h2>

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
    </div>
  )
}

export default Project