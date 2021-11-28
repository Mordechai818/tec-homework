import React, { Component } from 'react'
import ProductsCard from './ProductsCard';
import * as styles from "./Products.module.css"


export default class Products extends Component {

    state = {
        products: [
          {title: 'nike shoes', img:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"},
          {title: 'nike shoes', img:"https://cdn.pixabay.com/photo/2020/07/15/18/26/footwear-5408643__340.jpg"},
          {title: 'nike shoes', img:"https://cdn.pixabay.com/photo/2019/01/24/09/37/shoes-3952048__340.jpg"},
          {title: 'nike shoes', img:"https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619__340.jpg"}
        ]
      };



      render() {
        return (
            <section>
                {this.state.products.map((item, i)=>{
               return <ProductsCard key={i} propsKey ={item}/>
            }
            )}
            </section>
)            
}
}


//      render( 
//          return (
//             <div>
//                 {this.state.products.map((products, i)=> 
//                 <div>
//                 <h1>{products.title}</h1>
//                 <img src={products.img} alt=""/>
//                 <div/>
//                 )}      
//                 <div>afafafa</div>          
//             </div>
//         )
//    ) }

