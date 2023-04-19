import React, { useState } from "react";



function Lab() {


    return (

        <React.Fragment>
            <section>
                <div class="card card-lab">
                    <div class="row">
                        <div class="col-lg-3 col-12">
                            <div class="lab-section-1">
                                <div class="d-flex">
                                    <div>
                                        <span class="profile-lab-1">
                                            <img class="profile-lab" src="https://www.mcscloud.co/img/hm_pro.png" alt="loading..." />
                                        </span>
                                    </div>
                                    <div class="flex-column-lab">
                                        <span>Pick a queue</span>
                                        <span>Age : Select queue</span>
                                        <span>HN : Select queue</span>
                                        <span>Congenital disease: choose a queue</span>
                                        <span>Drug allergies/food allergies: choose a queue</span>
                                        <span class="d-flex">
                                            <span>Memo&nbsp;:&nbsp;</span>
                                            <span><input class="input-lab" type="text" placeholder="Memo Remark" /></span>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div class="lightgreen-box py-2">
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-warning mx-2">photo gallery</button>
                                    <button class="btn btn-primary btn-blue-lab mx-2">BODY CHART</button>
                                </div>
                            </div>
                            <div class="dark-green">
                                <span>Queue waiting for LAB results</span>
                                <span class="circle-lab">0</span>
                            </div>
                            <div class="color-green-lab">
                                <div class="white-box">
                                    <span>There is no waiting queue for LAB results.</span>
                                    <hr class="hrr" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 md-d-none">
                            <div class="flex-lab mx-2 my-2">
                                <span>queue</span>
                                <span>informtion</span>
                                <span>service history</span>
                            </div>
                            <div class="mx-4 my-2">
                                <span>ICD10&nbsp;:&nbsp;</span>
                                <span><input type="password" placeholder="ICD10 code" /></span>
                                <span><input type="text" placeholder="ICD10 name" /></span>

                            </div>
                            <div class="mx-5 my-2">
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css"><b class="bold-lab">Start with</b></label>
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                <label for="javascript"><b class="bold-lab">Contain with</b></label>
                            </div>
                            <div class="tabss">
                                <button class="btn btn-success btn-lab">LAB</button>
                                <button class="btn btn-success btn-lab">PERSIPTION LIST</button>
                                <button class="btn btn-success btn-lab">ASSESMENT</button>
                            </div>
                            <section class="d-none">
                                <div class="tabss-01 d-flex justify-content-between my-3">
                                    <span class="lab-01-text">&nbsp;PRINT LAB RESULTS</span>
                                    <button class="btn-success print-lab-btn">PRINT LAB RESULTS</button>
                                </div>
                                <div class="table-lab d-flex">
                                    <div class="w-50">LAB</div>
                                    <div class="w-50">DATE</div>
                                </div>
                            </section>

                            <section class="d-none" >
                                <div class="d-flex mx-3 my-3">
                                    <button class="btn-success btn-green-lab mx-1 my-1">PRESCRIPTION</button>
                                    <button class="btn-primary btn-blue-lab mx-1 my-1">PRINT DOUCUMENT</button>
                                    <button class="btn-primary btn-blue-lab mx-1 my-1">MAKE AN APPOINTMENT</button>
                                    <button class="btn-primary btn-blue-lab mx-1 my-1">SAVE AND SUBMIT THE QUEUE</button>
                                    <button class="btn-success btn-green-lab mx-1 my-1">Total 0 Baht</button>
                                </div>
                                    <table>
            <thead>
              <tr>
                <th scope="col">ลำดับ</th>
                <th scope="col">เลขที่ใบรับสินค้า</th>
                <th scope="col">รหัสสินค้า</th>
                <th scope="col">ชื่อสินค้าและบริการ</th>
                <th scope="col">จำนวน</th>
                <th scope="col">หน่วย</th>
                <th scope="col">ประเภทการรับ</th>
                <th scope="col">วันที่ใบรับสินค้า</th>
                <th scope="col">ผู้รับสินค้า</th>
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
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>

                <td data-label="DATE ADDED">$1,190</td>
                {/* <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td> */}
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
                <td data-label="SELLING PRICE">$22.00</td>
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
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="DATE ADDED">$1,190</td>

              </tr>
            </tbody>
                                    </table>
                            </section>
                            <section >
                                <div class="tabss-01 d-flex justify-content-between my-3">
                                    <span class="lab-01-text">&nbsp;physical assessment</span>
                                    <button class="btn-success print-lab-btn">PHYSICAL ASSESMENT</button>
                                </div>
                                <table>
            <thead>
              <tr>
                <th scope="col">ลำดับ</th>
                <th scope="col">เลขที่ใบรับสินค้า</th>
                <th scope="col">รหัสสินค้า</th>
                <th scope="col">ชื่อสินค้าและบริการ</th>
                <th scope="col">จำนวน</th>
              
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
             
            </tbody>
                                    </table>
                            </section>

                        </div>

                        <div class="col-lg-2 md-d-none">
                            <div class="lab-3 py-3">
                                <div class="dark-green my-2">
                                    <span>treatment history</span>
                                </div>
                                <div class="lab-3-white-box">
                                    <div class="white-box">
                                        <span>no medical history</span>
                                        <hr class="hrr" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>

    );
}

export default Lab;
