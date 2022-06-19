import React, { useMemo, useState } from "react";
import {useParams} from "react-router-dom";
import {Category, Product} from '../interfaces';
import Categories from "../modules/Categories";
import '../css/index.css';
import Products from "../modules/Products";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slice/cartSlice";

const Index: (params:any)=>JSX.Element = (params)=>{
    
    const [categories, updateCategories] = useState<Array<Category>>([
        {
            title: 'Food',
            description: 'Order your favorite meal here',
            rating: 2,
            banner: 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1600,h_500,d_uk:cuisines:fish-and-chips-1.jpg/v1/uk/restaurants/176571.jpg'
        },
        {
            title: 'Clothes',
            description: 'Get the latest fashion clothes at affordable prices',
            rating: 4,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/11/aca761da-cca9-4a7a-bcfa-89d606b488e6_800x800.jpg'
        },
        {
            title: 'Books',
            description: 'Check out our online bookshop',
            rating: 4,
            banner: 'https://jooinn.com/images/pile-of-books-7.jpg'
        },
        {
            title: 'Restaurants',
            description: 'Find a classic restaurant',
            rating: 4,
            banner: 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1600,h_500,d_uk:cuisines:chinese-0.jpg/v1/uk/restaurants/126600.jpg'
        }
    ]);
    
    const [latestProducts] = useState<Array<Product>>([
        {
            id: 1,
            title: 'Amazing Dress',
            description: 'Pink Dress and Black Skirt',
            price: 100,
            rating: 2,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/11/aca761da-cca9-4a7a-bcfa-89d606b488e6_800x800.jpg'
        },
        {
            id: 2,
            title: 'Pink Gown and Jacket',
            description: 'Affordable Gown',
            price: 80,
            rating: 4,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/09/cf7cf484-d772-498e-9319-7fa74d414d2d_350x350.jpg'
        },
        {
            id: 3,
            title: 'Pizzeria',
            description: 'Order delicious pizza',
            price: 5,
            rating: 4,
            banner: 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1600,h_500,d_uk:cuisines:pizza-4.jpg/v1/uk/restaurants/114234.jpg'
        },
        {
            id: 4,
            title: 'Silver Ring',
            description: 'Engagement and Wedding Rings',
            price: 120,
            rating: 4,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/09/c8333daf-14d6-4884-89c8-402fd62c3366_350x350.jpg'
        },
        {
            id: 5,
            title: ' Sun Glasses',
            description: 'Get your sun glasses at affordable prices',
            price: 20,
            rating: 4,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/11/78beb1e5-cfd7-45ea-8428-48f29daabae6_350x350.jpg'
        }
    ])

    const cart:{items:Product[]} = useSelector((state)=> state) as {items:Product[]};

    const dispatch = useDispatch();

    return (
        <div id="App" className="d-flex">
            <div id="main" className="container-fluid px-0 mx-0">
                <div id="header" className="d-flex p-4">

                    <h1 className="p-2 app-text-color" style={{width:'225px', fontSize:'1.8rem', whiteSpace:'nowrap'}}>Mobile Store V1</h1>
                    {/* Search Products */}
                    <form className="d-block relative" action="" style={{width:'100%', margin:'auto 50px'}}>
                        <input type="search" placeholder="Search products" style={{background:'#f5f5f5', width:'100%', padding:'0.8rem 50px 0.8rem 1rem', borderRadius:'60px', border:'1px solid #f5f5f5', fontSize:'16px', outline:'none'}}/>
                        <button className="absolute-y-center" style={{background:'none', right:'20px', border:'0'}}><i className="fa fa-search"></i></button>
                    </form>
                    <div className="d-flex" style={{width:'350px'}}>
                        <button className="btn app-text-color m-auto" style={{fontSize:'bold', boxShadow:'none', border:'1px solid #f5f5f5', borderRadius:'20px'}}> <i className="fa fa-sign-in-alt"></i> Login</button>
                    </div>
                </div>

                <section id="categories" className="mt-3 mb-5 px-4">
                    <h1 className="title px-4">Categories</h1>

                    <div className="d-flex cat-container">

                        {<Categories {...categories}/>}
                    </div>
                </section>

                <section id="latest" className="mt-4 py-5 px-4 bg-light">
                    <h1 className="title px-4">Latest Products</h1>

                    <div className="d-flex cat-container flex-wrap">

                        {<Products {...latestProducts}/>}
                    </div>
                </section>
                
                <section id="latest" className="py-4 px-4">
                    <h1 className="title px-4">Popular Products</h1>

                    <div className="d-flex cat-container flex-wrap">

                        {<Products {...latestProducts}/>}
                    </div>
                </section>
                
            </div>
            
            <div id="rightcol" className="d-flex flex-column py-4 relative">

                <div id="cart-head" className="d-flex px-4">
                    <h1 style={{fontSize:'1.3rem'}} className='d-inline-block app-text-color'> <i className="fa fa-shopping-cart"></i> Cart</h1>
                    <span className="px-4 ms-auto" style={{fontSize:'1.3rem', fontWeight:'bold'}}>£
                        
                        {(()=>{
                            let prices: number[] = []
                            cart.items.forEach(item=>{
                                prices.push(item.price);
                            });
                            return prices.reduce((a,b)=>a+b,0);
                        })()}
                    </span>
                </div>

                <div id="view-cart-item" className="mt-4 py-2 px-4">
                    {cart.items.length < 1 ? <h3 className="d-block mx-auto my-4" style={{width:'max-content', fontSize:'1.2rem'}}>Cart is empty</h3> : ''}
                    {(()=>{

                        const cartItems:JSX.Element[] = [];
                        let itemIndex = 0;

                        cart.items.forEach(item=>{
                            const index = itemIndex;

                            cartItems.push(<div key={index} className="d-flex cart-item my-2" title={item.description}>
                                <img src={item.banner} alt={item.title} style={{objectFit:'cover', objectPosition:'top center'}}/>
                                <div className="d-flex flex-column">
                                    <h1 style={{fontSize:'1rem'}} className='px-2'>{item.title}</h1>
                                    <h3 className="px-2 d-flex">£{item.price} <button className="btn text-danger p-1 ms-2" style={{fontSize:'14px', boxShadow:'none', whiteSpace:'nowrap'}} onClick={()=>dispatch(removeFromCart(index))}>remove item</button></h3>
                                </div>
                            </div>);
                            itemIndex++;
                        });

                        return cartItems;
                    })()}
                </div>
                
                <div id="pay-now" className="relative px-4">
                    <form action="" className="d-flex" style={{height:'100%'}}>
                        <button className="d-block btn app-bg-color m-auto" style={{width:'80%', borderRadius:'30px'}} disabled={cart.items.length < 1}>Pay Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Func(props:object){
    return <Index {...props} params={useParams()}/>
}

export default Func;