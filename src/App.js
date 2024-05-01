import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        <div className="content">
          <switch>
            <Route path="/">
              <h1>home content</h1>
            </Route>
          </switch>
        </div>

        {/* Footer  */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
