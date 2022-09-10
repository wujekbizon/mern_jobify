import { Routes, Route, Link } from 'react-router-dom';
import { Landing, Error, Register } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
