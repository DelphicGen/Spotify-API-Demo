import './App.css';
import data from './data'
import Album from './components/Album/Album';

function App() {
  return (
    <div className="app">
      {
        data.map(album => (
          <Album key={album.id} album={album} />
        ))
      }
    </div>
  );
}

export default App;
