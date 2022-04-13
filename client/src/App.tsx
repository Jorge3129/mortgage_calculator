import React, {FC, useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/Home";
import Header from "./components/header/Header"
import BankPage from "./pages/banks/BankPage";
import Footer from "./components/header/Footer";
import Page from "./pages/calculator/Page";
import AboutPage from "./pages/about/AboutPage";
import {PartialUser} from "./types/types";
import {AuthContext} from "./pages/auth/AuthContext";
import {useLogin} from "./components/hooks/useLogout";

const App: FC = () => {

    const [user, setUser] = useState<PartialUser>();

    useLogin(setUser);

    return (
        <Router>
            <AuthContext.Provider value={{user, setUser}}>
                <div className="App">
                    {user || localStorage.getItem('user') ?
                        <>
                            <Header/>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/banks" element={<BankPage/>}/>
                                <Route path="/calculator" element={<Page/>}/>
                                <Route path="/about" element={<AboutPage/>}/>
                            </Routes>
                            <Footer/>
                        </>
                        : <AuthPage/>
                    }
                </div>
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
