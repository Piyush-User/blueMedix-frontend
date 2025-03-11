
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar.jsx";
import Sidebar from "./Components/SideBar.jsx";
import Dashboard from "./assets/pages/DashBoard.jsx";
import Users from "./assets/pages/Users.jsx";
import Products from "./assets/pages/Products.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
