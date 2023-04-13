import React, { useState } from "react";
import Modal from 'react-modal';
import IncreaseModal from "./IncreaseModal";

function CashVoucherModal() {
    const [modalOpen1, setModalOpen1] = useState(false);
    return (

        <React.Fragment>
            <button onClick={setModalOpen1} class="btn modal-btn">+&nbsp;บัตรแทนเงินสด</button>
            <Modal className="custom-modal"
                isOpen={modalOpen1}
                onRequestClose={() => setModalOpen1(false)}
            // style={customStyles1}
            >
                <div class="modal-header d-flex justify-content-space-between">
                    <span>เพิ่ม VOUCHER</span>
                    <span class="cursor" onClick={() => setModalOpen1(false)}><i class="fa fa-times"></i></span>
                </div>
                <div class="mx-4 my-4">
                    <div class="row scroll">
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">Item Code</span>
                            <div class="form">
                                <input type="text" name="item-code" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Password</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">รหัสบาร์โค้ด</span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ชื่อ Voucher <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ราคาขาย <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-2 col-12">
                            <span class="label-ui">Voucher Credit <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>


                        <div class="col-lg-2 col-12">
                            <span class="label-ui">
                                ค่าคอมขายทั่วไป</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-4 col-12">
                            <span class="label-ui">
                            หมายเหตุ </span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                       
                        <div class="col-lg-2 col-12 ">
                            <span class="label-ui">หมวดหมู่ใบเสร็จ</span>
                            <span class="d-flex">
                                <div class="form">
                                    <select class="select-width" name="cars" id="cars">
                                        <option value="volvo">-</option>
                                    </select>
                                    <label for="name" class="label-name">
                                        {/* <span class="content-name">Name</span> */}
                                    </label>
                                </div>
                                <IncreaseModal text={'เพิ่ม หมวดหมู่ใบเสร็จ'} />
                            </span>
                        </div>

                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ระยะเวลา Voucher (วัน) <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>




                    </div>
                    <div class="d-flex wrap">

                        <span>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />&nbsp;
                            <label for="vehicle2">  ออกบิล Vat.</label>&nbsp;&nbsp;&nbsp;
                        </span>

                    </div>
                </div>
                <div class="d-flex justify-content-end mx-3">
                <button class="btn-primary btn-ui">บันทึก</button>
                <button class="btn-primary btn-ui">บันทึกและปิด</button>
                <button onClick={() => setModalOpen1(false)} class="btn-link linkx mx-1">CLOSE</button>

                </div>





            </Modal>
        </React.Fragment>

    );
}

export default CashVoucherModal;

