

import React, { useState } from "react";
import Modal from 'react-modal';
import IncreaseModal from "./IncreaseModal";

function CouseAndTreatmentsModal() {
    // const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    return (

        <React.Fragment>
            <button onClick={setModalOpen} class="btn modal-btn">+&nbsp;คอร์สและทรีทเมนท์</button>
            <Modal className="custom-modal"
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
            // style={customStyles1}
            >
                <div class="modal-header d-flex justify-content-space-between">
                    <span>เพิ่ม คอร์สและทรีทเมนท์</span>
                    <span class="cursor" onClick={() => setModalOpen(false)}><i class="fa fa-times"></i></span>
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
                            <span class="label-ui">ชื่อทรีทเมนท์ <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">จำนวนครั้ง <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12 ">
                            <span class="label-ui">หน่วย</span>
                            <span class="d-flex">
                                <div class="form">
                                    <select class="select-width" name="cars" id="cars">
                                        <option value="volvo">-</option>
                                        <option value="roll">roll</option>
                                        <option value="grain">grain</option>
                                        <option value="CC">CC</option>
                                        <option value="TAB">TAB</option>
                                        <option value="PIECE">PIECE</option>
                                        <option value="cap">Cap</option>
                                        <option value="TAB">bottle</option>
                                        <option value="PIECE">bulb</option>
                                        <option value="cap">encelope</option>
                                    </select>
                                    <label for="name" class="label-name">
                                        {/* <span class="content-name">Name</span> */}
                                    </label>
                                </div>
                                <IncreaseModal text={'เพิ่ม หน่วย'} />
                            </span>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ระยะเวลาคอร์ส (เดือน)</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ต้นทุนรวมทั้งหมด</span>
                            <div class="form">
                                <input type="text" disabled name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ต้นทุน</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ราคาขาย</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ค่าคอมขายทั่วไป</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ค่าหัตถการพนักงาน</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ค่า DF แพทย์</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ค่าคอมแพทย์</span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-2 col-12 ">
                            <span class="label-ui">ประเภทใบยินยอม</span>
                            <span class="d-flex">
                                <div class="form">
                                    <select class="select-width" name="cars" id="cars">
                                        <option value="volvo">-</option>
                                        <option value="volvo">before meal</option>
                                        <option value="roll">after meal</option>
                                        <option value="grain">with food</option>
                                        <option value="CC">not sepecified</option>
                                        <option value="TAB">apply on the face</option>
                                        <option value="PIECE">as often as needed</option>
                                        <option value="cap">use to clean your fase</option>
                                        <option value="TAB">face wpies</option>
                                        <option value="PIECE">Apply on the acne area for 10-15 minutes and then rinse with water</option>
                                        <option value="cap">dab on the ance area</option>
                                        <option value="cap">Apply on ance scares and dark spots</option>
                                        <option value="TAB">Apply on melasma</option>
                                        <option value="PIECE">Use to massage the Hair roots</option>
                                        <option value="cap">Apply all over face neck chest</option>
                                        <option value="volvo">Gentaly massage the face and rinse</option>
                                        <option value="roll">apply arrount the eyes</option>
                                        <option value="grain">Apply on the area that is</option>
                                        <option value="CC">every 4-6 hours</option>
                                        <option value="TAB">Chewing after meals</option>
                                        <option value="PIECE">use on wounds to prevent germs and waterproof</option>
                                    </select>
                                    <label for="name" class="label-name">
                                        {/* <span class="content-name">Name</span> */}
                                    </label>
                                </div>
                                <IncreaseModal text={'ประเภทใบยินยอม'} />
                            </span>
                        </div>

                        <div class="col-lg-2 col-12">
                            <span class="label-ui">ลำดับ</span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">วิธีปฏิบัติหลังการรักษา</span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-2 col-12 ">
                            <span class="label-ui">กลุ่ม</span>
                            <span class="d-flex">
                                <div class="form">
                                    <select class="select-width" name="group" id="group">
                                        <option value="volvo">-</option>
                                        <option value="volvo">Default</option>
                                        <option value="roll">external</option>
                                        <option value="grain">main course</option>
                                        <option value="CC">optional course</option>
                                        <option value="TAB">medicine</option>
                                        <option value="PIECE">Awfow pills</option>
                                        <option value="cap">medicine for internal use</option>
                                        <option value="TAB">NCD Chronic Ddisease Medicine group</option>
                                    </select>
                                    <label for="name" class="label-name">
                                        {/* <span class="content-name">Name</span> */}
                                    </label>
                                </div>
                                <IncreaseModal text={'เพิ่ม กลุ่ม'} />
                            </span>
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




                    </div>
                    <div class="d-flex wrap">
                        <span>
                            <label for="vehicle1"> สิทธิ์การจ่าย</label>&nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />&nbsp;
                            <label for="vehicle2">   เฉพาะแพทย์จ่าย  </label>&nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />&nbsp;
                            <label for="vehicle3">  ออกบิล Vat. </label>&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                </div>
                <div class="d-flex justify-content-end mx-3">
                <button class="btn-primary btn-ui">บันทึก</button>
                <button class="btn-primary btn-ui">บันทึกและปิด</button>
                <button onClick={() => setModalOpen(false)} class="btn-link linkx mx-1">CLOSE</button>
                </div>
            </Modal>
        </React.Fragment>

    );
}

export default CouseAndTreatmentsModal;

