import SideBar from "./components/Sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import AllPatientData from "./pages/AllPatientData";
import Login from "./Login";
import Addnewpatient from "./pages/Addnewpatient";
import Appointments from "./pages/Appointments";
import Edit from "./pages/Edit";
import MakeMDappoint from "./pages/MakeMDappoint";
import MakeMriappoint from "./pages/MakeMriappoint";
import MakeNeuro from "./pages/MakeNeuro";
import MakeOrthoappt from "./pages/MakeOrthoappt";
import PainManagement from "./pages/PainManagement";
import DischargePatientt from "./pages/DischargePatientt";
import SpinalSurgeon from "./pages/SpinalSurgeon";
import NonComplains from "./pages/NonComplains";
import NursePractitioner from "./pages/NursePractitioner ";
import Specialist1 from "./pages/Specialist1";
import Specialist2 from "./pages/Specialist2";
import OutsideReferral from "./pages/OutsideReferral";
import PhysicalTherapy from "./pages/PhysicalTherapy";
import Chiropractic from "./pages/Chiropractic";
///reports///
import Mri from "./pages/Reports/Mri";
import Flaganalysis from "./pages/Reports/Flaganalysis";

////utilities////
import Attorneyofficer from "./pages/Utilities/Attorneyofficer";
import MriFacility from "./pages/Utilities/MriFacility";
import Dischargepatient from "./pages/Utilities/Dischargepatient";
export default function routes({ location }) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      {location.pathname !== "/" && (
        <SideBar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/all-patient-data" element={<AllPatientData />} />
            <Route path="/*" element={<> not found</>} />
            <Route path="non-complains" element={<NonComplains />} />
            <Route path="/add-new-patient" element={<Addnewpatient />} />
            <Route path="/edit-patient" element={<Edit />} />
            <Route path="/makemd-appt" element={<MakeMDappoint />} />
            <Route path="/make-mri-appt" element={<MakeMriappoint />} />
            <Route path="/make-neuro-appt" element={<MakeNeuro />} />
            <Route path="/make-ortho-appt" element={<MakeOrthoappt />} />
            <Route path="/pain-managment" element={<PainManagement />} />
            <Route path="/discharge-patientt" element={<DischargePatientt />} />
            <Route path="/spinal-surgeon" element={<SpinalSurgeon />} />
            <Route path="/nurse-practitioner" element={<NursePractitioner />} />
            <Route path="/specialist1" element={<Specialist1 />} />
            <Route path="/specialist2" element={<Specialist2 />} />
            <Route path="/OutsideReferral" element={<OutsideReferral />} />
            <Route path="/physical-therapy" element={<PhysicalTherapy />} />
            <Route path="/chiropractic" element={<Chiropractic />} />
            //// reports //////
            <Route path="/mri" element={<Mri />} />
            <Route path="/flag-analysis" element={<Flaganalysis />} />
            ////utilities////
            <Route path="/attorney-officer" element={<Attorneyofficer />} />
            <Route path="/mri-facility" element={<MriFacility />} />
            <Route path="/discharge-patients" element={<Dischargepatient />} />
          </Routes>
        </SideBar>
      )}
    </>
  );
}
