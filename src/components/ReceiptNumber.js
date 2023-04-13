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
                <i class="fa fa-table"></i>เลขที่ใบเบิกสินค้า</span>
              </span>
              <div class="d-flex justify-content-end pb-2 flx-wrp my-2 responsive">
                <span class="tag mx-2">คลินิก:</span>
                <span class="d-flex">
                  <span class="lh-2-5 mt-1 ">บริษัท สมาร์ทบลอ๊คเทค จำกัด</span>
                </span>
                
                <button class="btn-warning btn-ui-orange">
                <i class="fa fa-refresh"></i>&nbsp;
               โหลดใหม่</button>
                {/* <button class="btn-warning white btn-ui-orange">PICK OUT PRODUCT</button> */}
                <PickupWareHouse/>
              </div>
              {/* <div class="d-flex justify-content-end pb-2 flx-wrp my-2">
                <button class="btn-link linkx mx-1">EXPORT EXCEL</button>
                <button class="btn-primary btn-ui mx-1">IMPORT EXCEL</button>
              </div> */}
            </section>
        

            <div class="d-flex justify-content-end pb-2 flx-wrp my-2">
              <span class="tag2">ค้นหา</span>
              <div class="d-flex">
                <div class="form">
                  <input type="text" name="item-code" placeholder="คำค้น" required autocomplete="off" />
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Password</span> */}
                  </label>
                </div>
              </div>
            </div>
          <div class="d-flex align-items-center">
            
            <span class="paginations">แสดง&nbsp;&nbsp;</span>
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
            <span class="paginations">รายการ</span>
          </div>
          
          <table>
            <thead>
              <tr>
                <th scope="col">ลำดับ</th>
                <th scope="col">เลขที่ใบเบิกสินค้า</th>
                <th scope="col">รหัสสินค้า</th>
                <th scope="col">ชื่อสินค้าและบริการ</th>
                <th scope="col">จำนวน</th>
                <th scope="col">หน่วย</th>
                <th scope="col">ประเภทการเบิก</th>
                <th scope="col">วันที่เบิกสินค้า</th>
                <th scope="col">ผู้รับสินค้า</th>
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
          <div class="d-flex justify-content-between mt-2">
            <div>
              <p class="p-count-table">แสดง 1 ถึง 1 จากทั้งหมด 1 รายการ</p>
            </div>
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