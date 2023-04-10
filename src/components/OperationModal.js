import React, { useState } from "react";
import Modal from 'react-modal';
import IncreaseModal from "./IncreaseModal";

function OperationModal() {
    const [modalOpen1, setModalOpen1] = useState(false);
    return (

        <React.Fragment>
            <button onClick={setModalOpen1} class="btn modal-btn">+&nbsp;OPERATION AND SURGER</button>
            <Modal className="custom-modal"
                isOpen={modalOpen1}
                onRequestClose={() => setModalOpen1(false)}
            // style={customStyles1}
            >
                <div class="modal-header d-flex justify-content-space-between">
                    <span>INCREASE OPERATION</span>
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
                            <span class="label-ui">bar code</span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">Procedure name <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>




                        <div class="col-lg-2 col-12 ">
                            <span class="label-ui">unit</span>
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
                                <IncreaseModal text={'INCREASE UNIT'} />
                            </span>
                        </div>

                        <div class="col-lg-2 col-12">
                            <span class="label-ui">cost</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-2 col-12">
                            <span class="label-ui">selling price <span style={{ color: 'red' }}>*</span></span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">
                                general sales commission</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">doctor's commission</span>
                            <div class="form">
                                <input type="number" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12">
                            <span class="label-ui">number</span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12 ">
                            <span class="label-ui">receipt category</span>
                            <span class="d-flex">
                                <div class="form">
                                    <select class="select-width" name="cars" id="cars">
                                        <option value="volvo">-</option>
                                    </select>
                                    <label for="name" class="label-name">
                                        {/* <span class="content-name">Name</span> */}
                                    </label>
                                </div>
                                <IncreaseModal text={'INCREASE UNIT'} />
                            </span>
                        </div>

                        <div class="col-lg-4 col-12">
                            <span class="label-ui">
                                Note </span>
                            <div class="form">
                                <input type="text" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>




                    </div>
                    <div class="d-flex wrap">

                        <span>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />&nbsp;
                            <label for="vehicle2"> Issue a Vat bill.</label>&nbsp;&nbsp;&nbsp;
                        </span>

                    </div>
                </div>
                <div class="d-flex justify-content-end mx-3">
                <button class="btn-primary btn-ui">RECORD</button>
                <button class="btn-primary btn-ui">SAVE AND CLOSE</button>
                <button onClick={() => setModalOpen1(false)} class="btn-link linkx mx-1">CLOSE</button>

                </div>





            </Modal>
        </React.Fragment>

    );
}

export default OperationModal;

