import React from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaArrowRightToCity,
} from "react-icons/fa6";

const Application = () => {
  return (
    <div className="grid  grid-row py-12 bg-gray-400 rounded-2xl">
      <div className="mb-5 underline-offset-8">
        <p className="text-center text-2xl ">
          <span className="font-bold text-orange-500 uppercase ">
            Study@VELISA
          </span>{" "}
          | Follow this 4-step process to your future at our Academy
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-3 mx-5 ">
        {/* step1 */}
        <div className="p-5 m-2 bg-white border border-gray-600 shadow-lg cursor-pointer rounded-2xl">
          <Image
            src={"/Application-images/step1.jpg"}
            alt={"step 1"}
            width={"400"}
            height={"200"}
            className="mb-5 rounded-full"
          />
          <div className="px-2">
            <h3 className="font-semibold py-2">Step 1: Discovery</h3>
            <p className="pb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              enim natus. Deleniti ratione nemo totam eos, laboriosam sapiente
              dicta sit, porro facilis mollitia laudantium eius vitae illo, et
              excepturi amet!
            </p>
            <span className="text-sm font-semibold text-orange-500 hover:underline flex items-center">
              Find out more
              <FaArrowRight className="ml-2" />
            </span>
          </div>
        </div>
        {/* step2 */}
        <div className="p-5 m-2 bg-white border border-gray-600 shadow-lg cursor-pointer rounded-2xl">
          <Image
            src={"/Application-images/step2.jpg"}
            alt={"step 2"}
            width={"400"}
            height={"200"}
            className="mb-5 rounded-full"
          />
          <div className="px-2">
            <h3 className="font-semibold py-2">Step 2: Application</h3>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              earum eos quae, harum officiis pariatur cupiditate et maiores ad
              temporibus voluptatibus alias accusamus, odio esse nisi reiciendis
              ullam perspiciatis vel.
            </p>
            <span className="text-sm font-semibold text-orange-500 hover:underline flex items-center">
              Find out more
              <FaArrowRight className="ml-2" />
            </span>
          </div>
        </div>
        {/* step 3 */}
        <div className="p-5 m-2 bg-white border border-gray-600 shadow-lg cursor-pointer rounded-2xl">
          <Image
            src={"/Application-images/step3.jpg"}
            alt={"step 1"}
            width={"400"}
            height={"200"}
            className="mb-5 rounded-full"
          />
          <div className="px-2">
            <h3 className="font-semibold py-2">Step 3: Admission</h3>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              earum eos quae, harum officiis pariatur cupiditate et maiores ad
              temporibus voluptatibus alias accusamus, odio esse nisi reiciendis
              ullam perspiciatis vel.
            </p>
            <span className="text-sm font-semibold text-orange-500 hover:underline flex items-center">
              Find out more
              <FaArrowRight className="ml-2" />
            </span>
          </div>
        </div>
        {/* step 4 */}
        <div className="p-5 m-2 bg-white border border-gray-600 shadow-lg cursor-pointer rounded-2xl">
          <Image
            src={"/Application-images/step4.jpg"}
            alt={"step 1"}
            width={"400"}
            height={"200"}
            className="mb-5 rounded-full"
          />
          <div className="px-2">
            <h3 className="font-semibold py-2">Step 4: Registration</h3>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              earum eos quae, harum officiis pariatur cupiditate et maiores ad
              temporibus voluptatibus alias accusamus, odio esse nisi reiciendis
              ullam perspiciatis vel.
            </p>
            <span className="text-sm font-semibold text-orange-500 hover:underline flex items-center">
              Find out more
              <FaArrowRight className="ml-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
