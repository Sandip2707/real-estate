import React,{useState,useEffect} from "react";
import Heading from "../../common/Heading";
import styled from "./hero.module.css";
import { BsSearch } from "react-icons/bs";
import CustomSelect from "@/components/utils/CustomSelect";
import { locationData, propertyMeta } from "@/data/Data";

const Hero = () => {
  
  const [show, setShow] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("lg");
  const handleResize = (e) => {
    if (window.innerWidth >= 1024) return setCurrentDevice("lg");
    if (window.innerWidth <= 768) return setCurrentDevice("sm");
    if (window.innerWidth > 768 && window.innerWidth < 1024)
      return setCurrentDevice("md");
  };

  

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 10) return setRedBackground(true);
      setRedBackground(false);
    });
    handleResize()
  }, []);
  return (
    <>
      <section className={`${styled.hero} `}>
        <div className={`container ${styled.container}`}>
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />
          <button
            onClick={(e) => {
              console.log(e.currentTarget.parentNode.lastChild);
              e.currentTarget.parentNode.lastChild.classList.toggle("hidden");
            }}
            className={`flex items-center justify-between gap-1 w-[100%] text-2xl mt-[2rem]`}
          >
            <span className="text-gray-100 text-xl font-semibold ">
              Search Property
            </span>
            <BsSearch />
          </button>
          {/* <button
            onClick={(e) => {
              e.currentTarget.parentNode.lastChild.classList.toggle("hidden");
            }}
            type="button"
            class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap"
              sidebar-toggle-item
            >
              Search
            </span>
          </button> */}
          <form className="hidden">
            <ul id="dropdown-example" class=" bg-white p-[1rem]">
              <li>
                {/* <div className="flex flex-col flex-wrap"> */}
                <CustomSelect
                  className="py-1"
                  optionValues={locationData.provinces}
                  name={"provinces"}
                />

                <CustomSelect
                  className="py-1"
                  optionValues={locationData.districts}
                  name="district"
                />
                <CustomSelect
                  className="py-1"
                  optionValues={locationData.localLevels}
                  name="local levels"
                />

                {/* <span>City/Street</span>
              <input
                className={`${styled.input} input`}
                type="text"
                placeholder="Type"
              /> */}
                {/* </div> */}
              </li>
              <li>
                <CustomSelect
                  className="py-1"
                  optionValues={propertyMeta.purposes}
                  name="Purpose"
                />
              </li>
              <li>
                <CustomSelect
                  className="py-1"
                  optionValues={propertyMeta.types}
                  name="types"
                />
              </li>
              <li>
                <CustomSelect
                  className="py-1"
                  optionValues={propertyMeta.budget}
                  name="budget"
                />
              </li>
              <li>
                <button
                  className={`flex items-center justify-center gap-3 w-[100%] text-lg py-[8px]`}
                >
                  <BsSearch />
                  <span className="text-gray-100 text-xl font-semibold ">
                    Search
                  </span>
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;

<form
  className={`flex flex-col gap-0   flex-wrap ${styled.flex} ${styled.form}`}
>
  <div className="flex flex-row flex-wrap">
    <div className={`${styled.box} box`}>
      <CustomSelect optionValues={locationData.provinces} name={"provinces"} />
    </div>

    <div className={`${styled.box} box`}>
      <CustomSelect optionValues={locationData.districts} name="district" />
    </div>
    <div className={`${styled.box} box`}>
      <CustomSelect
        optionValues={locationData.localLevels}
        name="local levels"
      />
    </div>

    {/* <span>City/Street</span>
              <input
                className={`${styled.input} input`}
                type="text"
                placeholder="Type"
              /> */}
  </div>
  <div className={styled.box}>
    <span>Search Location</span>
    <input className={styled.input} type="text" placeholder="Property Type" />
  </div>
  <div className={styled.box}>
    <span>Property Type</span>
    <input className={styled.input} type="text" placeholder="Property Type" />
  </div>
  <div className={styled.box}>
    <span>Price Range</span>
    <input className={styled.input} type="text" placeholder="Price Range" />
  </div>

  <button
    className={`flex items-center justify-center gap-1 w-[100%] text-2xl`}
  >
    <BsSearch />
    <span className="text-gray-100 text-xl font-semibold ">Search</span>
  </button>
</form>;
