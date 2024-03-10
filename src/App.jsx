import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/home/home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="share" /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
