import React from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import CategoryTypeCard from "./CategoryTypeCard";
import { featured } from "../../../../data/Data";
import CustomSlider from "../../../utils/CustomSlider";

const CategoryTypes = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // className: "center",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className={`${styled.featured} featured  my-[2rem] bg-gray-100 py-[1rem] `}
      >
        <div className="container">
          <Heading
            title="Popular Categories"
            subtitle="Find All Type of Property."
          />
          <div className="my-[1rem]">
            <CustomSlider settings={settings}>
              {featured.map((feature, index) => (
                <CategoryTypeCard feature={feature} key={index} />
              ))}
            </CustomSlider>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryTypes;
