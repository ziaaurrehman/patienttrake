import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Patientappointbuttons from "../components/Patientappointbuttons";
import { Checkbox } from "antd";
import Updatebutton from "../components/Updatebutton";
const MakeMriappoint = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const [setDate] = useState();
  return (
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
      <div class="form-group pl-0 pr-0 col-lg-5 mt-4">
        <label for="inputState">Select patient</label>
        <select id="inputState" class="form-control">
          <option selected>Anthony</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </select>
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center flex-wrap row mr-0 ml-0">
        <div className="col-lg-4 pl-0 pr-0">
          <label className="input_label" htmlFor="validationCustom01">
            First Name
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            id="validationCustom01"
            placeholder="Enter First Name"
          />
        </div>
        <div className="col-lg-2 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            D/A
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-2 pl-0 pr-0 mr-5">
          <div className="input_label" htmlFor="validationCustom01">
            D/E
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div class="form-group pl-0 pr-0 col-lg-2 pr-5">
          <label for="inputState">Select patient</label>
          <select id="inputState" class="form-control">
            <option selected>Anthony</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <Patientappointbuttons />
      <div className="cervical_mri">
        <p className="mt-5">Cervical</p>
        <Checkbox className="mt-3" onChange={onChange}>
          No cervical MRI
        </Checkbox>
      </div>
      <div className="row mt-5 d-flex flex-wrap align-items-center justify-content-between">
        <div class="form-group pl-0 pr-0 col-lg-4">
          <label for="inputState">Facility</label>
          <select id="inputState" class="form-control">
            <option selected>Anthony</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2 pl-0 pr-0 ">
          <div className="input_label" htmlFor="validationCustom01">
            Scheduled date
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-4 pr-0 pl-0 ">
          <Checkbox onChange={onChange}>Scan done</Checkbox>
          <Checkbox onChange={onChange}>Report received</Checkbox>
        </div>
      </div>
      <div className="cervical_mri">
        <p className="mt-5">Lumber</p>
        <Checkbox className="mt-3" onChange={onChange}>
          No Lumber MRI
        </Checkbox>
      </div>
      <div className="row mt-5 d-flex flex-wrap align-items-center justify-content-between">
        <div class="form-group pl-0 pr-0 col-lg-4">
          <label for="inputState">Facility</label>
          <select id="inputState" class="form-control">
            <option selected>Anthony</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2 pl-0 pr-0 ">
          <div className="input_label" htmlFor="validationCustom01">
            Scheduled date
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-4 pr-0 pl-0 ">
          <Checkbox onChange={onChange}>Scan done</Checkbox>
          <Checkbox onChange={onChange}>Report received</Checkbox>
        </div>
      </div>
      <div className="cervical_mri">
        <p className="mt-5">Extremity/Thoracic/Brain</p>
        <Checkbox className="mt-3" onChange={onChange}>
          No extremity MRI
        </Checkbox>
      </div>
      <div className="row mt-5 d-flex flex-wrap align-items-center justify-content-between">
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Area</label>
          <select id="inputState" class="form-control">
            <option selected>Thoracic spine</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Facility</label>
          <select id="inputState" class="form-control">
            <option selected>Stand-up MRI</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2 pl-0 pr-0 ">
          <div className="input_label" htmlFor="validationCustom01">
            Scheduled date
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pr-0 pl-0 mr-5">
          <Checkbox onChange={onChange}>Scan done</Checkbox>
          <Checkbox onChange={onChange}>Report received</Checkbox>
        </div>
      </div>
      <div className="row mt-5 d-flex flex-wrap align-items-center justify-content-between">
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Area</label>
          <select id="inputState" class="form-control">
            <option selected>Thoracic spine</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Facility</label>
          <select id="inputState" class="form-control">
            <option selected>Stand-up MRI</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2 pl-0 pr-0 ">
          <div className="input_label" htmlFor="validationCustom01">
            Scheduled date
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pr-0 pl-0 mr-5">
          <Checkbox onChange={onChange}>Scan done</Checkbox>
          <Checkbox onChange={onChange}>Report received</Checkbox>
        </div>
      </div>
      <div className="row mt-5 d-flex flex-wrap align-items-center justify-content-between">
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Area</label>
          <select id="inputState" class="form-control">
            <option selected>Thoracic spine</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Facility</label>
          <select id="inputState" class="form-control">
            <option selected>Stand-up MRI</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2 pl-0 pr-0 ">
          <div className="input_label" htmlFor="validationCustom01">
            Scheduled date
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pr-0 pl-0 mr-5">
          <Checkbox onChange={onChange}>Scan done</Checkbox>
          <Checkbox onChange={onChange}>Report received</Checkbox>
        </div>
      </div>
      <div className="row mt-5 d-flex flex-wrap align-items-center justify-content-between">
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Area</label>
          <select id="inputState" class="form-control">
            <option selected>Thoracic spine</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group pl-0 pr-0 col-lg-2">
          <label for="inputState">Facility</label>
          <select id="inputState" class="form-control">
            <option selected>Stand-up MRI</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2 pl-0 pr-0 ">
          <div className="input_label" htmlFor="validationCustom01">
            Scheduled date
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pr-0 pl-0 mr-5">
          <Checkbox onChange={onChange}>Scan done</Checkbox>
          <Checkbox onChange={onChange}>Report received</Checkbox>
        </div>
      </div>
      <Updatebutton />
    </div>
  );
};

export default MakeMriappoint;
