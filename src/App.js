
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import NotFound from './components/Shared/NotFound';
import LogIn from './components/Shared/LogIn';

function App() {
  return (
    <div> 
      <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
  );
}

export default App;
