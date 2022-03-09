import DashboardHeader from "../components/DashboardHeader";
import DashboardData from "../components/Patient-appointment/DashboardData";
import Userdata from "../components/Userdata";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
const Dashboard = () => {
  
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
  return (
    <div className="">
      <DashboardHeader />
      <div class="dashboard-contents">
        <div
          className="dash_title
      pt-2"
        >
          Dashboard
        </div>
        <div>
          <Dropdown className="pr-5" overlay={menu} trigger={["click"]}>
            <div
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Weekly <DownOutlined />
            </div>
          </Dropdown>
          
        </div>
      </div>

      <Userdata />
      <DashboardData />
    </div>
  );
};

export default Dashboard;
