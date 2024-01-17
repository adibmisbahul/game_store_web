import Image from "next/image";

import "./sidebar.css";
import gameIcon from "../assets/game.svg";
import dashboardIcon from "../assets/dashboard.svg";
import favoriteIcon from "../assets/favorites.svg";
import comingIcon from "../assets/clock.svg";
import setingIcon from "../assets/settings.svg";
import chartIcon from "../assets/cart.svg";

import Logo from "../assets/logo.png";

export default function sideBar() {
  return (
    <div className="sidebar12">
      <div className="uplogo">
        <Image
          className="logo"
          src={Logo}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
      <div className="downnavbar">
        <div className="flex gap-5">
          <Image src={dashboardIcon} width={25} height={25} alt="haloo" />
          <h1>Dashboard</h1>
        </div>
        <div className="flex gap-5">
          <Image src={gameIcon} width={25} height={25} alt="haloo" />
          <h1>Game Store</h1>
        </div>
        <div className="flex gap-5">
          <Image src={chartIcon} width={25} height={25} alt="haloo" />
          <h1>My Games</h1>
        </div>
        <div className="flex gap-5">
          <Image src={favoriteIcon} width={25} height={25} alt="haloo" />
          <h1>Favorites</h1>
        </div>
        <div className="flex gap-5">
          <Image src={comingIcon} width={25} height={25} alt="haloo" />
          <h1>Coming Soon</h1>
        </div>
        <div className="flex gap-5">
          <Image src={setingIcon} width={25} height={25} alt="haloo" />
          <h1>Settings</h1>
        </div>
      </div>
    </div>
  );
}
