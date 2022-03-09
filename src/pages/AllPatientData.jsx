import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Modal, ModalBody } from "react-bootstrap";
import { Checkbox } from "antd";

const AllPatientData = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const [showModal, setShowModal] = useState(false);
  const [showModall, setShowModall] = useState(false);
  const [setDate] = useState();
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st week</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd week</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd week</Menu.Item>
    </Menu>
  );

  const doctorData = [
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
      Phonenumber: "(000) 000-0000",
    },
    {
      DE: "9/1/2021",
      patientname: "Zeehsan wajid",
      DOB: "8/1/2021",
      Specialty: "Orthopedic",
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
        <td className="table_text">
          <img
            onClick={() => {
              setShowModall(true);
              // setShowheader(false);
            }}
            src="/images/pen.svg"
            alt=""
          />
          <img
            onClick={() => {
              setShowModal(true);
              // setShowheader(false);
            }}
            className="pl-3 eye_image"
            src="/images/eye.svg"
            alt=""
          />
        </td>
      </tr>
    );
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img
            onClick={() => {
              setShowModal(false);
            }}
            className="close_img"
            src="/images/close.svg"
            alt=""
          />
          <div className="details mt-5">
            <h3 className="text-center mt-3 mb-5 deatils-title">
              Patient details
            </h3>
            <div className="details-data">
              <div className="id-details">
                <div className="patient-id">Patient ID</div>
                <div class="patient_ti">6433</div>
              </div>

              <div className="patient-id">Disabled</div>
              <div className="patient-id">Transportation</div>
              <div className="patient-id">X-ray</div>
              <div className="patient-id">OV/W</div>
            </div>
            <div className="details-data">
              <div className="id-details">
                <div className="patient-id">First Name</div>
                <div class="patient_ti">MAJID</div>
              </div>

              <div className="id-details">
                <div className="patient-id">Last Name</div>
                <div class="patient_ti">Muhammad</div>
              </div>
              <div className="id-details">
                <div className="patient-id">Phone number</div>
                <div class="patient_ti">(000) 000-0000</div>
              </div>
              <div className="id-details">
                <div className="patient-id">Date of birth</div>
                <div class="patient_ti">9/1/2021</div>
              </div>
              <div className="id-details">
                <div className="patient-id">Case type</div>
                <div class="patient_ti">No Fault/Other</div>
              </div>
            </div>
            <div className="details-data">
              <div className="id-details">
                <div className="patient-id">D/A</div>
                <div class="patient_ti">9/1/2021</div>
              </div>

              <div className="id-details">
                <div className="patient-id">D/E</div>
                <div class="patient_ti">9/1/2021</div>
              </div>
              <div className="id-details">
                <div className="patient-id">New MD appointment</div>
                <div class="patient_ti">Lorem ipsum</div>
              </div>
              <div className="id-details">
                <div className="patient-id">Attorney</div>
                <div class="patient_ti">Amaru</div>
              </div>
              <div className="id-details">
                <div className="patient-id">OV/W</div>
                <div class="patient_ti">Lorem ipsum</div>
              </div>
            </div>
            <div className="details-data">
              <div className="id-details">
                <div className="patient-id">Referred by</div>
                <div class="patient_ti">Amaru</div>
              </div>
            </div>
          </div>
          <div className="back_btnw">
            <button className="back_btn">Back</button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        className="sec_modal"
        show={showModall}
        onHide={() => {
          setShowModall(false);
        }}
      >
        <Modal.Body>
          <img
            onClick={() => {
              setShowModall(false);
            }}
            className="close_img mt-3"
            src="/images/close.svg"
            alt=""
          />
          <p className="edit_titlee">Edit patient details</p>
          <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
            <div className="col-lg-4 pl-0 pr-0">
              <label className="input_label" for="validationCustom01">
                Patient ID
              </label>
              <input
                type="text"
                className="form-control inputs_css"
                placeholder="Enter patient ID"
              />
            </div>
            <div className="col-lg-4 pr-0 pl-0 mt-5">
              <Checkbox onChange={onChange}>Disabled</Checkbox>
              <Checkbox onChange={onChange}>Transportation</Checkbox>
              <Checkbox onChange={onChange}>X-ray</Checkbox>
              <Checkbox onChange={onChange}>OV/W</Checkbox>
            </div>
          </div>
          <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
            <div className="col-lg-4 pl-0 pr-0">
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
            <div className="col-lg-4 pl-0 pr-0  mr-5">
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
            <div className="col-lg-4 pl-0 pr-0">
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
            <div className="col-lg-4 pl-0 pr-0 mr-5">
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
            <div className="col-lg-4 pl-0 pr-0">
              <div className="input_label" htmlFor="validationCustom01">
                D/A
              </div>
              <input
                className="date_piker col-lg-12"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-lg-4 pl-0 pr-0 mr-5">
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
            <div class="form-group pl-0 pr-0 col-lg-4">
              <label for="inputState">Case type</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group pl-0 pr-0 col-lg-4 mr-5">
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
          <div className="d-flex justify-content-between align-content-center flex-wrap row mr-0 ml-0 mt-3">
            <div className="col-lg-4 pl-0 pr-0">
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
            <div className="col-lg-4 pl-0 pr-0  mr-5">
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
          <div class="form-group pl-0 pr-0 col-lg-4 mt-3 mb-4">
            <label for="inputState">Select OV/W</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
              <option>...</option>
            </select>
          </div>
          <div className="back_btnw">
            <button className="back_btn">Back</button>
          </div>
        </Modal.Body>
      </Modal>
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
        <div className="manage_with">
          <div className="serch">
            <img className="search_img" src="/images/searc.svg" alt="" />
            <input
              type="text"
              className="form-control search_input col-10"
              placeholder="Search data"
            />
          </div>
          <div className="most-recent">
            <Dropdown className="pr-5" overlay={menu} trigger={["click"]}>
              <div
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Most recent <DownOutlined />
              </div>
            </Dropdown>
          </div>
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
                    DOB
                  </th>
                  <th className="heading_table" scope="col">
                    Specialty
                  </th>
                  <th className="heading_table" scope="col">
                    Phone number
                  </th>
                  <th className="heading_table" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{doctorData.map(doctorDataArea)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPatientData;
