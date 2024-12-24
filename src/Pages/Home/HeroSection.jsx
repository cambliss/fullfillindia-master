import React, { useState } from "react";  
import SearchComponent1 from "./SearchComponent1";
import a from '../Home/fullfillheroimg.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroSection = () => {
  const [searchVisible, setSearchVisible] = useState(false); // Track when to show the search component

  const handleImageLoad = () => {
    // Delay the search component visibility by 1 second
    setTimeout(() => {
      setSearchVisible(true);
    }, 1000); // 1000ms = 1 second
  };

  return (
    <div className="hero-container1 container-fluid">
      <LazyLoadImage
        className="hero-image"
        src={a} // Replace with the actual path to your image
        alt="Hero Image"
        effect="blur" // Adds a blur effect during loading
        afterLoad={handleImageLoad} // Trigger handleImageLoad when image is loaded
      />
      {searchVisible && ( // Render SearchComponent1 only after 1 second delay
        <center>
          <div className="divhero">
            <SearchComponent1 />
          </div>
        </center>
      )}
    </div>
  );
};

export default HeroSection;
