import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Patientappointbuttons from "../components/Patientappointbuttons";
import { Checkbox } from "antd";
import Updatebutton from "../components/Updatebutton";

const MakeNeuro = () => {
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
              placeholder="Anthony"
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
            <label for="inputState">Case type</label>
            <select id="inputState" class="form-control">
              <option selected>No Fault/Other</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <Patientappointbuttons />
        <div className="mt-5 row d-flex align-items-center justify-content-lg-start flex-wrap">
          <div className="col-lg-5 pl-0 pr-0 mr-5">
            <div className="input_label" htmlFor="validationCustom01">
              Next neuro
            </div>
            <input
              className="date_piker"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className=" col-lg-4 cervical_mri">
            <Checkbox className="mt-3" onChange={onChange}>
              Neuro PRN
            </Checkbox>
          </div>
        </div>
        <div className="mt-5 row d-flex align-items-center justify-content-lg-start flex-wrap">
          <div className="col-lg-3 pl-0 pr-0 mr-5">
            <div className="input_label" htmlFor="validationCustom01">
              Neuro
            </div>
            <input
              className="date_piker"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-lg-3 pl-0 pr-0 mr-5">
            <div className="input_label" htmlFor="validationCustom01">
              UEMG
            </div>
            <input
              className="date_piker"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className=" col-lg-3 cervical_mri">
            <Checkbox className="mt-3" onChange={onChange}>
              Scan done
            </Checkbox>
          </div>
        </div>
        <div className="mt-5 row d-flex align-items-center justify-content-lg-start flex-wrap">
          <div className="col-lg-3 pl-0 pr-0 mr-5">
            <div className="input_label" htmlFor="validationCustom01">
              Neuro FU1
            </div>
            <input
              className="date_piker"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-lg-3 pl-0 pr-0 mr-5">
            <div className="input_label" htmlFor="validationCustom01">
              LEMG
            </div>
            <input
              className="date_piker"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className=" col-lg-3 cervical_mri">
            <Checkbox className="mt-3" onChange={onChange}>
              Neuro PRN
            </Checkbox>
          </div>
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5 mt-4">
          <div className="input_label" htmlFor="validationCustom01">
            Neuro FU2
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5 mt-4">
          <div className="input_label" htmlFor="validationCustom01">
            Neuro FU2
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 pl-0 pr-0 mr-5 mt-4">
          <div className="input_label" htmlFor="validationCustom01">
            Neuro FU2
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

export default MakeNeuro;
