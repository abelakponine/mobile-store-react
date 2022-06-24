import { useDispatch } from "react-redux";
import { Product } from "../interfaces";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";
import { showProduct } from "../redux/slice/productSlice";
const Products: (products:Array<Product>)=>any = (products)=>{
    
    let cat:JSX.Element[] = [];
    let key = 1;
    
    const dispatch = useDispatch();

    for(var x in products){
        
        let product = products[x];

        cat.push(
            <div key={key} className="cat-item mx-4" onClick={()=>dispatch(showProduct(product))}>
                <div className="cat-banner" style={{backgroundImage:`url(${product.banner})`, backgroundSize:'cover'}}></div>
                <div className="desc">
                    <h1>{product.title}</h1>
                    <h2>{product.description}</h2>
                    <h3>ID: {product.id}</h3>

                    <div className="ratings my-2 ms-auto" style={{fontSize:'12px'}}>
                        {(()=>{
                            let stars:Array<JSX.Element> = [];
                            for (var i = 0; i < product.rating;i++){
                                stars.push(<i key={i} className="fa fa-star"></i>);
                            }
                            
                            for (i = 0; i < 5 - product.rating;i++){
                                stars.push(<i key={(i + product.rating)} className="far fa-star"></i>);
                            }
                            
                            return stars;
                        })()}
                    </div>
                    
                    <strong className="d-block my-2 px-2" style={{color:'#059705'}}>£{product.price}</strong>

                    <div className="d-flex">
                        <button className="btn p-2" style={{boxShadow:'none'}}><i className="far fa-heart" style={{fontSize:'24px'}}></i></button>
                        <button className="btn ms-auto" style={{background:'#f31c89', color:'white', borderRadius:'25px'}} onClick={(event)=>{
                            event.preventDefault();
                            event.stopPropagation();
                            const newProduct:Product = JSON.parse(JSON.stringify(product));
                            dispatch(addToCart(newProduct))
                        }}>Add to cart</button>
                    </div>

                </div>
            </div>
        )
        key++;
    }

    return cat;
}

export default Products;
