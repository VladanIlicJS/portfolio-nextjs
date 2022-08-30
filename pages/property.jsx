import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";

import {RiRadioButtonFill} from 'react-icons/ri'
const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 h-[30vh] lg:h-[40vh] w-full bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] xl:top-[50%] translate-x-[-50%] text-white translate-y-[-50%] z-10 ">
          <h2>Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            laborum nostrum tenetur voluptatem eos? Laborum est sed doloribus.
            Ea repudiandae quisquam deserunt dolorum minus accusamus numquam
            tempore voluptatem vel odio! Architecto est maxime illum dolor?
            Tempore necessitatibus dolorum deserunt, delectus voluptatem
            aspernatur ipsam? Dignissimos, id architecto? Soluta, consectetur
            amet nostrum quas nam ullam porro maiores expedita repudiandae
            praesentium saepe eveniet vel quo perspiciatis aliquid asperiores
            corporis libero adipisci! Mollitia voluptates quos, debitis maxime
            officia suscipit animi tempora qui? Eius fuga magni sunt cupiditate?
            Cupiditate corrupti repellendus accusantium cum tenetur esse
            temporibus quidem molestias aut veniam modi numquam, dolor possimus
            eaque!
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 ">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl  shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p2 className="text-center font-bold pb-2">Technologies</p2>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill/>  React</p>
              <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill/>  Tailwind</p>
              <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill/>  JavaScript</p>
              <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill/>  Firebase</p>
              <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill/>  Google Api</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
