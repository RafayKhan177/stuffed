import { IoMdBasket } from "react-icons/io";
import { MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
import { useState } from "react";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  // console.log(cartItems);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed bg-primary z-50 w-screen p-3 px-4 ms:p-6 md:px-16">
      {/*"destop"*/}
      <div className="hidden md:flex  w-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">STUFFED</p>
        </Link>
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
          <div  onClick={showCart} className="relative flex items-center justify-center">
            <IoMdBasket
              className="text-textColor text-2xl cursor-pointer"
             
            />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xm text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-40 rounded-full h-10 min-h-40 drop-shadow-xl cursor-pointer"
              alt="user-img"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg absolute flex flex-col  py-2 right-0 top-12"
              >
                {user && user.email === "abdulrafaykhan857@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base py-2">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <hr />
                <p
                  className="px-4 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base py-2"
                  onClick={logout}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/*"mobile*/}
      <div className="flex items-center justify-between md:hidden h-full w-full">
        <div className="relative flex items-center justify-center">
          <IoMdBasket
            onClick={showCart}
            className="text-textColor text-2xl cursor-pointer"
          />

          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xm text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">STUFFED</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-40 rounded-full h-10 min-h-40 drop-shadow-xl cursor-pointer"
            alt="user-img"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg absolute flex flex-col  py-2 right-0 top-12"
            >
              {user && user.email === "abdulrafaykhan857@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base py-2">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}{" "}
              <hr />
              <ul className="flex flex-col py-1 items-left">
                <li className="text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-200">
                  Home
                </li>
                <li className="text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-200">
                  Menu
                </li>
                <li className="text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-200">
                  Service
                </li>
                <li className="text-base px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-200">
                  About Us
                </li>
              </ul>
              <hr />
              <p
                className="px-4 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base py-2"
                onClick={logout}
              >
                Logout
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
