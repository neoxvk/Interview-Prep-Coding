import React, { useEffect, useState } from 'react'
import axios

from 'axios';
import useThrottle from '../hooks/useThrottling';
const ProductList = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);


    useEffect(()=> {
        fetchProducts();

    },[page])

    const fetchProducts = async() => {
      if(!hasMore || loading) return;
      setLoading(true)
        try{
            const response = await axios.get(
              "https://fakestoreapi.com/products"
            );

            const newProducts = response.data.slice((page-1) * 10, page*10) //10 products per page

            //setProducts(response.data)

            setProducts((prev)=> [...prev, ...newProducts])

            if(newProducts.length < 10){
              setHasMore(false) //no miore products
            }

        }catch(e){
            console.log(e)
        }finally{
          setLoading(false)
        }
    }

    //Handle Scrolling wioth throttling.
    const handleScroll = useThrottle(()=>{
      if( window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight){
              setPage((prevPage) => prevPage + 1);
            }

    },500)

    useEffect(()=> {
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll)
    },[handleScroll])


  return (
    <div className="p-10">
      <h3>All Products: </h3>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div className="col bg-blue-200 p-4 text-center rounded shadow">
            <img
              className="justify-center place-items-center w-96 h-96"
              src={product.image}
              width={250}
              height={250}
            />
            <h2 className="text-center font-bold p-2">
              {product.title} -{" "}
              <span className="text-center font-bold p-2 text-green-900">
                ${product.price}
              </span>
            </h2>
          </div>
        ))}

        {loading && <p className="animate-bounce">Loading...</p>}
        {!hasMore &&
          alert("No more Products")}
      </div>
    </div>
  );
}

export default ProductList