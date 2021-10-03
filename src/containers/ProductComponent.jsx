import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function ProductComponent() {

    const products = useSelector((state) => state.productReducers.products);
   const { id, title  , category } = products;

  const renderList = products.map((products) =>{

      const {id, title , image , price , category} = products ; 
  
      return(
       
        <div className="col-md-4 mt-5 mb-5 "   key={id}>
            <Link to={`/product/${id}`} >
        <div className="card" style={{height:"400px" ,padding:"20px 0px 0px 0px"}}  >
            <img className="" src={image} alt={title}  style={{width:"200px" , height:"200px" , margin:"auto"}} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"> ${price}</p>
               <p>{category}</p>
            </div>
        </div>
        </Link>
        </div>
   
      )


  })

    return (
        <div>
                     <section>
                         <div className="container">
                             <div className="row">
                             {renderList}
                             </div>
                         </div>
                      
                       </section>
        </div>
    )
}

export default ProductComponent
