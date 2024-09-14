import React from 'react';

const PlaylistVideos = () => {
    const videos = [
        { imgSrc: "images/post-1-1.png", title: "Complete HTML Tutorial (Part 01)" },
        { imgSrc: "images/post-1-2.png", title: "Complete HTML Tutorial (Part 02)" },
        // Add more videos here
    ];

    return (
        <section className="playlist-videos">
            <h1 className="heading">Playlist Videos</h1>
            <div className="box-container">
                {videos.map((video, index) => (
                    <a key={index} className="box" href="/watch-video">
                        <i className="fas fa-play"></i>
                        <img src={video.imgSrc} alt={video.title} />
                        <h3>{video.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default PlaylistVideos;
