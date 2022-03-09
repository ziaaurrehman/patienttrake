import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { Checkbox } from "antd";
import Patientappointbuttons from "../components/Patientappointbuttons";
import Updatebutton from "../components/Updatebutton";

const Edit = () => {
  const [setDate] = useState();
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div>
      <div>
        <DashboardHeader />
        <p
          className="dash_title
      pt-2"
        >
          Appointments
        </p>
        <div className="patient_labels d-flex justify-content-between">
          <div className="patient_data">
            Appointments/All Appointments/
            <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
              Create new Appointments
            </span>
          </div>
        </div>
        <div class="form-group pl-0 pr-0 col-lg-4 mr- mt-4">
          <label for="inputState label_css">Select patient</label>
          <select id="inputState" class="form-control">
            <option selected>Anthony</option>
            <option>zzz</option>
            <option>Ottt</option>
            <option>Nnnn</option>
          </select>
        </div>
        <div className="row">
          <div className="col-lg-4 pl-0 pr-0 mr-4">
            <label className="input_label" for="validationCustom01">
              Patient ID
            </label>
            <input
              type="text"
              className="form-control inputs_css"
              placeholder="Enter patient ID"
            />
          </div>
          <div className="col-lg-2">
            <div className="label_css">D/A</div>
            <input
              className="date_piker col-lg-10 pr-0 pl-0"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-lg-3">
            <div className="label_css">D/E</div>
            <input
              className="date_piker col-lg-10 pr-0 pl-0"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class="form-group pl-0 pr-0 col-lg-2 mb-0 ">
            <label className="label_css" for="inputState">
              Case type
            </label>
            <select id="inputState" class="form-control">
              <option className="label_css" selected>
                Select Case type
              </option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className=" edit_tab mr-4 mt-5 mr-5">
          <Patientappointbuttons />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-5">
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
        <div className="col-lg-6 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            DOB
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-5">
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
        <div className="col-lg-6 pl-0 pr-0 mr-5">
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
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-5">
        <div class="form-group pl-0 pr-0 col-lg-5">
          <label for="inputState">Case type</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group pl-0 pr-0 col-lg-6 mr-5">
          <label for="inputState">Attorney</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
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
      <Updatebutton/>
    </div>
  );
};

export default Edit;
