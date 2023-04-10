import React, { useState } from "react";
import Modal from 'react-modal';
import IncreaseModal from "./IncreaseModal";

function PickupWareHouse() {
    const [modalOpen1, setModalOpen1] = useState(false);
    return (

        <React.Fragment>
            <button onClick={setModalOpen1} class="btn-primary btn-ui-home"><i class="fa fa-plus"></i>&nbsp;PICK OUT PRODUCT</button>
            <Modal className="custom-modal-dark"
                isOpen={modalOpen1}
                onRequestClose={() => setModalOpen1(false)}
            // style={customStyles1}
            >

                <div class="modal-header-dark d-flex justify-content-between">
                    <span>PICK UP FROM WAREHOUSE</span>
                    <span class="cursor" onClick={() => setModalOpen1(false)}><i class="fa fa-times"></i></span>
                </div>
                <div class="scroll ">
                <div class="bg-color d-flex justify-content-end py-2 px-2">
                <button onClick={setModalOpen1} class="btn-primary btn-ui-search"><i class="fa fa-times"></i>&nbsp;TURN OFF</button>
                </div>

                {/* <div class=""> */}
                    
                    <div class="row mx-3 my-3">
                        <div class="card card-header-border bg-color">
                        <div class="row py-3">
                        <div class="col-lg-3 col-12">
                            <span class="label-ui">Receipt Number</span>
                            <div class="form">
                                <input type="text" disabled name="item-code" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Password</span> */}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-3 col-12">
                            <span class="label-ui">Receipt date</span>
                            <div class="form">
                                <input type="date" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                    {/* <span class="content-name">Name</span> */}
                                </label>
                            </div>
                        </div>

                        <div class="col-lg-3 col-12 ">
                            <span class="label-ui">picker</span>
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
                                
                            </span>
                        </div>

                        <div class="col-lg-3 col-12 ">
                            <span class="label-ui">withdrawal type</span>
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
                               
                            </span>
                        </div>





                    </div>
                            <div class="row">
                            <div class="card-header bg-color border-none">
                                <h5 class="desc" for="search">Search</h5>
                                <div class="row">
                                    <div class="col-lg-12 col-12 d-flex">
                                <div class="form mx-4">
                                <input class="form-input place-italic w-100" type="text" placeholder="Varcode,code,name,item id" name="name" required autocomplete="off" />
                                <label for="name" class="label-name">
                                </label>
                            </div>
                            <div>
                            <button onClick={setModalOpen1} class="btn-primary btn-ui-search d-flex align-items-center"><i class="fa fa-search"></i>&nbsp;SEARCH</button>
                                </div>
                                    </div>
                                </div>
                            </div>
                          
                            </div>

                        </div>
                    </div>
              
                {/* </div> */}
                <div class="card-bg mx-3">
                    <div class="d-flex justify-content-end py-3 px-3">
                <button onClick={setModalOpen1} class="btn-primary btn-ui-sucess"><i class="fa fa-save"></i>&nbsp;RECORD</button>
                    </div>
                    <div class="d-flex justify-content-start py-3 px-3">
                <button onClick={setModalOpen1} class="btn-primary btn-ui-sucess"><i class="fa fa-save"></i>&nbsp;RECORD</button>  
                    </div>
                </div>
                </div>


            </Modal>
        </React.Fragment>

    );
}

export default PickupWareHouse;

