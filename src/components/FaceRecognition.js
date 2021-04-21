import React from 'react';
import '../CSS/FaceRecognition.css';

const FaceRecognition = ({ img, boxes }) => {
  console.log(boxes);
  return (
    <div className="image-container">
      <div className="absolute mt2">
        <img id="imageInput" alt="" src={img} width="500px" height="auto" />
        {boxes.map((box, i) => {
          return (
            <div
              key={i}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
