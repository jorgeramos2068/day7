import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegularComponent from './pages/hoc/RegularComponent';
import HocComponent from './pages/hoc/HocComponent';
import Navbar from './components/shared/Navbar';
import UseMemo from './pages/memoization/UseMemo';
import UseCallback from './pages/memoization/UseCallback';
import ReactMemo from './pages/memoization/ReactMemo';
import SyntheticEvents from './pages/synthetic/SyntheticEvents';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="mb-4 mt-4">
          <h1>Day 7: Advanced React Concepts</h1>
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hoc/regular" element={<RegularComponent />} />
            <Route path="/hoc/regular" element={<HocComponent />} />
            <Route path="/memoization/use-memo" element={<UseMemo />} />
            <Route path="/memoization/use-callback" element={<UseCallback />} />
            <Route path="/memoization/react-memo" element={<ReactMemo />} />
            <Route
              path="/synthetic/synthetic-events"
              element={<SyntheticEvents />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
