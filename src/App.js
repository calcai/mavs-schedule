import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/game/:gameId"
              element={<GameDetails />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
