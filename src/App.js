import './App.css';
import Album from './components/Album/Album';
import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Albums from './components/Albums';

function App() {

  const [albums, setAlbums] = useState([]);
  

  return (
    <div className="app">
      <Header heading="Spotify Demo" />

      <a
        className="link"
        href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=playlist-modify-private&redirect_uri=http://localhost:3000`}
      >
        Authorize Yourself
      </a>

      <SearchBar updateData={setAlbums} />

      <Albums albums={albums} />
    </div>
  );
}

export default App;
