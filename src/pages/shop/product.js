import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props)=>{
    const {id, productImage, productName, price} = props.data;
    const {createItem, addToCart, rmToCart} = useContext(ShopContext)
    const isInCart = createItem?.some((item)=>item.id === id)
    return(
        <div className="col-3">
            <img src={productImage} className="w-100"/>
            <h5>{productName}</h5>
            <p>Price : {price}$</p>
            <button className="btn btn-info btn-sm" onClick={()=>addToCart(id)}>+</button>
            {isInCart&&<span className="mx-1"> {createItem.find((row) => row.id === id)?.count || 0}</span>}
            {isInCart&&<button className="btn btn-info btn-sm" onClick={()=>rmToCart(id)}>-</button>}
        </div>
    )
}
export default Product;