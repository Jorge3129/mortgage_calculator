import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/Home";
import Header from "./components/Header"
import BankPage from "./pages/banks/BankPage";
import Footer from "./components/Footer";
import Page from "./pages/calculator/Page";
import AboutPage from "./pages/about/AboutPage";

const App: FC = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/banks" element={<BankPage/>}/>
                    <Route path="/calculator" element={<Page/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
