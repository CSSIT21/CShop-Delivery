import "./styles/reset/reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login";
import Request from "./pages/Admin/Request";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <NavBar />
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                        </Route>
                        <Route path="/admin" exact>
                            <Route exact path="/admin">
                                <Request />
                            </Route>
                        </Route>
                    </Switch>
                </Router>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
