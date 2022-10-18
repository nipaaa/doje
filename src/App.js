
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header';

function App() {
  return (
    <div> 
      <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
  );
}

export default App;
