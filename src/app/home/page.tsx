import "./home.css";

import SideBar from "../component/sidebar";
import Navbar from "../component/navbar";

export default function Home() {
  return (
    <div className="homesa">
      <div className="sideleftHome">
        <SideBar/>
      </div>
      <div className="siderightHome">
        <Navbar/>
        <div className="maincontent">
          <div className="leftcontent"></div>
          <div className="rightcontent"></div>
        </div>
      </div>
    </div>
  );
}
