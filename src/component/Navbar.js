import React from 'react';
import '../styles/Navbar.css';

const Navbar =()=> {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop">My Shoping Cart</span>
            <div className="cart">
                <span>
                    <i class="fas fa-cart-plus"></i>
                </span>
                <span>1</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar