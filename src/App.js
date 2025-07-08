import React, { useState, useEffect } from 'react';
import './App.css';
import UpperDeck from './components/upper-deck';
import UpperCenterDeck from './components/upper-center-deck';
import LowerCenterDeck from './components/lower-center-deck';
import LowerDeck from "./components/lower-deck";


function App() {
  const [activeView, setActiveView] = useState(0);
  const [scrollCounter, setScrollCounter] = useState(0);

  // Array of our view names
  const views = ['Home', 'About', 'Projects', 'Contact'];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
 
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate current view based on scroll position
      const viewHeight = documentHeight / views.length;
      const newView = Math.floor(scrollPosition / viewHeight);
      
      setActiveView(Math.min(newView, views.length - 1));
      
      // Update counter based on scroll direction
      setScrollCounter(prev => {
        const delta = scrollPosition - prev;
        return delta > 0 ? prev + 1 : delta < 0 ? prev - 1 : prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [views.length]);

  return (
    <div className="app">
      {/* Persistent Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">My App</div>
        <ul className="nav-links">
          {views.map((view, index) => (
            <li 
              key={view}
              className={`nav-item ${activeView === index ? 'active' : ''}`}
              onClick={() => {
                // Scroll to the corresponding view
                const element = document.getElementById(`view-${index}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {view}
            </li>
          ))}
        </ul>
     
        
      </nav>

      {/* Main Views */}
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
  );
}

export default App;
