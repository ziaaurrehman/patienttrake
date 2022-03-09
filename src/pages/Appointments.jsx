import Checkbox from "antd/lib/checkbox/Checkbox";
import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { Link } from "react-router-dom";
import Patientappointbuttons from "../components/Patientappointbuttons";
import { Modal, ModalBody } from "react-bootstrap";
const Appointments = () => {
  const [setDate] = useState();
  const [showModal, setShowModal] = useState(false);

  const doctorData = [
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      casetype: "NF/Other",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      casetype: "NF/Other",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      casetype: "NF/Other",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      casetype: "NF/Other",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      casetype: "NF/Other",
      Phonenumber: "(000) 000-0000",
    },
  ];
  const doctorDataArea = (data, index) => {
    return (
      <tr key={index}>
        <td className="table_text">{data.DE}</td>
        <td className="table_text">{data.patientname}</td>
        <td className="table_text">{data.DOB}</td>
        <td className="table_text">{data.Specialty}</td>
        <td className="table_text">{data.Phonenumber}</td>
        <td className="table_text">{data.casetype}</td>
        <td className="table_text">
          {data.anotherappt}
          <Checkbox />
        </td>
        <td className="table_text">
          <img
            onClick={() => {
              setShowModal(true);
              // setShowheader(false);
            }}
            className="pl-3"
            src="/images/eye.svg"
            alt=""
          />
        </td>
      </tr>
    );
  };
  return (
    <>
      <div>
        <Modal
          show={showModal}
          onHide={() => {
            setShowModal(false);
          }}
        >
          <div class="modal-header">
            <h5 class="modal-title">Patient details</h5>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
           
    
          </div>
        </Modal>
        <DashboardHeader />
        <div className="d-flex justify-content-between">
          <p
            className="dash_title
      pt-2"
          >
            Appointments
          </p>
          <Link className="" to="/edit-patient">
            <button className="creat_btn mt-5 mb-3 mr-4">
              Create new appointment
            </button>
          </Link>
        </div>

        <div className="patient_labels d-flex justify-content-between pr-5">
          <div className="patient_data">
            Appointments /
            <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
              All Appointments
            </span>
          </div>
        </div>
        <div className="manage_with">
          <div class="form-group pl-0 pr-0 col-lg-6 mr-5">
            <label className="inputStatee" for="inputState label_css">
              Select appointment specialty
            </label>
            <select id="inputState" class="form-control">
              <option selected>All appointments</option>
              <option>Internal medicine</option>
              <option>Orthopedist</option>
              <option>Neurologist</option>
              <option>Range of motion</option>
              <option>Pain Management</option>
              <option>Spinal Surgeon</option>
              <option>Nurse Practitioner </option>
              <option>Physical Therapy</option>
              <option>Outside Referral</option>
              <option>Specialist 1</option>
              <option>Specialist 2</option>
            </select>
          </div>
          <div>
            <img className="mr-4" src="/images/Group 479.svg" alt="" />
          </div>
        </div>
        <div className="date_section">
          <div>
            <div className="label_css inputStatee">D/E</div>
            <input
              className="date_piker col-lg-10 pr-0 pl-0"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <div className="label_css inputStatee">D/A</div>
            <input
              className="date_piker col-lg-10 pr-0 pl-0"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <div className="label_css inputStatee">Date range</div>
            <input
              className="date_piker col-lg-10 pr-0 pl-0"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class="form-group pl-0 pr-0 col-lg-2 mb-0 ">
            <label className="label_css inputStatee" for="inputState">
              Case type
            </label>
            <select
              className="inputStatee"
              id="inputState"
              class="form-control"
            >
              <option className="label_css" selected>
                Select Case type
              </option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
            </select>
          </div>
          <div>
            <img className="reset_img mr-4" src="/images/reset.svg" alt="" />
          </div>

          <Patientappointbuttons />
        </div>
        <div className="col-lg-12 col-md-8 padding_table mt-5 pl-0">
          <div className="table-responsive pl-0 pr-0">
            <table class="table  background_table">
              <thead class="thead-dark">
                <tr>
                  <th className="heading_table" scope="col">
                    D/E
                  </th>
                  <th className="heading_table" scope="col">
                    Patient name
                  </th>

                  <th className="heading_table" scope="col">
                    D/A
                  </th>
                  <th className="heading_table" scope="col">
                    Specialty
                  </th>

                  <th className="heading_table" scope="col">
                    Phone number
                  </th>
                  <th className="heading_table" scope="col">
                    Case type
                  </th>
                  <th className="heading_table" scope="col">
                    Another appt. added
                  </th>
                  <th className="heading_table" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <div className="slcted-date">September 01, 2022</div>
                {doctorData.map(doctorDataArea)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
