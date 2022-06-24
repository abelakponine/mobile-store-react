import React from "react";
import { useDispatch } from "react-redux";
import { JsxEmit } from "typescript";
import { Product } from "../interfaces";
import { decreaseItemCount, increaseItemCount, removeFromCart } from "../redux/slice/cartSlice";

const Cart:(cart:{items:Product[]})=>JSX.Element = ({items})=>{

    const dispatch = useDispatch();

    return (
        <>
            
            <div id="cart-head" className="d-flex px-4">
                <h1 style={{fontSize:'1.3rem'}} className='d-inline-block app-text-color'> <i className="fa fa-shopping-cart"></i> Cart</h1>
                <span className="px-4 ms-auto" style={{fontSize:'1.3rem', fontWeight:'bold'}}>£
                    
                    {(()=>{
                        let prices: number[] = []
                        items.forEach(item=>{
                            prices.push(item.price * item.itemCount!);
                        });
                        return prices.reduce((a,b)=>a+b,0);
                    })()}
                </span>
            </div>

            <div id="view-cart-item" className="mt-4 py-2 px-4">
                {items.length < 1 ? <h3 className="d-block mx-auto my-4" style={{width:'max-content', fontSize:'1.2rem'}}>Cart is empty</h3> : ''}
                {(()=>{

                    const cartItems:JSX.Element[] = [];
                    let itemIndex = 0;

                    items.forEach(item=>{
                        const index = itemIndex;

                        cartItems.push(<div key={index} className="d-flex cart-item my-2" title={item.description}>
                            <img src={item.banner} alt={item.title} style={{objectFit:'cover', objectPosition:'top center'}}/>
                            <div className="d-flex flex-column">
                                <h1 style={{fontSize:'1rem'}} className='px-2'>{item.title}</h1>
                                <h3 className="px-2 d-flex" style={{color:'#059705'}}>£{item.price * item.itemCount!}
                                
                                <button className="btn text-danger p-1 ms-3" style={{fontSize:'14px', boxShadow:'none', whiteSpace:'nowrap'}} onClick={()=>dispatch(removeFromCart(index))}>remove item</button></h3>

                                <div className="d-flex mx-3">
                                    <button className="btn px-1 py-0 bg-light" onClick={()=>dispatch(decreaseItemCount(item))}>-</button> <span className="d-block my-auto mx-2">{item.itemCount}</span> <button className="btn px-1 py-0 bg-light" onClick={()=>dispatch(increaseItemCount(item))}>+</button>
                                </div>
                            </div>
                        </div>);
                        itemIndex++;
                    });

                    return cartItems;
                })()}
            </div>
            
            <div id="pay-now" className="relative px-4">
                <form action="" className="d-flex" style={{height:'100%'}}>
                    <button className="d-block btn app-bg-color m-auto" style={{width:'80%', borderRadius:'30px'}} disabled={items.length < 1}>Pay Now</button>
                </form>
            </div>
        </>
    )
}

export default Cart;