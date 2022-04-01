import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Albums from './components/Albums';
import PlaylistForm from './components/PlaylistForm';

function App() {

  const [albums, setAlbums] = useState([]);
  const [selectedAlbums, setSelectedAlbums] = useState(new Set());

  const updateData = (newAlbums) => {
    let temp = [];
    albums.forEach(album => {
      if(selectedAlbums.has(album.uri)) {
        temp.push(album);
      }
    });
    temp.push(...newAlbums);
    setAlbums(temp);
  }

  const handleToggleSelected = (uri) => {
    if(!selectedAlbums.has(uri)) setSelectedAlbums(prevState => new Set([...prevState, uri]));
    else {
      const temp = new Set([...selectedAlbums]);
      temp.delete(uri);
      setSelectedAlbums(temp);
    }
  }

  return (
    <div className="app">
      <Header heading="Spotify Demo" />

      <a
        className="link"
        href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=playlist-modify-private&redirect_uri=http://localhost:3000`}
      >
        Authorize Yourself
      </a>

      <SearchBar updateData={updateData} />
      <PlaylistForm selectedAlbums={selectedAlbums} />
      <Albums selectedAlbums={selectedAlbums} toggleSelected={handleToggleSelected} albums={albums} />
    </div>
  );
}

export default App;
