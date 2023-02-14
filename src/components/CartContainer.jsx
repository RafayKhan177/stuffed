import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
import NotFound from "../Images/notFound.png";
import CartItems from "./CartItems";
import { useEffect, useState } from "react";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [tot, setTot] = useState();
  // const [flag, setFlag] = useState(0)

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.price;
    }, 0);
    setTot(totalPrice);
  }, [
    tot,
    // flag
  ]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col right-0 top-0 z-[100]"
    >
      <div className="w-full h-[10vh] flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} className="" onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="to-textColor text-lg font-semibold">Cart</p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => clearCart()}
          className=""
        >
          <p className="flex items-center justify-center gap-3 px-2 my-2 bg-gray-100 rounded-md text-base">
            Clear <RiRefreshFill />
          </p>
        </motion.div>
      </div>
      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="h-full w-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-[60vh] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {/* cart items */}
            {cartItems &&
              cartItems.map((item) => <CartItems key={item.id} item={item} />)}

            {/* --------------------------------------------------------------------------------------------------- */}
          </div>
          {/* cart total section */}
          <div className="w-full flex-1 h-[30vh] bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-center px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">sub total</p>
              <p className="text-gray-400 text-lg">$ {tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">delivery</p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex items-center justify-center">
              <p className="text-gray-200 text-xl font-semibold">Total </p>
              <p className="text-gray-200 text-xl font-semibold">
                {" "}
                $ {tot + 2.5}
              </p>
            </div>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg "
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg "
              >
                Login to Check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={NotFound} alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
