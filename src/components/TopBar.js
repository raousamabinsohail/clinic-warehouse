import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="topnav">
          <Link to="/examination" className="site-title">
            <i class="fa fa-external-link"></i> examination

          </Link>
          <Link to="/lab" className="site-title">
            <i class="fa fa-external-link"></i> LAB
          
          </Link>
          <div class="dropdown">
            <button class="dropbtn">Reports
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to="/report">Report</Link>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <Link to="/receipt-number" className="site-title">
            <i class="fa fa-external-link"></i> เลขที่ใบเบิกสินค้า
          </Link>
          <Link to="/receiving" className="site-title">
            <i class="fa fa-cart-arrow-down faa-vertical"></i> รับสินค้าเข้าคลัง
          </Link>
          <Link to="/" className="site-title">
            <i class="fa fa-list-alt"></i>   ทะเบียนสินค้าและยา
          </Link>
          <span class="pos-rel">
            <span class="pos-abs">MCS CLOUD</span>
            <img src="assets/icons/bg_head_green.png" alt="loading..." />
          </span>
        </div>

        {/* <div class="topnav" >
          <a href="#home" class="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <div class="dropdown">
            <button class="dropbtn">Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

        </div> */}


      </React.Fragment>

    );
  }
}

export default TopBar;