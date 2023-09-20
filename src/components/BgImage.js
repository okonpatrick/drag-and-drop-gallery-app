import React from 'react';

const BackgroundImage = ({ imageUrl }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '300px', // You can adjust the height as needed
    color: '#fff', // Text color on top of the background
    padding: '20px', // Add padding for content
    // Add other styles as needed
  };

  return <div style={style}>{/* Your content goes here */}</div>;
};

export default BackgroundImage;
