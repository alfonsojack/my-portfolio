import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Header from './Header'

function App() {
  return (
    <main className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;
