import React from 'react';
import PickupWareHouse from './PickupWarehouse';

class ReceiptNumber extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <div class="container-fluid">
          <div class="card card-ui">
            <section>
              <span class="pos-rel">
                <span class="chitt">
                <i class="fa fa-table"></i> Receipt Number</span>
              </span>
              <div class="d-flex justify-content-end pb-2 flx-wrp my-2 responsive">
                <span class="tag mx-2">Clinic:</span>
                <span class="d-flex">
                  <span class="lh-2-5 mt-1 ">Smart Block Tech CO.,LTD</span>
                </span>
                {/* <span class="tag">Product type:</span>
                <div class="d-flex">
                  <select class="select-ui mx-2" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div> */}
                <button class="btn-warning btn-ui-orange">
                <i class="fa fa-refresh"></i>&nbsp;
                RELOAD</button>
                {/* <button class="btn-warning white btn-ui-orange">PICK OUT PRODUCT</button> */}
                <PickupWareHouse/>
              </div>
              {/* <div class="d-flex justify-content-end pb-2 flx-wrp my-2">
                <button class="btn-link linkx mx-1">EXPORT EXCEL</button>
                <button class="btn-primary btn-ui mx-1">IMPORT EXCEL</button>
              </div> */}
            </section>
        

            <div class="d-flex justify-content-end pb-2 flx-wrp my-2">
              <span class="tag2">search</span>
              <div class="d-flex">
                <div class="form">
                  <input type="text" name="item-code" placeholder="keyword" required autocomplete="off" />
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Password</span> */}
                  </label>
                </div>
              </div>
            </div>
          <div class="d-flex align-items-center">
            
            <span class="paginations">show&nbsp;&nbsp;</span>
            <span>
              <div class="form w-60px">
                <select class="select-width" name="cars" id="cars">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>

                </select>
                <label for="name" class="label-name">
                  {/* <span class="content-name">Name</span> */}
                </label>
              </div>
            </span>
            <span class="paginations">list</span>
          </div>
          
          <table>
            <thead>
              <tr>
                <th scope="col">NUMBER</th>
                <th scope="col">RECEIPT NUMBER</th>
                <th scope="col">PRODUCT CODE</th>
                <th scope="col">PRODUCT AND SREVICE NAME</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">UNIT</th>
                <th scope="col">WIDTHDRAW TYPE</th>
                <th scope="col">PICKUP DATE</th>
                <th scope="col">PICKER</th>
                <th scope="col">STATUS</th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DATE ADDED">$1,190</td>
                
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">Provide service</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="BALANCE">$1,190</td>

                
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">Provide service</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="BALANCE">$1,190</td>
              
                <td data-label="DATE ADDED">$1,190</td>
                
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="BALANCE">$1,190</td>
            
                <td data-label="DATE ADDED">$1,190</td>
                
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end">
            <div class="pagination">
              <a href="#">Previous</a>
              <a href="#">1</a>
              <a class="active" href="#">2</a>
              <a href="#">Next</a>
            </div>
          </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default ReceiptNumber;