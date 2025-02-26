import React from "react";
import { MdPaid } from "react-icons/md";

const Description: React.FC = () => {
  return (
    <div className="w-[70rem] text-white">
      <div className="flex flex-col gap-5 ">
        <div>
          <div className="flex items-center gap-2">
            <span className="block w-[2rem] border-t-2 border-[#FDD74D] my-4" />
            <h4
              className="text-[#FDD74D] capitalize font-semibold"
              style={{ textTransform: "uppercase" }}
            >
              Smell so good
            </h4>
          </div>

          <h1
            className="text-[3rem] max-w-[30rem] font-bold capitalize "
            style={{ textTransform: "uppercase" }}
          >
            Authentic Ramen Taste the Tradition
          </h1>
        </div>
        <p className="max-w-[30rem] text-[.8rem]">
          Savor the rich flavors of our signature ramen, crafted with the
          freshest ingredients. Each bowl is a perfect balance of savory broth,
          tender noodles, and delicious toppings. Come experience the authentic
          taste of Japan at our ramen stall!
        </p>
      </div>
      <div className="w-full flex gap-5" style={{ paddingTop: "2rem" }}>
        <button
          className="text-black font-bold bg-[#FDD74D] rounded-lg hover:cursor-pointer flex items-center gap-4"
          style={{ padding: ".5rem 2rem", textTransform: "uppercase" }}
        >
          Buy Now
          <span className="text-[1.5rem]">
            <MdPaid />
          </span>
        </button>
        <button
          className="text-[#FDD74D] font-bold  rounded-lg hover:cursor-pointer"
          style={{
            padding: ".5rem 2rem",
            border: "2px solid #FDD74D",
            textTransform: "uppercase",
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Description;
