import React, { useState, useEffect } from 'react';
import './App.css';
import UpperDeck from './components/upper-deck';
import UpperCenterDeck from './components/upper-center-deck';
import LowerCenterDeck from './components/lower-center-deck';
import LowerDeck from "./components/lower-deck";
import SplashScreen from './components/splash_screen';


function App() {
  const [activeView, setActiveView] = useState(0);
  const [scrollCounter, setScrollCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const views = ['Home', 'About', 'Projects', 'Contact'];

    useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
 
      const documentHeight = document.documentElement.scrollHeight;
      
  
      const viewHeight = documentHeight / views.length;
      const newView = Math.floor(scrollPosition / viewHeight);
      
      setActiveView(Math.min(newView, views.length - 1));
      
   
      setScrollCounter(prev => {
        const delta = scrollPosition - prev;
        return delta > 0 ? prev + 1 : delta < 0 ? prev - 1 : prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [views.length]);

  return (
    <>
    {isLoading ? <SplashScreen/>: 
    <div className="app">
 
      <nav className="navbar">
        <div className="navbar-brand">Sahil Ojha</div>
        <ul className="nav-links">
          {views.map((view, index) => (
            <li 
              key={view}
              className={`nav-item ${activeView === index ? 'active' : ''}`}
              onClick={() => {
                
                const element = document.getElementById(`view-${index}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {view}
            </li>
          ))}
        </ul>
     
        
      </nav>

 
      <div className="views-container">
        {views.map((view, index) => (
          <section 
            key={view}
            id={`view-${index}`}
            className={`view ${activeView === index ? 'active-view' : ''}`}
          >

          {index === 0 ? (
  <UpperDeck />
) : index === 1 ? (
  <UpperCenterDeck />
) : index === 2 ? (
  <LowerCenterDeck />  
)  : 
  <LowerDeck />  
}

          </section>
        ))}
      </div>
    </div>
}

    </>
  );
}

export default App;
