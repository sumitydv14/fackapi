import { connect } from 'react-redux';
import ProductDetails from '../containers/ProductDetails'
import {addToCart} from '../actions/productAction'


const mapStateToProps=state=>({
 //   data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    // removeToCartHandler:data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps , mapDispatchToProps)(ProductDetails);










//export default Home;