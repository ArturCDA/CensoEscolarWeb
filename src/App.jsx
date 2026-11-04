
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Navbar';
import Home from './views/Home';
import Instituicoes from './views/Instituicoes';

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/instituicoes"
          element={<Instituicoes />}
        />
      </Routes>
    </>
  );
}

export default App;
