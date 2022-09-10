import { Routes, Route, Link } from 'react-router-dom';
import { Landing, Error, Register, Dashboard } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
