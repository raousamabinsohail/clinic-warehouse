import React, { useState } from "react";



function Examination() {
 

  return (
    
    <React.Fragment>
        <section>
        <div class="card card-lab">
            <div class="row">
                <div class="col-lg-3 col-12">
                    <div class="lab-section-1 examination-ui">
                        <div class="d-flex examination-card">
                            <div>
                                <span class="profile-lab-1">
                                    <img class="profile-lab" src="https://www.mcscloud.co/img/hm_pro.png"alt="loading..."/>
                                </span>
                            </div>
                            <div class="flex-column-lab">
                                <span>Age : </span>
                                <span>HN : Select queue</span>
                                <span>Congenital disease: none</span>
                                <span>Drug allergies/food allergies: none</span>
                                <span class="d-flex">
                                    <span>Memo&nbsp;:&nbsp;</span>
                                    <span><input class="input-lab" type="text"placeholder="Memo Remark"/></span>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div class="lightgreen-box py-2">
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-warning mx-2">photo gallery</button>
                            <button class="btn btn-primary btn-blue-lab mx-2">Body Chart</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end bg-light-green">
                    <div class="chit-examin">
                        <span>Waiting Queue</span>
                        <span class="circle-lab">0</span>
                    </div>
                </div>
                    <div class="color-green-lab">
                        <div class="examin-white-box">
                        </div>
                    </div>
            </div>
                <div class="col-lg-7 md-d-none">
              <div class="light-green-text-boxes">
                <div class="green-box">
                    <div class="box-chit-1">
                        Symptum
                    </div>
                    <div class="">
                        <input class="examin-input-ui" type="text"/>
                    </div>
                </div>
                <div class="green-box">
                    <div class="box-chit-2">
                        Physical Examination
                    </div>
                    <div class="">
                        <input class="examin-input-ui" type="text"/>
                    </div>
                </div>
                <div class="green-box">
                    <div class="box-chit-3">
                        Diagnose
                    </div>
                    <div class="">
                        <input class="examin-input-ui" type="text"/>
                    </div>
                </div>
              </div>

              <div class="mx-4 my-2 d-flex align-items-center">
                <span>ICD10&nbsp;:&nbsp;</span>
                <span><input class="mx-1" type="password"placeholder="ICD10 code"/></span>
                <span><input class="mx-1" type="text"placeholder="ICD10 name"/></span>

                <div class="mx-1 my-2">
                      <input type="radio" id="css" name="fav_language" value="CSS" />
                              <label for="css"><b class="bold-lab">Start with</b></label>
                              <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                              <label for="javascript"><b class="bold-lab">Contain with</b></label>
                </div>
            </div>

            <div class="tabss">
                <button class="btn btn-success btn-lab">LAB</button>
                <button class="btn btn-success btn-lab">PERSIPTION LIST</button>
                <button class="btn btn-success btn-lab">ASSESMENT</button>
            </div>
            <div class="tabss-01 d-flex justify-content-between my-3">
                <span class="lab-01-text">&nbsp;prescription list</span>
                <span>
                <button class="btn-primary print-lab-btn">PRISCRIPTION</button>
                <button class="btn-primary print-lab-btn">NOTE</button>
            </span>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="d-flex">
                        <button class="btn-primary btn-blue-lab mx-1 my-1">Print Medicine Label</button>
                        <button class="btn-primary btn-blue-lab mx-1 my-1">Medical Certificate</button>
                    </div>
                    <div class="d-flex">
                        <button class="btn-primary btn-blue-lab mx-1 my-1">OPD Card</button>
                        <button class="btn-primary btn-blue-lab mx-1 my-1">Make an Appointment</button>
                    </div>

                </div>
                <div class="col-lg-6 col-12">
                    <div class="d-flex justify-content-end">
                    <button class="btn-primary total-green mx-1 my-1">TOTAL 0 Baht</button>
                    <button class="btn-primary btn-blue-lab mx-1 my-1">Record Keeping</button>
                </div>
                </div>

            </div>

                </div>
                
                <div class="col-lg-2 md-d-none">
                    <div class="examin-lab-3 py-3">
                        <div class="light-green my-2">
                            <span>treatment history</span>
                        </div>
                        <div class="lab-3-white-box">
                        <div class="examin-white-box">
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

export default Examination;


