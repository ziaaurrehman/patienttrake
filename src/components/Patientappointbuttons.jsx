import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Patientappointbuttons = () => {
  const location = useLocation();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const array = [
    { url: "/edit-patient", name: " Edit patient" },
    { url: "/make-ortho-appt", name: "Make Ortho appt" },
    { url: "/make-mri-appt", name: " Make MRI appt" },
    { url: "/make-neuro-appt", name: "Make Neuro appt" },
    { url: "/pain-managment", name: "Pain Management" },
    { url: "/makemd-appt", name: "Make MD appt" },
    { url: "/spinal-surgeon", name: "Spinal Surgeon" },
    { url: "/nurse-practitioner", name: "Nurse Practitioner" },
    { url: "/physical-therapy", name: "Physical Therapy" },
    { url: "/chiropractic", name: "Chiropractic" },
    { url: "/OutsideReferral", name: "Outside Referral" },
    { url: "/specialist1", name: "Specialist 1" },
    { url: "/specialist2", name: "Specialist 2" },
  ];
  return (
    <div>
      <div className=" edit_tab mr-4 mt-5 mr-5">
        {array.map((item) => {
          return (
            <Link to={`${item.url}`}>
              <button
                className={
                  location.pathname === item.url
                    ? "statebtn1 ssd"
                    : "statebtn ssd2"
                }
                onClick={() => toggleTab(2)}
              >
                {item.name}
              </button>
            </Link>
          );
        })}
        <br />
      </div>
    </div>
  );
};

export default Patientappointbuttons;
