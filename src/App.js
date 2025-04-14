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
import LoginPage from './pages/login';

// reusable layout
const WithSidebar = ({ children }) => (
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 p-4">
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<WithSidebar><HomePage /></WithSidebar>} />
        <Route path="/maths" element={<WithSidebar><Maths /></WithSidebar>} />
        <Route path="/quiz" element={<WithSidebar><QuizPage /></WithSidebar>} />
        <Route path="/science" element={<WithSidebar><Science /></WithSidebar>} />
        <Route path="/english" element={<WithSidebar><English /></WithSidebar>} />
        <Route path="/cs" element={<WithSidebar><CS /></WithSidebar>} />
        <Route path="/biology" element={<WithSidebar><Biology /></WithSidebar>} />
        <Route path="/sst" element={<WithSidebar><SST /></WithSidebar>} />
      </Routes>
    </Router>
  );
}

export default App;
