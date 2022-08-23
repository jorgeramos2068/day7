import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HigherOrderFunction from './pages/hoc/HigherOrderFunction';
import HigherOrderComponent from './pages/hoc/HigherOrderComponent';
import Navbar from './components/shared/Navbar';
import UseMemo from './pages/memoization/UseMemo';
import UseCallback1 from './pages/memoization/UseCallback1';
import UseCallback2 from './pages/memoization/UseCallback2';
import ReactMemo from './pages/memoization/ReactMemo';
import SyntheticEvents from './pages/synthetic/SyntheticEvents';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="mb-4 mt-4">
          <h1 className="display-5">Day 7: Advanced React Concepts</h1>
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hoc/function" element={<HigherOrderFunction />} />
            <Route path="/hoc/component" element={<HigherOrderComponent />} />
            <Route path="/memoization/react-memo" element={<ReactMemo />} />
            <Route path="/memoization/use-memo" element={<UseMemo />} />
            <Route
              path="/memoization/use-callback1"
              element={<UseCallback1 />}
            />
            <Route
              path="/memoization/use-callback2"
              element={<UseCallback2 />}
            />
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
