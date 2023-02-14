import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const CartItems = ({ item }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const [qty, setQty] = useState(item.quantity);
  const [items, setItems] = useState([]);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
        }
      });
      cartDispatch();
    } else {
      if (qty == 1) {
        setItems(cartItems.filter((item) => item.id !== id));
        cartDispatch();
      } else {
        cartItems.map((item) => {
          setQty(qty - 1);
          if (item.id === id) {
            item.quantity -= 1;
          }
          cartDispatch();
        });
      }
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
    >
      <img
        src={item.imageURL}
        alt=""
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />
      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-200">{item.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>
      {/* button */}
      <div className="group flex to-current gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiMinus
            className="text-gray-200"
            onClick={() => updateQty("reomve", item?.id)}
          />
        </motion.div>
        <p className="w-5 h-5 -m-1 rounded-sm bg-cartBg text-gray-200 flex items-center justify-center">
          {qty}
        </p>
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiPlus
            className="text-gray-200"
            onClick={() => updateQty("add", item?.id)}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CartItems;


// -------------------------------------------------------------------------------------------
// import { BiMinus, BiPlus } from "react-icons/bi";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/Reducer";

// const CartItems = ({ item }) => {
//   const [{ cartItems }, dispatch] = useStateValue();

//   const [qty, setQty] = useState(item.quantity);
//   const [items, setItems] = useState([]);
//   const [tot, settot] = useState(second);

//   const cartDispatch = () => {
//     localStorage.setItem("cartItems", JSON.stringify(items));
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: items,
//     });
//   };

//   const updateQty = (action, id) => {
//     if (action == "add") {
//       setQty(qty + 1);
//       cartItems.map((item) => {
//         if (item.id === id) {
//           item.quantity += 1;
//         }
//       });
//       cartDispatch();
//     } else {
//       if (qty == 1) {
//         setItems(cartItems.filter((item) => item.id !== id));
//         cartDispatch();
//       } else {
//         cartItems.map((item) => {
//           setQty(qty - 1);
//           if (item.id === id) {
//             item.quantity -= 1;
//           }
//           cartDispatch();
//         });
//       }
//     }
//   };

//   useEffect(() => {
//     setItems(cartItems);
//   }, [qty]);

//   useEffect(() => {
//     let totalPrice = cartItems.reduce((accumulator, item) => {
//       return accumulator + item.quantity * item.price;
//     }, 0);
//     settot(totalPrice);
//   }, [tot, flag]);

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
//     >
//       <img
//         src={item.imageURL}
//         alt=""
//         className="w-20 h-20 max-w-[60px] rounded-full object-contain"
//       />
//       {/* name section */}
//       <div className="flex flex-col gap-2">
//         <p className="text-base text-gray-200">{item.title}</p>
//         <p className="text-sm block text-gray-300 font-semibold">
//           $ {parseFloat(item?.price) * qty}
//         </p>
//       </div>
//       {/* button */}
//       <div className="group flex to-current gap-2 ml-auto cursor-pointer">
//         <motion.div whileTap={{ scale: 0.75 }}>
//           <BiMinus
//             className="text-gray-200"
//             onClick={() => updateQty("reomve", item?.id)}
//           />
//         </motion.div>
//         <p className="w-5 h-5 -m-1 rounded-sm bg-cartBg text-gray-200 flex items-center justify-center">
//           {qty}
//         </p>
//         <motion.div whileTap={{ scale: 0.75 }}>
//           <BiPlus
//             className="text-gray-200"
//             onClick={() => updateQty("add", item?.id)}
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default CartItems;
