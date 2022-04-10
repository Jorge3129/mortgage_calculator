import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/Home";
import Header from "./components/Header"
import BankPage from "./pages/banks/BankPage";
import Footer from "./components/Footer";
import MortgagePage from "./pages/mortgage/MortgagePage";

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
                <Routes>
                    <Route path="/banks" element={<BankPage/>}/>
                </Routes>
                <Routes>
                    <Route path="/mortgage" element={<MortgagePage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
