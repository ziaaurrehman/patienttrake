import React, { useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { Checkbox } from "antd";
import Updatebutton from "../../components/Updatebutton";
// import { useLocation } from "react-router-dom";

const Dischargepatient = () => {
  
  useEffect(() => {
    window.scrollTo({top:0});
  }, []);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div id="main">
      <DashboardHeader />
      <div className="d-flex justify-content-between" id="main">
        <p
          className="dash_title
      pt-2"
        >
          Utilities
        </p>
      </div>
      <div className="patient_labels d-flex justify-content-between pr-5">
        <div className="patient_data">
          Utilities /
          <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
            Discharge patients
          </span>
        </div>
      </div>
      <div class="form-group pl-0 pr-0 col-lg-5 mr-5 mt-5">
        <label className="inputStatee" for="inputState label_css">
          Last Name
        </label>
        <select id="inputState" class="form-control">
          <option selected>Select last name</option>
          <option>zeeshan</option>
          <option>wajid</option>
          <option>Majid</option>
        </select>
      </div>
      <div className="row mt-3 d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-lg-4 pl-0 pr-5">
          <label className="input_label" htmlFor="validationCustom01">
            First Name
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Anthony"
          />
        </div>
        <div className="col-lg-2 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            D/A
          </div>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="6/8/1969"
          />
        </div>
        <div className="col-lg-2 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            D/E
          </div>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="6/8/1969"
          />
        </div>
        <div className="col-lg-2 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            Case type
          </div>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="6/8/1969"
          />
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-lg-5 pl-0 pr-5">
          <label className="input_label" htmlFor="validationCustom01">
            Phone number
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="6/8/1969"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-5">
          <label className="input_label" htmlFor="validationCustom01">
            DOB
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="6/8/1969"
          />
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-lg-5 pl-0 pr-5">
          <label className="input_label" htmlFor="validationCustom01">
            Anthony
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Anthony"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-5">
          <label className="input_label" htmlFor="validationCustom01">
            OV/W
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="22"
          />
        </div>
      </div>
      <div className=" col-lg-6 cervical_mri mt-3">
        <Checkbox className="mt-3" onChange={onChange}>
          Transportation
        </Checkbox>
        <Checkbox className="mt-3" onChange={onChange}>
          Disabled
        </Checkbox>
        <Checkbox className="mt-3" onChange={onChange}>
          D/C
        </Checkbox>
      </div>
      <p className="discharge_footer">
        Uncheck D/C means the patient is activated for this case
      </p>
      <Updatebutton />
    </div>
  );
};

export default Dischargepatient;
