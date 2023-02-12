import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../Images/notFound.jpg";

const RowContainer = ({ flag, data, scrollValue }) => {
  // console.table(data);

  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <section
      ref={rowContainer}
      className={`overflow-x-scroll scroll-smooth scrollbar-none w-full flex items-center gap-3 my-12${
        flag ? "" : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 h-auto min-w-[300px] md:w-[340px] my-12 bg-cardOverlay backdrop-blur-lg rounded-lg p-2 hover:drop-shadow-lg flex flex-col justify-between items-center"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item.imageURL}
                  alt="food pic"
                  className="h-40 w-40 object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex items-end justify-end flex-col gap-1">
              <p className="to-textColor font-semibold md:text-lg text-base">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-lg text-red-500">$ </span>
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex items-center justify-center   flex-col gap-1">
          <img src={NotFound} alt="not found" className="h-[15rem] w-[15rem] rounded-xl" />
          <p className="text-xl text-headingColor font-semibold my-3">ITEMS NOT AVAILEBLE</p>
        </div>
      )}
    </section>
  );
};

export default RowContainer;
