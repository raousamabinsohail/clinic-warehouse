import React, { useState } from "react";
import Modal from 'react-modal';
import IncreaseModal from "./IncreaseModal";


function GoodsAndDrugsModal() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
  return (
    
    <React.Fragment>
        <button onClick={setModalOpen1} class="btn modal-btn">+&nbsp;GOODS AND DRUGS</button>
          <Modal className="custom-modal"
          isOpen={modalOpen1}
          onRequestClose={() => setModalOpen(false)}
          // style={customStyles1}
          >
            <div class="modal-header d-flex justify-content-space-between">
              <span>INCREASE PRODUCTS AND DRUGS</span>
               <span class="cursor" onClick={() => setModalOpen1(false)}><i class="fa fa-times"></i></span>
            </div>
            <div class="mx-4 my-4">
            <div class="row scroll">
              <div class="col-lg-2 col-12">
              <span class="label-ui">Item Code</span>
                  <div class="form">
                    <input type="text" name="item-code" required autocomplete="off"/>
                    <label for="name" class="label-name">
                      {/* <span class="content-name">Password</span> */}
                    </label>
                  </div> 
                  </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">bar code</span>
                <div class="form">
                  <input type="text" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">Drug name (commercial) *</span>
                <div class="form">
                  <input type="text" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">Drug name (generic)</span>
                <div class="form">
                  <input type="text" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">Print name (Thai language)</span>
                <div class="form">
                  <input type="text" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">Print name (English)</span>
                <div class="form">
                  <input type="text" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">Medicine size (ex.500g)</span>
                <div class="form">
                  <input type="text" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">registration number</span>
                <div class="form">
                  <input type="number" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">order one time</span>
                <div class="form">
                  <input type="number" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">Point of purchase*</span>
                <div class="form">
                  <input type="number" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">cost</span>
                <div class="form">
                  <input type="number" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">number</span>
                <div class="form">
                  <input type="text" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">selling price</span>
                <div class="form">
                  <input type="number" name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">balance</span>
                <div class="form">
                  <input type="number" disabled name="name" required autocomplete="off"/>
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
                <span class="label-ui">number of prescriptions</span>
                <div class="form">
                  <input type="number"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">pharmaceutical company</span>
                <div class="form">
                  <input type="text"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">Prescribed By company</span>
                <div class="form">
                  <input type="text"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">production date</span>
                <div class="form">
                  <input type="date"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12 ">
                <span class="label-ui">how to use</span>
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
                  <IncreaseModal text={'INCREASE HOW TO USE'} />
                </span>
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">one at a time</span>
                <div class="form">
                  <input type="date"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12 ">
                <span class="label-ui">time to use</span>
                <span class="d-flex">
                <div class="form">
                <select class="select-width" name="cars" id="cars">
                     <option value="volvo">-</option>
                    <option value="volvo">Morning</option>
                    <option value="roll">Day time</option>
                    <option value="grain">Cool</option>
                    <option value="CC">before bed</option>
                    <option value="TAB">morning, noon, evening, bedtime</option>
                    <option value="PIECE">morning, afternoon, evening</option>
                    <option value="cap">morning, day</option>
                    <option value="TAB">morning,evening</option>
                    <option value="PIECE">morning, bedtime</option>
                    <option value="cap">before washing face</option>
                    <option value="cap">after washing face</option>
                    <option value="volvo">2-3 times a day</option>
                    <option value="roll">3 times a day</option>
                    <option value="grain">1 time per day</option>
                    <option value="volvo">1-2 times a day</option>
                    <option value="roll">2 times a day</option>
                    <option value="grain">after shower in the evening</option>
                    </select>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
                  <IncreaseModal text={'INCREASE RECEIPT CATEGORY'} />
                </span>
              </div>

              <div class="col-lg-2 col-12">
                <span class="label-ui">expiration date</span>
                <div class="form">
                  <input type="date"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>

              <div class="col-lg-2 col-12 ">
                <span class="label-ui">group</span>
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
                  <IncreaseModal text={'INCREASE GROUP'} />
                </span>
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
                  <IncreaseModal text={'INCREASE RECEIPT CATEGORY'} />
                </span>
              </div>

              <div class="col-lg-2 col-12">
                <span class="label-ui">Properties (Thai language)</span>
                <div class="form">
                  <input type="text"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>

              <div class="col-lg-2 col-12">
                <span class="label-ui">properties (eng)</span>
                <div class="form">
                  <input type="text"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>

              <div class="col-lg-2 col-12">
                <span class="label-ui">Note (Thai language)</span>
                <div class="form">
                  <input type="text"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>

              <div class="col-lg-2 col-12">
                <span class="label-ui">
                    Note (Eng)</span>
                <div class="form">
                  <input type="text"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>

              <div class="col-lg-2 col-12">
                <span class="label-ui">
                    general sales commission</span>
                <div class="form">
                  <input type="number"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>
              <div class="col-lg-2 col-12">
                <span class="label-ui">doctor's commission</span>
                <div class="form">
                  <input type="number"  name="name" required autocomplete="off"/>
                  <label for="name" class="label-name">
                    {/* <span class="content-name">Name</span> */}
                  </label>
                </div> 
              </div>



              </div>
              <div class="d-flex wrap">
                  <span>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>&nbsp;
                  <label for="vehicle1"> active ingredient</label>&nbsp;&nbsp;&nbsp;
                  </span>
              <span>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>&nbsp;
              <label for="vehicle2"> Vaccine </label>&nbsp;&nbsp;&nbsp;
              </span>
              <span>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>&nbsp;
              <label for="vehicle3"> only doctors pay </label>&nbsp;&nbsp;&nbsp;
              </span>
              <span>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>&nbsp;
              <label for="vehicle2"> Issue a Vat bill.</label>&nbsp;&nbsp;&nbsp;
              </span>
              <span>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>&nbsp;
              <label for="vehicle3"> narcotics</label>&nbsp;&nbsp;&nbsp;
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

export default GoodsAndDrugsModal;

