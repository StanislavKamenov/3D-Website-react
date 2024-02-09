import React from 'react';
import './Content.css'
import Spline from '@splinetool/react-spline';

const redirectToSite = () => {
  window.location.href = 'https://spline.design/';
}

const Content = () => {
  return (
    <div className='w-content'>
      <div className='general-content'>
        <div className='line'></div>
      </div>
      <div className='text-content'>
        <h1 className='Model'>3D <span className='color1'>MODEL</span></h1>
        <h4><span className='colors1'>THE</span> BEAUTY OF 3D MODELS</h4>
        <p className='general-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure corporis ex praesentium nulla! Expedita temporibus incidunt eius totam alias excepturi asperiores voluptas labore. Voluptates, ipsam ad officia aut culpa dolorem?</p>
        <button onClick={redirectToSite}>Check in</button>
       <div className='custom'><Spline scene="https://prod.spline.design/oS9izNe3zgwhP2QU/scene.splinecode"></Spline></div>
      </div>
    </div>
  );
};

export default Content;
