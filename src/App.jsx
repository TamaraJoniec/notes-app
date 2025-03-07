import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/new" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
