import React, { useState } from "react";
// import Modal from "./modal";
import Modal from 'react-modal';
import GoodsAndDrugsModal from "./GoodsAndDrugsModal";
import CouseAndTreatmentsModal from "./CouseAndTreatmentsModal";
import LabModal from "./LabModal";
import OperationModal from "./OperationModal";
import CashVoucherModal from "./CashVoucherModal";
import CommodityModal from "./CommodityModal";
import PromotionModal from "./PromotionModal";
import ServiceAndTreatmentModal from "./ServiceAndTreatmentModal";
import FontAwesome from 'react-fontawesome'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Registration() {
  const [modalOpen, setModalOpen] = useState(false);


  return (

    <React.Fragment>
      <Modal
        isOpen={modalOpen}
        className="custom-modal-1 "
        onRequestClose={() => setModalOpen(false)}
      // style={customStyles}
      >
        <div class="modal-header d-flex justify-content-space-between">
          <span class="heading-15">CHOOSE A PRODUCT TYPE</span>
          <span class="cursor" onClick={() => setModalOpen(false)}><i class="fa fa-times"></i></span>

        </div>
        <div class="content-box">
          {/* <button class="btn modal-btn">+&nbsp;dragon</button> */}
          <GoodsAndDrugsModal />
          <CouseAndTreatmentsModal />
          <LabModal />
          <OperationModal />
          <CashVoucherModal />
          <CommodityModal />
          <PromotionModal />
          <ServiceAndTreatmentModal />


        </div>

      </Modal>
      <div class="container-fluid">
        <div class="card card-ui">
          <section>
            <span class="pos-rel">
              <span class="chitt">

              <i class="fa fa-table"></i>&nbsp;
                Product and drug registration</span>
            </span>
            <div class="d-flex justify-content-end pb-2 flx-wrp my-2 responsive">
              <span class="tag mx-2">Clinic:</span>
              <span class="d-flex">
                <span class="lh-2-5 mt-1">Smart Block Tech CO.,LTD</span>
              </span>
              <span class="tag">Product type:</span>
              <div class="d-flex">
                <select class="select-ui mx-2" name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <button class="btn-warning btn-ui-orange">
                {/* <FontAwesome
                  className="super-crazy-colors"
                  name="rotate"
                  size="1x"
                  // spin
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /> */}<i class="fa fa-refresh"></i>&nbsp;
                RELOAD</button>
              <button onClick={setModalOpen} class="btn-primary btn-ui-home"><i class="fa fa-plus"></i>&nbsp;ADD DRUG/PRO</button>
            </div>
            <div class="d-flex justify-content-end pb-2 flx-wrp my-2">
              <button class="btn-link linkx mx-1">EXPORT EXCEL</button>
              <Link to="/import" >
                <button class="btn-primary btn-ui-home mx-1">
                  IMPORT EXCEL
                </button></Link>
            </div>
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
                <th scope="col">CODE</th>
                <th scope="col">ITEM CODE</th>
                <th scope="col">PRODUCT AND SREVICE NAME</th>
                <th scope="col">PRODUCT TYPE</th>
                <th scope="col">SELLING PRICE</th>
                <th scope="col">BALANCE</th>
                <th scope="col">DRUG NAME(GENARIC)</th>
                <th scope="col">PRINT NAME</th>
                <th scope="col">EXPIRATION DATE</th>
                <th scope="col">DATE ADDED</th>
                <th scope="col"></th>
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
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="NUMBER">01</td>
                <td data-label="CODE">098767</td>
                <td data-label="ITEM CODE">$1,190</td>
                <td data-label="PRODUCT AND SREVICE NAME">ZELBURY</td>
                <td data-label="PRODUCT TYPE">DRESS</td>
                <td data-label="SELLING PRICE">$22.00</td>
                <td data-label="BALANCE">$1,190</td>
                <td data-label="DRUG NAME(GENARIC)">TOXIC OOIU</td>
                <td data-label="PRINT NAME">VIVA S1</td>
                <td data-label="EXPIRATION DATE">04/01/2016</td>
                <td data-label="DATE ADDED">$1,190</td>
                <td data-label="">
                  <button class="table-btn">
                    <i class="fa fa-edit tab-icon-size"> <span class="inherit-family">correct</span></i>
                  </button>
                  <div>
                    <i class="fa fa-times tab-x-btn"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end">
            <div class="pagination">
              <a href="#">Previous</a>
              <a href="#">1</a>
              <a class="active" href="#">2</a>
              <a href="#">3</a>
              <a href="#">Next</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default Registration;


