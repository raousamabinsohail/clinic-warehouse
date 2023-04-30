import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <Link to="/examination" className="site-title">
            <i className="fa fa-external-link"></i> examination

          </Link>
          <Link to="/lab" className="site-title">
            <i className="fa fa-external-link"></i> LAB
          
          </Link>
          <div className="dropdown">
            <button className="dropbtn">Reports
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/report/daily-income-report"><i className="fa fa-file"></i> 1 Daily income report</Link>
              <Link to="/report/monthly-income-report"><i className="fa fa-file"></i> 2 Monthly income reports</Link>
              <Link to="/report/annual-income-report"><i className="fa fa-file"></i> 3 Anual income reports</Link>
              <Link to="/report/sales-report"><i className="fa fa-file"></i> 4 Sales report</Link>
              <Link to="/report/acc-recive-report"><i className="fa fa-file"></i> 5 Account Receive-Pay Monthly Product (Excel)</Link>
              <Link to="/report/commision-report"><i className="fa fa-file"></i> 6 commission report employee sales</Link>




              <Link to="/report/employee-report"><i className="fa fa-file"></i> 7 Employee Actiom Fee Report</Link>
              <Link to="/report/inventory-report"><i className="fa fa-file"></i> 8 Inventory Report (Show Costs)</Link>
              <Link to="/report/appointment-report"><i className="fa fa-file"></i> 9 Appointment Report</Link>
              <Link to="/report/overdue-report"><i className="fa fa-file"></i> 10 Overdue Report</Link>

              <Link to="/report/best-selling-report"><i className="fa fa-file"></i> 11 Best selling product report</Link>
              <Link to="/report/classified-items-report"><i className="fa fa-file"></i> 12 Reports of services users classified by items</Link>
              <Link to="/report/remaning-report"><i className="fa fa-file"></i> 13 remaining COurse report</Link>
              <Link to="/report/summary-report"><i className="fa fa-file"></i> 14 Summary of sales, income, expenses, profit</Link>

              
              <Link to="/report/daily-service-report"><i className="fa fa-file"></i> 15 Daily Service user list report</Link>
              <Link to="/report/inventory-2-report"><i className="fa fa-file"></i> 16 Inventory Reports</Link>
              <Link to="/report/customer-birthday-report"><i className="fa fa-file"></i> 17 Customer Birthday Report </Link>
              <Link to="/report/income-report"><i className="fa fa-file"></i> 18 Income report Divided by category</Link>

              <Link to="/report/balance-report"><i className="fa fa-file"></i> 19 balance Report</Link>
              <Link to="/report/activate-report"><i className="fa fa-file"></i> 20 Active Substances report</Link>
              <Link to="/report/narcotic-report"><i className="fa fa-file"></i> 21 Narcototic Substances Report</Link>
              <Link to="/report/commission-2-report"><i className="fa fa-file"></i> 22 Diagnostic Statistics</Link>

              <Link to="/report/commission-2-report"><i className="fa fa-file"></i> 23 Commission Report Employee Sales (Test)</Link>
              <Link to="/report/cut-off-report"><i className="fa fa-file"></i> 24 Daily cit-off Reports</Link>
              <Link to="/report/daily-bill-report"><i className="fa fa-file"></i> 25 Daily Bill Cancellition reports</Link>
              
            </div>
          </div>

          <Link to="/receipt-number" className="site-title">
            <i className="fa fa-external-link"></i> เลขที่ใบเบิกสินค้า
          </Link>
          <Link to="/receiving" className="site-title">
            <i className="fa fa-cart-arrow-down faa-vertical"></i> รับสินค้าเข้าคลัง
          </Link>
          <Link to="/" className="site-title">
            <i className="fa fa-list-alt"></i>   ทะเบียนสินค้าและยา
          </Link>
          <span className="pos-rel">
            <span className="pos-abs">MCS CLOUD</span>
            <img src="assets/icons/bg_head_green.png" alt="loading..." />
          </span>
        </div>

        {/* <div className="topnav" >
          <a href="#home" className="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <div className="dropdown">
            <button className="dropbtn">Dropdown
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
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