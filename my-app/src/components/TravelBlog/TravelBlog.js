import React from "react";
import TravelData from "../../TravelData.js";
import "./TravelBlog.css";
const TravelList = () => {
  return (
    <div>
      {TravelData.map((item) => (
        <div key={item.placeHeading} className="place-container">
          <h3 className="place-header">{item.placeHeading}</h3>
          <div className="image-container">
            <img src={item.placeImg1} alt="image1" />
            <img src={item.placeImg2} alt="image2" />
            <img src={item.placeImg3} alt="image3" />
          </div>
          <p className="place-description">{item.placeDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default TravelList;