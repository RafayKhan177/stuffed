import { motion } from "framer-motion";
import { CartContainer, HomeContainer, MenuContainer, RowContainer } from ".";
import Delivery from "../img/delivery.png";
import { useStateValue } from "../context/StateProvider";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

export default function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex-col items-center justify-center overflow-x-hidden">
      <HomeContainer />
      <section className="w-full y-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 before:w-32 transition-all ease-in-out duration-100">
            Our Fresh & Healthy Food
          </p>
          <div className="hidden md:flex gap-3 items-center ">
            <motion.div
              onClick={() => setScrollValue(-200)}
              whileTap={{ scale: 0.75 }}
              className="w-full p-1 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex items-center justify-center hover:shadow-lg "
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              onClick={() => setScrollValue(200)}
              whileTap={{ scale: 0.75 }}
              className="w-full p-1 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex items-center justify-center transition-all duration-100 ease-in-out hover:shadow-lg "
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fish")}
        />
      </section>
      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
}
