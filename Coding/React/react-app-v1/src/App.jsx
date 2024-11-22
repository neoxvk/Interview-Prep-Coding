import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import HomePage from "./components/HomePage";
import ErrorBoundaryExample from "./components/ErrorBoundary";
import Memoization from "./components/Memoization";
import UnControlledComponent from "./components/UnControlledComponent";
import Greeting from "./components/Children";
import UseMemo from "./components/UseMemo";
import UseCallBack from "./components/UseCallBack";

import LazyLoadingExample from "./components/LazyLoading";
export default function App() {
  return (
    <div className="bg-gray-400 min-h-svh">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/error" element={<ErrorBoundaryExample/>}/>
        <Route path="/memo" element={<Memoization/>}/>
        <Route path="/uncontrolled" element={<UnControlledComponent/>}/>
        <Route path="/hi" element={<Greeting/>}/>
        <Route path="usememo" element={<UseMemo/>}/>
        <Route path="usecallback" element={<UseCallBack/>}/>
        <Route path="/lazy" element={<LazyLoadingExample/>}/>
      
      </Routes>
    </div>
  );
}
