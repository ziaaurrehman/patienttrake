import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";

const Mri = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [setDate] = useState();

  const doctorData = [
    {
      date: "9/1/2021",
      patient: "Zeehsan wajid",
      area: "8/1/2021",
    },
    {
      date: "9/1/2021",
      patient: "Zeehsan wajid",
      area: "8/1/2021",
    },
    {
      date: "9/1/2021",
      patient: "Zeehsan wajid",
      area: "8/1/2021",
    },
    {
      date: "9/1/2021",
      patient: "Zeehsan wajid",
      area: "8/1/2021",
    },
    {
      date: "9/1/2021",
      patient: "Zeehsan wajid",
      area: "8/1/2021",
    },
  ];
  const doctorDataArea = (data, index) => {
    return (
      <tr key={index}>
        <td className="table_text">{data.date}</td>

        <td className="table_text">{data.patient}</td>

        <td className="table_text">{data.area}</td>
      </tr>
    );
  };
  return (
    <>
      <div>
        <DashboardHeader />
        <p
          className="dash_title
      pt-2"
        >
          <img className="pr-3" src="/images/right-arrow.svg" alt="" />
          Reports
        </p>
        <div className="patient_labels d-flex justify-content-between pr-5">
          <div className="patient_data">
            Reports/MRI/
            <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
              Veiw reports
            </span>
          </div>
          <div>
            <img src="/images/Group 479.svg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 pl-0 pr-0 mt-4">
          <div className="input_label mb-2" htmlFor="validationCustom01">
            Date Range
          </div>
          <input
            className="date_piker"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-lg-12 col-md-8 padding_table mt-5 pl-0">
          <div className="table-responsive pl-0 pr-0">
            <table class="table  background_table">
              <thead class="thead-dark">
                <tr>
                  <th className="heading_table" scope="col">
                    Date
                  </th>
                  <th className="heading_table" scope="col">
                    Patient
                  </th>

                  <th className="heading_table" scope="col">
                    Area
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

export default Mri;
