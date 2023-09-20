// Image.js
import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const ImageContainer = styled.div`
`;

const Image = ({ image, index }) => {
    
  return ( 
        <div className="image-display">
    <Draggable draggableId={image.id.toString()} index={index}>
      {(provided) => (
        <ImageContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
           {/* <img src={image.src} alt={`Image ${image.id}`} /> */}
            <img src={`/images/image${image.id}.jpg`} alt={`Image ${image.id}`}/>
          <p>{image.tags.join(', ')}</p>
        </ImageContainer>
      )}
    </Draggable>
    </div>

  );
};

export default Image;
