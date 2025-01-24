import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Public from "./routes/public";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Public />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
