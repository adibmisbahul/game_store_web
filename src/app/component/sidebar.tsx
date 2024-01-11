import Image from "next/image";

import "./sidebar.css";

import Logo from "../assets/logo.png";

export default function sideBar() {
  return (
    <div className="sidebar12">
      <div>
        <Image
          className="logo"
          src={Logo}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
