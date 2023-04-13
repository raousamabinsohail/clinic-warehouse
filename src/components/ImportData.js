import React from "react";

class ImportData extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="card card-ui">
            <section>
              <span class="pos-rel">
                <span class="chitt">นำเข้าข้อมูล</span>
              </span>
            </section>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-3 col-md-12 col-12 px-1">
                  <div class="box-1">
                    <div class="header-1">นำเข้าข้อมูลลูกค้า</div>
                  </div>
                  <div class="input-lists mb-3 border-green">
                    <select class="select-ui p-1 m-2" name="cars" id="cars">
                      <option value="สินค้าและยา">สินค้าและยา</option>
                      <option value="คอร์สและทรีทเมนท์">คอร์สและทรีทเมนท์</option>
                      <option value="แล๊ป">แล๊ป</option>
                      <option value="หัตถการและศัลยกรรม">หัตถการและศัลยกรรม</option>
                      <option value="บริการและการรักษา">บริการและการรักษา</option>
                      <option value="โปรโมชั่น">โปรโมชั่น</option>
                      <option value="บัตรแทนเงินสด">บัตรแทนเงินสด</option>
                    </select>
                    <div class="download-link">ดาวน์โหลดไฟล์ตัวอย่าง
</div>
                    <form class="mx-2" action="/action_page.php">
                      <label for="myfile"></label>
                      <input type="file" id="myfile" name="myfile" />
                      <br />
                      <br />
                    </form>
                    <div class="d-flex mx-2">
                      <div class="border">รหัสบาร์โค้ด</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ชื่อทางการค้า</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">หน่วย</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ชื่อสามัญ</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ชื่อใช้พิมพ์ (ภาษาไทย)</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ชื่อใช้พิมพ์ (ภาษาอังกฤษ)</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">
                      จุดสั่งซื้อเมื่อยาเหลือ
                      </div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">สรรพคุณ</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">หมายเหตุ</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">วิธีใช้</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ครั้งละ</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">เวลาใช้</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">จำนวน</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ต้นทุน</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ราคาขาย</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ค่าคอมขายทั่วไป</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                        <option value="0">ไม่มีข้อมูล</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex mx-2">
                      <div class="border">ค่าคอมแพทย์</div>
                      <div class="border">
                        <select class="select-box-ui" name="cars" id="cars">
                          <option value="0">ไม่มีข้อมูล</option>
                          
                        </select>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div class="col-lg-9 col-md-12 col-12 px-1">
                  <div class="box-1">
                    <div class="header-1">รายการนำเข้า</div>
                    ----------------------------------------
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ImportData;
