
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import NotFound from './components/Shared/NotFound';
import LogIn from './components/Shared/LogIn';
import Footer from './components/Shared/Footer';
import Expart from './components/Expart/Expart';

function App() {
  return (
    <div> 
      <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expart" element={<Expart />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
