import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import SerachIcon from '@material-ui/icons/Search'
import ShopingBasketIcon from  '@material-ui/icons/AddShoppingCart';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';

function Header() {
    return (
        
             <nav className="header">
                 <Link to='/'>
                 <img className="headerLogo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
                 </Link>
                 <Link to="/">
                 <div className='locationLogo'>
                   <RoomOutlinedIcon/>
                 </div>
                 </Link>
                 <Link to="/address" className="headerLink">
                    <div className="headerOptions">
                    <span className="headerLine1">Hello</span>
                     <span className="headerLine2">Select your address</span>
                     </div> 
                   </Link>
                 <div className="headerSearch">

                 <input type="text" className="headerInput" />
                 <SerachIcon className="headerSearchIcon"/>
                 </div>

                 <div className="headerItems">
                  
                 <div className="headerLink">
                    <div className="flag">
                      <img className="indianFlag" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="" />
                      <ArrowDropDownSharpIcon/>
                     </div> 

                   <div className="hoverLanguage">
                         <div className="inputLanguage">
                            <li><input type="radio" name="lang" id="" className="langInput"/>  English</li>
                            <li><input type="radio" name="lang" id="" className="langInput"/>  हिंदी - HI</li>
                            <li><input type="radio" name="lang" id="" className="langInput"/>  தமிழ் - TA</li>
                            <li><input type="radio" name="lang" id="" className="langInput"/>  తెలుగు - TE</li>
                            <li><input type="radio" name="lang" id="" className="langInput"/>  മലയാളം - ML</li>
                            <img className="indianFlag" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="  " />
                                         You are shopping on Amazon.in.
                         </div>
                     </div>
                   </div>
                   

                 <div className="accountInfo">
                    <div className="headerOptions">
                    <span className="headerLine1">Hello Sign In</span>
                     <span className="headerLine2">Account & List</span>
                     </div> 
                       
                    <div className="hoverAccount">
                       <div className="list">
                          <ul className="listItems">
                            <li> <strong>Your List</strong></li>
                         <li>Create a Wish List</li>
                          <li>Find a Wish List</li>
                          <li>Wish from Any Website</li>
                          <li>Baby Wish List</li>
                          <li>Discover Your Style</li>
                          <li>Explore Showroom</li>
                          </ul>     

                       </div>
                       <div className="account">
                              <ul className="listItems">
                              <li><strong>Your Account</strong></li>
                                <li>Your Orders</li>
                                <li>Your Wish List</li>
                                <li>YOur Recommendation</li>
                                <li>Your Prime Membership</li>
                                <li>Your Prime Video</li>
                                <li>Your Subscribe & Save Items</li>
                                <li>Memberships & Subscriptions</li>
                                <li>Your Amazon Business Account</li>
                                <li>Your Seller Account</li>
                                <li>Manage Your Content and Devices</li>
                              </ul>

                       </div>

                      
                      </div>   

                   </div>
                   <Link to="/orderDetails" className="headerLink">
                       <div className="headerOptions">
                     <span className="headerLine1">Return</span>
                     <span className="headerLine2">& Order</span>
                       </div>
                   </Link> 
                     
                   <Link to="/confermOrder" className="headerLink">
                     <div className="basketIcon">
                     <ShopingBasketIcon/>
                     <span className="headerLine2 basketCount">0</span>
                   </div>
                   </Link> 
                 </div>
                 
             </nav>
        
    )
}
export default Header
