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
        <p className='general-text'>Use Spline to quickly and easily create your own 3D model to decorate your website. With Spline, you can create unique shapes and abstract images that capture the attention of your visitors and make them feel amazed by the visual experience</p>
        <button onClick={redirectToSite}>Check in</button>
       <div className='custom'><Spline scene="https://prod.spline.design/oS9izNe3zgwhP2QU/scene.splinecode"></Spline></div>
      </div>
    </div>
  );
};

export default Content;
