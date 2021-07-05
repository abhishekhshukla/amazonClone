import React from 'react'
import ReorderRoundedIcon from '@material-ui/icons/ReorderSharp';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import './Navebar.css'
function Navbar() {
    return (
        <div className="navbar">
            <div className="menuIcon">
            <ReorderRoundedIcon/>
            <strong>All</strong>
            </div>
            <div className="navbarContent">
                <span>Best Sellers</span>
            </div>

            <div className="navbarContent">
                <span>Mobiles</span>
            </div>

            <div className="navbarContent">
                <span>Fashion</span>
            </div>

            <div className="navbarContent">
                <span>Electronics</span>
            </div>

            <div className="navbarContent">
                <span>New Release</span>
            </div>

            <div className="navbarContent hoverPrime">
                <span>Prime</span>
                < ArrowDropDownSharpIcon/>
                <div className="dropDownPrime">
                    <img className="imagePrime" src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg" alt="" />
                </div>

            </div>

            <div className="navbarContent">
                <span>Customer Service</span>
            </div>

            <div className="navbarContent">
                <span>Computers</span>
            </div>

            <div className="navbarContent">
                <span>Amazon Pay</span>
            </div>
            <div className="navbarContent">
                <span>Home & Kitchen</span>
            </div>

            <div className="navbarContent">
                <span>Toys & Games</span>
            </div>
            <div className="navImage">
                <img  className="navImage" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="" />
            </div>
        </div>
    )
}

export default Navbar
