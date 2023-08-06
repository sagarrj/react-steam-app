import "./App.css";
import HomeScreen from "./common/HomeScreen";
import { Routes, Route } from "react-router-dom";
import AddGame from "./common/AddGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="home" element={<HomeScreen />} />
      <Route path="add" element={<AddGame />} />
    </Routes>

    //  <HomeScreen />
  );
}

export default App;
