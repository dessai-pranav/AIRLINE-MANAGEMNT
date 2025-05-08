import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupPage from "@/app/login/signup";
import LoginPage from "@/app/login/login";
import LandingPage from "@/app/LandingPage";
import DashBoard from "@/app/dashboard/DashBoard";
import AdminDashBoard from "@/app/dashboard/AdminDashBoard";
import ManageUsers from "@/components/manage-users/dashboard/ManageUsers";
import HandleFeedback from "@/components/handle-feedback/dashboard/HandleFeedback";
import SearchFlight from "@/components/search-flight/component/SearchFlight";
import SubmitFeedback from "@/components/submit-feedback/dashboard/SubmitFeedback";
import FlightsStatus from "@/components/flights-status/dashboard/FlightsStatus";
import BookFlight from "@/components/book-flight/dashboard/BookFlight";





function App() {
    return (
        <Router>
            <Routes>
                <Route path ="/" element = {<LandingPage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashBoard/>} />
                <Route path="/admin-dashboard" element={<AdminDashBoard/>} />
                <Route path="/manage-users" element={<ManageUsers/>} />
                <Route path="/handle-feedback" element={<HandleFeedback/>} />
                <Route path="/manage-flight" element={<ManageUsers/>} />
                <Route path="/search-flight" element={<SearchFlight/>} />
                <Route path="/submit-feedback" element={<SubmitFeedback/>} />
                <Route path="/flight-status" element={<FlightsStatus/>} />
                <Route path="/book-flight" element={<BookFlight/>} />

            </Routes>
        </Router>
    );
}

export default App;
