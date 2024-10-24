import React from 'react';
import RoseCart from './sevengul';
import './App.css';


function App(){
 let carts = [{ image: 'https://7gul.az/src/img/products/7gul-393474_3be3.jpeg', name: 'buket1' },
              { image: 'https://7gul.az/src/img/products/7gul-485745_80ac.jpeg', name: 'buket2' },
              { image: 'https://7gul.az/src/img/products/7gul-577176_c1b9.jpeg', name: 'buket3' },
              { image: 'https://7gul.az/src/img/products/7gul-822844_c91e.jpeg', name: 'buket4' },
            ]
            
            let NevArray=[];
            carts.forEach((cart,index)=>{
              NevArray.push(<RoseCart key={index} image={cart.image} name={cart.name}/>)
            });
            return(
              <div className='App'>
               {NevArray}
              </div>
            );
};
export default App;

 






















