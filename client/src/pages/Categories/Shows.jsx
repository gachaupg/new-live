import React, { useState } from 'react';

const Shows = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsExpanded(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h1 style={{marginBottom:'1rem'}}>Shows</h1>
    <div className="movies">
      
    <div className={`video-card ${isExpanded ? 'expanded' : ''}`}>
      <video
        src='https://res.cloudinary.com/pitz/video/upload/v1690793797/VID-20230731-WA0001_pquhlz.mp4'
        controls
        autoPlay={isPlaying}
        onPause={handlePause}
        style={{width:'28rem'}}
      />
      {!isPlaying && (
        <button onClick={handlePlay}></button>
      )}
      <button onClick={handleExpand}>
        {isExpanded ? '':''}
      </button>
    </div>
    <div className={`video-card ${isExpanded ? 'expanded' : ''}`}>
        <h1>Movie</h1>
      <video
        src='https://res.cloudinary.com/pitz/video/upload/v1690793797/VID-20230731-WA0001_pquhlz.mp4'
        controls
        autoPlay={isPlaying}
        onPause={handlePause}
        style={{width:'28rem'}}
      />
      {!isPlaying && (
        <button onClick={handlePlay}></button>
      )}
      <button onClick={handleExpand}>
      
      </button>
    </div>
    <div className={`video-card ${isExpanded ? 'expanded' : ''}`}>
      <video
        src='https://res.cloudinary.com/pitz/video/upload/v1690793797/VID-20230731-WA0001_pquhlz.mp4'
        controls
        autoPlay={isPlaying}
        onPause={handlePause}
        style={{width:'28rem'}}
      />
      {!isPlaying && (
        <button onClick={handlePlay}></button>
      )}
      <button onClick={handleExpand}>
        
      </button>
    </div>
    </div></>
  );
};

export default Shows;
