import React from 'react';
import '../CSS/ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="centerTop">
      <div className="center">
        <p className="f3">{'Face Blur'}</p>
        <div className="center form">
          <input className="f4 pa2  w-70 center" type="tex" onChange={onInputChange} autoComplete="none" />
          <br />
          <button className=" w-20 grow f4 link ph3 pv2 dib " onClick={onSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;