import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux';
import { selectedProduct ,removeselectedProduct } from '../actions/productAction';





function ProductDetails() {

 
    

 
const product = useSelector((state) => state.product);


const {image , titel , price  , category , description} = product

    
  console.warn("sumit",  product);
    const{productId} = useParams();

   
    const dispatch = useDispatch();

 
    

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err =>{
            console.warn("erro" , err);
        });

        dispatch(selectedProduct(response.data));
       
    };

    useEffect(()=>{
        if(productId && productId !== "") fetchProductDetail();
        return()=>{
            dispatch(removeselectedProduct())
        }
    },[productId]);



    return (
        <div>
         <section  className="destails">
               <div className="container">
                   {Object.keys(product).length === 0 ?   (
                       <div>...Loading</div>
                   ):(
                    <div className="row">
                         <div className="col-md-6 d-flex align-items-center ">
                              <div className="product-img">
                                    <img src={image} alt={titel} className="img-fluid" /> 
                              </div>
                         </div>
                         <div className="col-md-6  d-flex align-items-center">
                              <div className="product-content">
                                    <h4>${price}</h4> 
                                    <h3>{category}</h3>
                                   <p>{description}</p> 

                                   <button type="button" 
                                   style={{
                                        padding:"10px 30px" ,
                                        border:"none",
                                        background:"Yellow",
                                        color:"#000",

                                        
                                        }}>ADD TO CART</button>
                              </div>
                         </div>
                    </div>
                   )
} 
               </div>
           </section> 
        </div>
    )
}

export default ProductDetails
