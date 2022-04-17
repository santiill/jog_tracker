import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddJog from "./components/AddJog";
import Info from "./components/Info";
import JogsList from "./components/JogsList";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<JogsList />} />
        <Route path="/add" element={<AddJog />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
