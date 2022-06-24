import React, { useMemo, useState } from "react";
import {useParams} from "react-router-dom";
import {Category, Product} from '../interfaces';
import Categories from "../modules/Categories";
import '../css/index.css';
import Products from "../modules/Products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";
import Cart from "../modules/Cart";

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
            itemCount: 1,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/11/aca761da-cca9-4a7a-bcfa-89d606b488e6_800x800.jpg'
        },
        {
            id: 2,
            title: 'Pink Gown and Jacket',
            description: 'Affordable Gown',
            price: 80,
            rating: 4,
            itemCount: 1,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/09/cf7cf484-d772-498e-9319-7fa74d414d2d_350x350.jpg'
        },
        {
            id: 3,
            title: 'Pizzeria',
            description: 'Order delicious pizza',
            price: 5,
            rating: 4,
            itemCount: 1,
            banner: 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1600,h_500,d_uk:cuisines:pizza-4.jpg/v1/uk/restaurants/114234.jpg'
        },
        {
            id: 4,
            title: 'Silver Ring',
            description: 'Engagement and Wedding Rings',
            price: 120,
            rating: 4,
            itemCount: 1,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/09/c8333daf-14d6-4884-89c8-402fd62c3366_350x350.jpg'
        },
        {
            id: 5,
            title: ' Sun Glasses',
            description: 'Get your sun glasses at affordable prices',
            price: 20,
            rating: 4,
            itemCount: 1,
            banner: 'https://multimedia-image2.wholeecdn.com/product-center-main/2021/12/11/78beb1e5-cfd7-45ea-8428-48f29daabae6_350x350.jpg'
        }
    ])

    const cartSate:{cart:{items:Product[]}} = useSelector((state)=> state) as {cart: {items:Product[]}};
    const viewingProductState: {viewProduct:{product: Product|null}} = useSelector((state)=>state) as ({viewProduct:{product: Product|null}});
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
                <Cart {...cartSate.cart}/>
            </div>

            <div id="view-product" className="fixed" style={{display:'none', width:'100%', height:'100%', left:0, top:0}}>
                
                {(()=>{
                    const viewing: JSX.Element[] = [];

                    if (viewingProductState.viewProduct.product !== null){
                        viewing.push(<div key={1} className="cat-item mx-4">
                            <button className="absolute btn close text-light" style={{background:'#20202034', zIndex:10, right:12, top: 10, boxShadow: 'none', padding:'2px 7px 0px', borderRadius:'50%'}} onClick={()=>{
                                const w:any = window;
                                const $ = w.jQuery;
                                $('#view-product').fadeOut(200)
                            }}><i className="fa fa-times" style={{fontSize:'1.5rem'}}></i></button>
                            <div className="cat-banner" style={{backgroundImage:`url(${viewingProductState.viewProduct.product!.banner})`, backgroundSize:'cover'}}></div>
                            <div className="desc">
                                <h1>{viewingProductState.viewProduct.product!.title}</h1>
                                <h2>{viewingProductState.viewProduct.product!.description}</h2>
                                <h3>ID: {viewingProductState.viewProduct.product!.id}</h3>

                                <div className="ratings my-2 ms-auto" style={{fontSize:'12px'}}>
                                    {(()=>{
                                        let stars:Array<JSX.Element> = [];
                                        for (var i = 0; i < viewingProductState.viewProduct.product!.rating;i++){
                                            stars.push(<i key={i} className="fa fa-star"></i>);
                                        }
                                        
                                        for (i = 0; i < 5 - viewingProductState.viewProduct.product!.rating;i++){
                                            stars.push(<i key={(i + viewingProductState.viewProduct.product!.rating)} className="far fa-star"></i>);
                                        }
                                        
                                        return stars;
                                    })()}
                                </div>
                                
                                <strong className="d-block my-2 px-2" style={{color:'#059705'}}>£{viewingProductState.viewProduct.product!.price}</strong>

                                <div className="d-flex">
                                    <button className="btn p-2" style={{boxShadow:'none'}}><i className="far fa-heart" style={{fontSize:'24px'}}></i></button>
                                    <button className="btn ms-auto" style={{background:'#f31c89', color:'white', borderRadius:'25px'}} onClick={()=>{
                                        const newProduct:Product = JSON.parse(JSON.stringify(viewingProductState.viewProduct.product));
                                        dispatch(addToCart(newProduct))
                                    }}>Add to cart</button>
                                </div>

                            </div>
                        </div>);
                    }
                    return viewing;
                })()}
                    
            </div>
        </div>
    )
}

function Func(props:object){
    return <Index {...props} params={useParams()}/>
}

export default Func;