import React from 'react';
import { useState } from 'react';

const MusicDiscPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        // Logic to play or pause the music disc
    };

    return (
        <div>
            <h2>{isPlaying ? 'Playing Music Disk' : 'Music Disc Player'}</h2>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
};

export default MusicDiscPlayer;
