import React, { useState } from 'react';
import './CSS/App.css';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: 'a716a8ef2bdf4456a0a86eaf1e26a90d',
});

const App = () => {
  const [boxes, setBoxes] = useState([]);
  const [input, setInput] = useState('');
  const [img, setImg] = useState('');

  const onInputChange = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  const onSubmit = async () => {
    setImg(input);
    const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
    displayFaceBox(calculateFaceBox(response));
  };

  const calculateFaceBox = (response) => {
    return response.outputs[0].data.regions.map((face) => {
      const detectedFace = face.region_info.bounding_box;
      const clarifaiFace = document.getElementById('imageInput');
      const width = Number(clarifaiFace.width);
      const height = Number(clarifaiFace.height);
      return {
        leftCol: detectedFace.left_col * width,
        topRow: detectedFace.top_row * height,
        rightCol: width - detectedFace.right_col * width,
        bottomRow: height - detectedFace.bottom_row * height,
      };
    });
  };

  const displayFaceBox = (boxes) => {
    setBoxes(boxes);
  };
  return (
    <div className="App">
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />

      <FaceRecognition img={img} boxes={boxes} />
    </div>
  );
};

export default App;
