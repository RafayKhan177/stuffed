import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "../utils/data";

export default function HomeContainer() {

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full overflow-hidden"
      id="home"
    >
      <div className="py-2 gap-6 flex-1 flex flex-col items-start justify-start md:items-start">
        <div className="flex items-center justify-center gap-2 bg-orange-100 py-1 px-4 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              alt="Delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor">
          Fastest Delivery In{" "}
          <span className=" text-orange-600 text-[3rem] md:text-[5rem] ">
            Your City
          </span>
        </p>
        <p className=" text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          recusandae, consequuntur quo aperiam voluptatem dolorum. Totam magni
          aperiam modi illum?
        </p>
        <button className="bg-gradient-to-br from-orange-400 to bg-orange-500 w-full xl:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-start relative overflow-auto scrollbar-thin">
        <img
          src={HeroBg}
          alt="bg"
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
        />
        <div className=" w-100  m-0 absolute top-0 left-0 flex items-center justify-center xl:mx-[4rem] my-20 gap-2 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="w-90 h-[100%] p-8 my-8 bg-red-500 bg-cardOverlay drop-shadow-lg backdrop-blur-md rounded-3xl flex-col flex items-center justify-center"
              >
                <img
                  src={n.image}
                  style={{ height: "8rem" }}
                  alt="Dish"
                  className="w-30 -mt-20 "
                />
                <p className="text-base font-semibold text-textColor">
                  {n.name}
                </p>
                <p className="text-sm  text-lighttextGray font-semiboldmy my-3">
                  {n.desc}
                </p>
                <p className="text-sm text-textColor font-semibold">
                  <span className="text-xs text-red-500">$ </span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
