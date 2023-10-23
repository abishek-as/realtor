import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import About from "./pages/about";
import Profile from "./pages/profile";
import Header from "./components/header";
import PrivateRoute from "./components/privateRoute";
import CreateListing from "./pages/createListing";
import UpdateListing from "./pages/updateListing";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create-listing" element={<CreateListing />} />
                    <Route
                        path="/update-listing/:listingId"
                        element={<UpdateListing />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
