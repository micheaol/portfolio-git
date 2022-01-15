import './App.css';
import { Route, Routes } from 'react-router';
import DownNav from './components/DownNav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TopNav from './components/TopNav';
import Avatar from './components/Avatar';

function App() {
  return (
    <div>
      <TopNav />
      <DownNav />
      <div className='layout-plan'>
      <Avatar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
