import React, { useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
const Flaganalysis = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const doctorData = [
    {
      lastname: "wajid",
      firstname: "Zeehsan",
      Internal: "Neda F/U",
      order: "Neda F/U",
    },
    {
      lastname: "wajid",
      firstname: "Zeehsan",
      Internal: "Neda F/U",
      order: "Neda F/U",
    },
    {
      lastname: "wajid",
      firstname: "Zeehsan",
      Internal: "Neda F/U",
      order: "Neda F/U",
      neruo: "Neda F/U",
    },
    {
      lastname: "wajid",
      firstname: "Zeehsan",
      Internal: "Neda F/U",
      order: "Neda F/U",
    },
    {
      lastname: "wajid",
      firstname: "Zeehsan",
      Internal: "Neda F/U",
      order: "Neda F/U",
    },
    {
      lastname: "wajid",
      firstname: "Zeehsan",
      Internal: "Neda F/U",
      order: "Neda F/U",
    },
  ];
  const doctorDataArea = (data, index) => {
    return (
      <tr key={index}>
        <td className="table_text">{data.lastname}</td>
        <td className="table_text">{data.firstname}</td>
        <td className="table_text">{data.Internal}</td>
        <td className="table_text">{data.Cervical}</td>
        <td className="table_text">{data.Lumber}</td>
        <td className="table_text">{data.OMRI1}</td>
        <td className="table_text">{data.OMRI2}</td>
        <td className="table_text">{data.OMRI3}</td>
        <td className="table_text">{data.neruo}</td>
        <td className="table_text">{data.LEMGN}</td>
        <td className="table_text">{data.LEMGN}</td>
        <td className="table_text">{data.order}</td>
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
          Reports
        </p>
        <div className="patient_labels d-flex justify-content-between pr-5">
          <div className="patient_data">
            Reports/
            <span style={{ color: "#4A47A3", paddingLeft: "8px" }}>
              Flag analysis
            </span>
          </div>
          <div>
            <img src="/images/Group 479.svg" alt="" />
          </div>
        </div>
        <div className="col-lg-12 col-md-8 padding_table mt-5 pl-0">
          <div className="table-responsive pl-0 pr-0">
            <table class="table  background_table">
              <thead class="thead-dark">
                <tr>
                  <th className="heading_table" scope="col">
                    Last name
                  </th>
                  <th className="heading_table" scope="col">
                    First name
                  </th>
                  <th className="heading_table" scope="col">
                    Internal
                  </th>
                  <th className="heading_table" scope="col">
                    Cervical
                  </th>
                  <th className="heading_table" scope="col">
                    Lumber
                  </th>
                  <th className="heading_table" scope="col">
                    OMRI 1
                  </th>
                  <th className="heading_table" scope="col">
                    OMRI 2
                  </th>

                  <th className="heading_table" scope="col">
                    OMRI 3
                  </th>
                  <th className="heading_table" scope="col">
                    Neuro N
                  </th>
                  <th className="heading_table" scope="col">
                    LEMG N
                  </th>
                  <th className="heading_table" scope="col">
                    UEMG N
                  </th>
                  <th className="heading_table" scope="col">
                    Order no.
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

export default Flaganalysis;
