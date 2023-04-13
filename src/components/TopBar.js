import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

class TopBar extends React.Component {
  render() {
    return (
        <React.Fragment>
             <div class="topnav">
            <Link to="/receipt-number" className="site-title">
            <i class="fa fa-external-link"></i> เลขที่ใบเบิกสินค้า
            </Link>  
            <Link to="/receiving" className="site-title">
            <i class="fa fa-cart-arrow-down faa-vertical"></i> รับสินค้าเข้าคลัง 
            </Link>
             <Link to="/" className="site-title">
             <i class="fa fa-list-alt"></i>   ทะเบียนสินค้าและยา
            </Link>
                {/* <a class="active" href="#home">Home</a> */}
                <span class="pos-rel">
                  <span class="pos-abs">MCS CLOUD</span>
              <img src="assets/icons/bg_head_green.png"alt="loading..."/>
              </span>
            </div>
        </React.Fragment>
      
    );
  }
}

export default TopBar;