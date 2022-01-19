import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { fetchUser } from './utils/fetchUser';

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
       const user = fetchUser(); 
    
       if(!user) navigate('/login');
    }, [])

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    )
}

export default App
