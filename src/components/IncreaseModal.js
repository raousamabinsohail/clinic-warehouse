import React, { useState } from "react";
import Modal from 'react-modal';


function IncreaseModal(props) {
    const [modalOpen, setModalOpen] = useState(false);
    return (

        <React.Fragment>
            <button class="plus" onClick={ setModalOpen } ><i class="fa fa-plus black"></i></button>
            <Modal className="custom-modal-dynamic"
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
            // style={customStyles1}
            >
                <div class="modal-header d-flex justify-content-space-between">
                    <span>{props.text}</span>
                    <span class="cursor" onClick={() => setModalOpen(false)}><i class="fa fa-times"></i></span>
                </div>
                <div class="mx-4 my-4">
                <div class="d-flex justify-content-end">
                    <button class="btn-primary btn-blue"><i class="fa fa-plus"></i>INCREASE</button>
                    <button class="btn-link mx-1 btn-orangee"><i class="fa fa-pencil"></i>CORRECT</button>
                    <button class="btn-link mx-1 btn-red"><i class="fa fa-times"></i>DELETE</button>
                </div>
                    <br/>
                    <div class="w-70">
                    <p class="desc m-b-0">{props.text}</p>
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
                                </div>

                </div>
                <div class="d-flex justify-content-end mx-3">
                    <button class="btn-primary btn-ui">บันทึก</button>
                    <button onClick={() => setModalOpen(false)} class="btn-link linkx mx-1">CLOSE</button>
                </div>





            </Modal>
        </React.Fragment>

    );
}

export default IncreaseModal;

