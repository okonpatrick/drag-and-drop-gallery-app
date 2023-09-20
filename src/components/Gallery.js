// Gallery.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Image from '../components/Image';
import imageData from '../imageData';
import LoadingSpinner from "../components/LoadingSpinner"


const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const Gallery = () => {
  const [images, setImages] = useState(imageData);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle drag-and-drop reordering
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = [...images];
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);

    setImages(reorderedImages);
  };

  // Filter images based on search term
  const filteredImages = images.filter((image) =>
    image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className='wrapper'>
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">Services</a>
    <a href="#contact">Blog</a>
  <a href="#contact">Contact</a>
    <a href="#contact">About</a>

    </div>
      <h2 className='h2-tag'>Image Gallery</h2>
      <div className="search-div">
      <input
      className='search'
        type="text"
        placeholder="Search image by tag"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="gallery">
            {(provided) => (
              <GalleryContainer {...provided.droppableProps} ref={provided.innerRef}>
                {filteredImages.map((image, index) => (
                  <Image key={image.id} image={image} index={index} />
                ))}
                {provided.placeholder}
              </GalleryContainer>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>  
  );
};

export default Gallery;
