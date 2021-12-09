import "./styles/reset/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <NavBar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
