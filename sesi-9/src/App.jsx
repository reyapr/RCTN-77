import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/About/AboutMe";
import AboutCompany from "./pages/About/AboutCompany";
import AboutOthers from "./pages/About/AboutOthers";
import Members from "./pages/Members";
import Member from "./pages/Member";
import Items from "./pages/Items";
import Item from "./pages/Items/Item";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="me" element={<AboutMe />} />
          <Route path="company" element={<AboutCompany />} />
        </Route>
        <Route path="/about/others" element={<AboutOthers />} />
        <Route path="/members" element={<Members />}>
          <Route path=":name" element={<Member />} />
        </Route>
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          }
        >
          <Route path=":itemId" element={<Item />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
