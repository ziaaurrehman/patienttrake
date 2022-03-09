import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Patientappointbuttons from "../components/Patientappointbuttons";
import { Checkbox } from "antd";
import Updatebutton from "../components/Updatebutton";
const MakeMDappoint = () => {
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
      <div className="row mt-5">
        <div className="col-lg-5 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next MD appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next ROM appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="col-lg-6 pr-0 pl-0 mt-5">
        <Checkbox onChange={onChange}>MD PRN</Checkbox>
        <Checkbox onChange={onChange}>No ROM</Checkbox>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Initial
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU5
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            ROM
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU1
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU6
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            ROM 2
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU2
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU7
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            ROM 3
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU3
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU8
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            ROM 4
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU4
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Internist FU9
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            ROM 5
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next MD appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next ROM appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next ROM appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next MD appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next ROM appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Next ROM appt
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <Updatebutton />
    </div>
  );
};

export default MakeMDappoint;
