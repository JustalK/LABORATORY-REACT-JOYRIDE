import { Route, Routes, Link } from 'react-router-dom';
import Experience1 from './Experiences/Experience1';
import Experience2 from './Experiences/Experience2';
import Experience3 from './Experiences/Experience3';
import Experience4 from './Experiences/Experience4';
import Experience5 from './Experiences/Experience5';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Experience1</Link>
          </li>
          <li>
            <Link to="/experience2">Experience2</Link>
          </li>
          <li>
            <Link to="/experience3">Experience3</Link>
          </li>
          <li>
            <Link to="/experience4">Experience4</Link>
          </li>
          <li>
            <Link to="/experience5">Experience5</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Experience1 />} />
        <Route path="/experience2" element={<Experience2 />} />
        <Route path="/experience3" element={<Experience3 />} />
        <Route path="/experience4" element={<Experience4 />} />
        <Route path="/experience5" element={<Experience5 />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
