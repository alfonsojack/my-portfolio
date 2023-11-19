import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;
