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
  const [box, setBox] = useState({});
  const [input, setInput] = useState('');
  const [img, setImg] = useState('');

  const onInputChange = (e) => {
    const input = e.target.value;
    setInput(input);
  };

  const onSubmit = async () => {
    setImg(input);
    const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
    let data = response.outputs[0].data.regions;
    if (data.length > 1) {
      data.forEach((face) => {
        displayFaceBox(calculateFaceBox(face.region_info.bounding_box));
      });
    } else {
      data = data[0].region_info.bounding_box;
      displayFaceBox(calculateFaceBox(data));
    }
  };

  const calculateFaceBox = (data) => {
    const clarifaiFace = document.getElementById('imageInput');
    const width = Number(clarifaiFace.width);
    const height = Number(clarifaiFace.height);
    return {
      leftCol: data.left_col * width,
      topRow: data.top_row * height,
      rightCol: width - data.right_col * width,
      bottomRow: height - data.bottom_row * height,
    };
  };
  const displayFaceBox = (box) => {
    setBox(box);
  };
  return (
    <div className="App">
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />

      <FaceRecognition img={img} box={box} />
    </div>
  );
};

export default App;
