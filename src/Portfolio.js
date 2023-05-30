import React from 'react';
import MyPortfolio from './MyPortfolio';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Praateek Gunday</h1>
      </header>
      <section>
        <MyPortfolio />
      </section>
      <footer>
        <p>&copy; 2023 Praateek Gunday</p>
      </footer>
    </div>
  );
};

export default Portfolio;
