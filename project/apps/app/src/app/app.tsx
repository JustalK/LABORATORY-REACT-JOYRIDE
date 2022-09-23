import { Route, Routes, Link } from 'react-router-dom';
import Experience1 from './Experiences/Experience1';

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
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Experience1 />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
