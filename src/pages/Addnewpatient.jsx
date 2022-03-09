import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { Checkbox } from "antd";

function Addnewpatient() {
  const [setDate] = useState();
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div>
      <DashboardHeader />
      <p
        className="dash_title
      pt-2"
      >
        Patients
      </p>
      <div className="patient_labels d-flex justify-content-between pr-5">
        <div className="patient_data">
          Patients /
          <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
            All patient data
          </span>
        </div>
        <div>
          <img src="/images/Group 479.svg" alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-5">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" for="validationCustom01">
            Patient ID
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Enter patient ID"
          />
        </div>
        <div className="col-lg-6 pr-0 pl-0 mt-5">
          <Checkbox onChange={onChange}>Disabled</Checkbox>
          <Checkbox onChange={onChange}>Transportation</Checkbox>
          <Checkbox onChange={onChange}>X-ray</Checkbox>
          <Checkbox onChange={onChange}>OV/W</Checkbox>
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" htmlFor="validationCustom01">
            First name
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="First name"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0  mr-5">
          <label className="input_label" htmlFor="validationCustom01">
            Last name
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Enter last name"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" htmlFor="validationCustom01">
            Phone number
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Enter phone number"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            Date of birth
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div className="col-lg-5 pl-0 pr-0">
          <div className="input_label" htmlFor="validationCustom01">
            D/A
          </div>
          <input
            className="date_piker col-lg-12"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            D/E
          </div>
          <input
            className="date_piker col-lg-12 pr-0 pl-0"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div class="form-group pl-0 pr-0 col-lg-5">
          <label className="inputStatee" for="">
            Case type
          </label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group pl-0 pr-0 col-lg-5 mr-5">
          <label className="inputStatee" for="inputState">
            Attorney
          </label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" htmlFor="validationCustom01">
            New MD appointment
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Enter new MD appointment"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0  mr-5">
          <label className="input_label" htmlFor="validationCustom01">
            Referred by
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Enter referral name"
          />
        </div>
      </div>
      <div class="form-group pl-0 pr-0 col-lg-5 mt-3 mb-4">
        <label className="inputStatee" for="inputState">
          Select OV/W
        </label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </select>
      </div>
      <div className="addbt">
        <button className="addbtn">Add & save</button>
      </div>
    </div>
  );
}

export default Addnewpatient;
