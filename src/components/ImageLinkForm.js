import React from 'react';
import '../CSS/ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="centerTop">
      <h1>{'Face Blur'}</h1>
      <div className=" form">
        <input className="f4 pa2  w-70 center" type="tex" onChange={onInputChange} autoComplete="none" />
        <br />
        <button style={{ fontSize: '25px' }} onClick={onSubmit}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
