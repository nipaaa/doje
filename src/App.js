
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import NotFound from './components/Shared/NotFound';
import LogIn from './components/Shared/LogIn';
import Expart from './components/Expart/Expart';
import Request from './components/RequestProcess/Request';

function App() {
  return (
    <div> 
      <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expert" element={<Expart />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="request" element={<Request />}>
            <Route path='link1' />
            <Route path='link2' />
            <Route path='link3' />
            <Route path='link4' />
            <Route path='link5' />
            <Route path='link6' />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
