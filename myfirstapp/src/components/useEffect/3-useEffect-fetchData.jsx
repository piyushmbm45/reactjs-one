import React, { useState, useEffect} from "react";

const url = "https://fakestoreapi.com/products"


function UseEffectFetchData(){
    const [products, setProducts] = useState([])

    const getProducts = async () =>{
        const response = await fetch(url);
        const products = await response.json()
        setProducts(products)
        // console.log(products);
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
     <>
     <h1>Users</h1>
     <ul>
         {
             products.map((product)=>{
                 const {id, title, price, description, category,image} = product;
                 return (
                     <li key={id}>
                         <img src={image} alt={id} width="200px" height="200px"/>
                         <h2>{title} {price}</h2>
                        <h3>{category}</h3>
                        <p>{description}</p>
                     </li>
                 )
             })
         }
     </ul>
     </>
    );
}

export default UseEffectFetchData;