import { NavLink } from "react-router-dom";
import { FaBars, FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    image: "/images/dashmenu.svg",
  },

  {
    path: "/all-patient-data",
    name: "Patient",
    image: "/images/plus.svg",
    subRoutes: [
      {
        path: "/all-patient-data",
        name: "All patient data",
        image: "/images/clander.svg",
      },
      {
        path: "/add-new-patient",
        name: "Add new patient",
        image: "/images/clander.svg",
      },
      {
        path: "/*",
        name: "Inactive patients",
        image: "/images/usold.svg",
      },
      {
        path: "/discharge-patientt",
        name: "Discharged patient",
        image: "/images/usold.svg",
      },
    ],
  },
  {
    path: "/appointments",
    name: "Appointments",
    image: "/images/appointt.svg",
  },
  {
    path: "/file-manager",
    name: "Reports",
    image: "/images/folder-medical-solid 1.svg",
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Attorney ",
        image: "/images/usold.svg",
      },
      {
        path: "/mri",
        name: "MRI",
        image: "/images/print.svg",
      },
      {
        path: "/flag-analysis",
        name: "Flag analysis",
        image: "/images/print.svg",
      },
      {
        path: "/non-complains",
        name: "Non-compliants",
        image: "/images/print.svg",
      },
    ],
  },
  {
    path: "/setting",
    name: "Utilities",
    image: "/images/plus.svg",
    exact: true,
    subRoutes: [
      {
        path: "/attorney-officer",
        name: "Attorney office",
        image: "/images/usold.svg",
      },
      {
        path: "/mri-facility",
        name: "MRI Facility",
        image: "/images/usold.svg",
      },
      {
        path: "/discharge-patients",
        name: "Discharged patients",
        image: "/images/usold.svg",
      },
      {
        path: "*/",
        name: "Specialty ",
        image: "/images/usold.svg",
      },
    ],
  },

  {
    path: "/file-manager",
    name: "Print",
    image: "/images/print.svg",
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/",
    name: "Logout",
    image: "/images/logout.svg",
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="flex">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "60px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src="/images/dashlog.svg" alt="" />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">
                    <img src={route.image} alt=""></img>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className={
                          route.name === "Logout"
                            ? "link_text lougoutclr"
                            : "link_text"
                        }
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main style={{ width: "100%", paddingLeft: "20px" }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
