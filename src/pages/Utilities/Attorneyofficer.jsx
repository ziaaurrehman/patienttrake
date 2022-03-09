import React, {useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";

function Attorneyofficer() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // const [setDate] = useState();
  // function onChange(e) {
  //   console.log(`checked = ${e.target.checked}`);
  // }

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
          Utilities /
          <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
            Add Attorney officer
          </span>
        </div>
        <div>
          <img src="/images/Group 479.svg" alt="" />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" for="validationCustom01">
            Attorney
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Enter attorney name"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0 mr-5">
          <label className="input_label" for="validationCustom01">
            Address
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Enter address"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" for="validationCustom01">
            Town
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Enter town"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0 mr-5">
          <label className="input_label" for="validationCustom01">
            Zip code
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Enter zip code"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
        <div className="col-lg-5 pl-0 pr-0">
          <label className="input_label" for="validationCustom01">
            Phone number
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Phone number"
          />
        </div>
        <div className="col-lg-5 pl-0 pr-0 mr-5">
          <label className="input_label" for="validationCustom01">
            Fax
          </label>
          <input
            type="text"
            className="form-control inputs_css"
            placeholder="Enter fax"
          />
        </div>
      </div>
      <div className="col-lg-5 pl-0 pr-0 mr-5 mt-3">
        <label className="input_label" for="validationCustom01">
          Contact
        </label>
        <input
          type="text"
          className="form-control inputs_css"
          placeholder="Enter Contact"
        />
      </div>
      <div className="addbt">
        <button className="addbtn">Add & save</button>
      </div>
    </div>
  );
}

export default Attorneyofficer;
