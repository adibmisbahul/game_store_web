import Image from "next/image";

import "./navbar.css";
import NotifIcon from "../assets/notif.svg"; 
import messageIcon from "../assets/message.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="sideleft">
        <input type="search" placeholder="Search" />
      </div>
      <div className="sideright flex">
        <Image src={messageIcon} width={20} height={20} alt=""/>
        <Image src={NotifIcon} width={20} height={20} alt=""/>

      </div>
    </div>
  );
}
