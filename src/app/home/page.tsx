import Image from "next/image";

import "./home.css";

import SideBar from "../component/sidebar";
import Navbar from "../component/navbar";
import karakter from "../assets/karakter.png";

export default function Home() {
  return (
    <div className="homesa">
      <div className="sideleftHome">
        <SideBar />
      </div>
      <div className="siderightHome">
        <Navbar />
        <div className="maincontent">
          <div className="leftcontent">
            <h1>Play Your Way </h1>
            <h1> Experience Of</h1>
            <h1> Gaming</h1>
            <p>lorem ipsum </p>
            <button>Check Now</button>  
          </div>
          <div className="rightcontent">
            <Image
              src={karakter}
              width={400}
              height={400}
              alt=""
              className="karakter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
