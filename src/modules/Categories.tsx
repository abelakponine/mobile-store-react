import { Category } from "../interfaces";

const Categories: (categories:Array<Category>)=>any = (categories)=>{
    
    let cat:JSX.Element[] = [];
    let key = 1;

    for(var x in categories){
        
        let category = categories[x];

        cat.push(
            <div key={key} className="cat-item">
                <div className="cat-banner" style={{backgroundImage:`url(${category.banner})`, backgroundSize:'cover'}}></div>
                <div className="desc">
                    <h1>{category.title}</h1>
                    <h2>{category.description}</h2>

                    <div className="ratings mt-3 ms-auto" style={{fontSize:'12px'}}>
                        {(()=>{
                            let stars:Array<JSX.Element> = [];
                            for (var i = 0; i < category.rating;i++){
                                stars.push(<i key={i} className="fa fa-star"></i>);
                            }
                            
                            for (i = 0; i < 5 - category.rating;i++){
                                stars.push(<i key={(i + category.rating)} className="far fa-star"></i>);
                            }
                            
                            return stars;
                        })()}
                    </div>
                </div>
            </div>
        )
        key++;
    }

    return cat;
}

export default Categories;
