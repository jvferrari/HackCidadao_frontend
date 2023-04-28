import Home from "./pages/HOME/Home";
import Camera from "./pages/Camera/Camera";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/camera" element={<Camera/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
