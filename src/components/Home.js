import React from 'react'
import './Home.css'
import Items from './Items'
import Homeflex from './Homeflex'
import Fotter from './Fotter'
import Photobox from './Photobox'
function home() {
    return (
        <div >
           <img className="homeImage" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Events/July/SUD/RedmiN10s/D25245732_WLD_Xiaomi_RedmiNote10S_tallhero_1500x600._CB663803053_.jpg" alt="" />

           <div className="homeItems">
           <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://images-eu.ssl-images-amazon.com/images/I/71LRBr1aLNS._AC_UL500_SR500,400_.jpg"
            
            />

            <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://m.media-amazon.com/images/I/317ZwBbdXLL._AC_SY200_.jpg"
            
            />
             <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://m.media-amazon.com/images/I/41CED+NsupL._AC_SY200_.jpg"
            
            />
             <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://m.media-amazon.com/images/I/41mQtYQUzmL._AC_SY200_.jpg"
            
            />
             <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            
            />
              <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            
            />
             <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            
            />
             <Items id={2133} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver" 
            rating={5}
            price={82599}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            
            />
            </div>
                <div>
                    <Homeflex/>
                     <Photobox/>
                     <Homeflex/>
                     <Photobox/>
                    <Fotter/>
                </div>
        
        </div>
    )
}

export default home
