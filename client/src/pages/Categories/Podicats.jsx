import React, { useState } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioUrlList = [
    'https://res.cloudinary.com/pitz/video/upload/v1695968309/32-Maroon_5_Ft._Future_-_Cold_q2shsy.mp3',
    'https://res.cloudinary.com/pitz/video/upload/v1695968315/12._Congratulations_Ft._Quavo_ux06y9.mp3',
    'https://res.cloudinary.com/pitz/video/upload/v1695968318/18_John_Legend-All_of_Me_ciwkyx.mp3',
    'https://res.cloudinary.com/pitz/video/upload/v1695968309/32-Maroon_5_Ft._Future_-_Cold_q2shsy.mp3',
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    
    <div className="audio-players">
        
      {audioUrlList.map((audioUrl, index) => (
        <div key={index} className="audio-player" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlmVWDMG84izB6PSIr6VdE9yKwCR7fuWetQ&usqp=CAU)' }}>
          <audio style={{marginTop:'9rem'}} controls>
            <source src={audioUrl} type="audio/mp3" />
          </audio>
          <button onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
