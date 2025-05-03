import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupPage from "@/app/login/signup";
import LoginPage from "@/app/login/login";
import LandingPage from "@/app/LandingPage";





function App() {
    return (
        <Router>
            <Routes>
                <Route path ="/" element = {<LandingPage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
