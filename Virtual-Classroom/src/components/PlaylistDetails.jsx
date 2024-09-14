import React from 'react';
import '../components/css/style.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const PlaylistDetails = () => {
    return (
        <section className="playlist-details">
            <h1 className="heading">Playlist Details</h1>
            <div className="row">
                <div className="column">
                    <form action="" method="post" className="save-playlist">
                        <button type="submit">
                            <i className="far fa-bookmark"></i> <span>Save Playlist</span>
                        </button>
                    </form>
                    <div className="thumb">
                        <img src="images/thumb-1.png" alt="Playlist Thumbnail" />
                        <span>10 videos</span>
                    </div>
                </div>
                <div className="column">
                    <div className="tutor">
                        <img src="images/pic-2.jpg" alt="Tutor" />
                        <div>
                            <h3>John Doe</h3>
                            <span>Tutor</span>
                        </div>
                    </div>
                    <div className="details">
                        <h3>Complete HTML Tutorial</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
                        <Link to="/teacher-profile" className="inline-btn">View Profile</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaylistDetails;
