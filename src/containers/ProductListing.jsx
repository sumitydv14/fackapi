import React,{useEffect} from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import ProductComponent from './ProductComponent';

import axios from 'axios';
import { setProducts } from '../actions/productAction';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
     const fatchProducts =  async () =>{
         const response = await axios.get("https://fakestoreapi.com/products").catch((error)=>{
             console.log("error")
         });
         dispatch(setProducts(response.data));
     } ;


     useEffect(()=>{
         fatchProducts()
     },[]);

     console.warn("Products" , products)

    return (
        <div className="" >
         
          <ProductComponent/>
        </div>
    )
}

export default ProductListing;
