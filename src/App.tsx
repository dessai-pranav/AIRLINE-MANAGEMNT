import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupPage from "@/app/login/signup";
import LoginPage from "@/app/login/login";





function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
