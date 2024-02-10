import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemInfo from "./pages/ItemInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ItemInfo />} />
      </Routes>
    </>
  );
}

export default App;
