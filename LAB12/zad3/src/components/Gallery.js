import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import photos from "./data/photos.json";


const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  setPhotos(photos);
//   useEffect(() => {
      
//     fetchData();
//   }, []);

  const handlePreviousClick = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  return (
    <div className="gallery">
      {photos.length > 0 && (
        <>
          <Photo
            link={photos[currentPhotoIndex].link}
            author={photos[currentPhotoIndex].author}
            date={photos[currentPhotoIndex].date}
            otherDetails={photos[currentPhotoIndex].otherDetails}
            score={photos[currentPhotoIndex].score}
          />
          <div className="navigation">
            <button onClick={handlePreviousClick} disabled={currentPhotoIndex === 0}>
              <i className="fa fa-angle-left"></i>
            </button>
            <button onClick={handleNextClick} disabled={currentPhotoIndex === photos.length - 1}>
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
