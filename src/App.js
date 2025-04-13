import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Maths from "./pages/Maths";
import English from "./pages/English";
import Science from "./pages/Science";
import CS from "./pages/CS";
import Biology from "./pages/Biology";
import SST from "./pages/SST";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/maths" element={<Maths />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/science" element={<Science />} />
            <Route path="/english" element={<English />} />
            <Route path="/cs" element={<CS />} />
            <Route path="/biology" element={<Biology />} />
            <Route path="/sst" element={<SST />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
