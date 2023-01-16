import { IoMdBasket } from "react-icons/io";
import Logo from "./img/logo.png";
import Avatar from "./img/avatar.png";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-5 px-16">
      {/*"destop"*/}
      <div className="hidden md:flex h-full w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">STUFFED</p>
        </div>
        <div className=" flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <IoMdBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xm text-white font-semibold">2</p>
            </div>
          </div>
          <img
            src={Avatar}
            className="w-10 min-w-[40] h-10 min-h-40 drop-shadow-xl"
            alt="user-img"
          />
        </div>
      </div>
      {/*"mobile*/}
      <div className="flex md:hidden h-full w-full"></div>
    </header>
  );
};
export default Header;
