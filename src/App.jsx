import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import PlantManagementSystem from './PlantManagementSystem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<PlantManagementSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
