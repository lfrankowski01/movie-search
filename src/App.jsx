import "./App.css";
import MovieDetails from './pages/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {

    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>
    );
}
export default App;