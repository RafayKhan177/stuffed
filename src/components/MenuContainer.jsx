import { useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { Category } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();
  console.table(foodItems);


  return (
    <section className="w-full">
      <div className="w-full flex flex-col items-start justify-center ">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 before:w-32 transition-all ease-in-out duration-100">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none py-6">
          {Category &&
            Category.map((category) => (
              <motion.div
                whileTap={{ scale: 0.6 }}
                onClick={() => setFilter(category.urlParamName)}
                key={category.id}
                className={`${
                  filter === category.urlParamName
                    ? "  bg-cartNumBg"
                    : "bg-card  "
                } group w-24 hover:bg-cartNumBg min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col items-center justify-center gap-3 `}
              >
                <div
                  className={`${
                    filter === category.urlParamName
                      ? "   bg-card  "
                      : "bg-cartNumBg"
                  } shadow-lg w-10 h-10 rounded-full bg-cartNumBg group-hover:bg-card flex items-center justify-center`}
                >
                  <MdFastfood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor "
                        : "text-card "
                    }  text-lg group-hover:text-textColor`}
                  />
                </div>
                <p
                  className={`${
                    filter === category.urlParamName
                      ? " text-white  "
                      : " text-textColor"
                  } text-sm  group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full ">
          <RowContainer
            flag={false}
            data={foodItems?.filter(n => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
