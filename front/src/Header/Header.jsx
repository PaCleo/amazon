import React, { useState } from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { signOut } from '../Login/Login';


function Header(searchProducts) {
    const [{ basket, }, dispatch] = useStateValue();
    const cachedUser = localStorage.getItem('usuario');


    const handleAuth = () => {
        if (cachedUser) {
            signOut();
        }
    };
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"
                />
            </Link>

            <div className="header_search">
                <input 
                    className="header_searchInput"
                    type="text" name="" id=""
                />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!cachedUser && "/login"}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_optionLineOne">Hello {!cachedUser ? 'Guest' : cachedUser}</span>
                        <span className="header_optionLineTwo">{cachedUser ? "Sign out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>


            </div>
        </div>
    );
}

export default Header;