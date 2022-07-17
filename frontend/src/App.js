import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/messenger/login" element={<Login />}></Route>
          <Route path="/messenger/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
