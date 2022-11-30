import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './App.css';
import './styles/common.css';
import Login from './pages/Login';
import Index from './pages/Index';
import Gallery from './pages/Gallery';
import Error from './pages/Error';

function App() {
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem('user_id') === null) {
    } else {
      setisLogin(true);
    }
  })
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="index" element={<Index/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="*" element={<Error />}/>
          </Routes>
      <div>
        {/* {isLogin ? <Index isLogin={isLogin}/> : <Login/>} */}
      </div>
    </div>
  );
}

export default App;
