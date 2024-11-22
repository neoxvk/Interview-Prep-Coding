import React from 'react'
import SearchBar from './SearchBar'
import ProductList from './ProductList';

const HomePage = () => {
  return (
    <div className="flex w-screen">
      <div className="col w-4/10 ">
        <SearchBar />
      </div>
      <div className="w-6/10 p-4col">
        <ProductList />
      </div>
    </div>
  );
}

export default HomePage