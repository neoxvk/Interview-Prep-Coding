import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import HomePage from "./components/HomePage";
export default function App() {
  return (
    <div className="bg-gray-400 min-h-svh">
      <Routes>
        <Route path="/" element={<HomePage />} />
      
      </Routes>
    </div>
  );
}
