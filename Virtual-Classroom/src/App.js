import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About'; // Ensure you have this component
import CourseList from './components/CourseList';
import ProfilePage from './components/ProfilePage';
import PlaylistDetails from './components/PlaylistDetails';
import PlaylistVideos from './components/PlaylistVideos';
import SideBar from './components/SideBar';
import TeacherProfile from './components/TeacherProfile';

const App = () => {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/playlist" element={<PlaylistDetails />} />
        <Route path="/playlist-videos" element={<PlaylistVideos />} />
        <Route path="/teachers" element={<TeacherProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
