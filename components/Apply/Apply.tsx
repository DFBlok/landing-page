import Link from "next/link";
import React from "react";
import Image from "next/image";
import Application from "../Application/Application";

const Apply = () => {
  return (
    <div className="min-h-screen bg-gray-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          How to Apply for Our{" "}
          <span className="text-orange-400">MERN Stack</span> Web Development
          Course
        </h1>

        <p className="text-lg mb-4">
          The course is available in three different formats. Choose the format
          that best fits your preferred way of learning:
        </p>
        <div className="flex justify-center items-center gap-4 my-6">
          <div className="flex flex-col items-center">
            <Image
              src={"/study/self-paced.jpg"}
              alt="self-paced learning"
              width={200}
              height={300}
              className="mb-2 transition-all hover:scale-110 duration-300"
            />
            <p className=" text-center">Self-paced</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/study/online-learning.jpg"}
              alt="online learning"
              width={200}
              height={300}
              className="mb-2 transition-all hover:scale-110 duration-300"
            />
            <p className="text-center">Instructor-led (Online)</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/study/blended.jpg"}
              alt="blended learning"
              width={200}
              height={300}
              className="mb-2 transition-all hover:scale-110 duration-300"
            />
            <p>Blended</p>
          </div>
        </div>
        {/* Application Section */}
        <Application />

        <h2 className="text-xl font-semibold my-5">Important Notes:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Make sure to read the{" "}
            <Link href="/faq" className="text-blue-600 hover:underline">
              FAQ
            </Link>{" "}
            page for common queries.
          </li>
          <li>
            In the <span className="font-bold">Introduction Video</span>, we
            will explain how to follow the course.
          </li>
          <li>
            During classes, microphones will be muted, and questions can be
            asked in the Discord chat.
          </li>
        </ul>

        <p className="text-lg mb-6">
          For any additional queries, feel free to write to us via email at{" "}
          <a
            href="mailto:info@velisaafrica.co.za"
            className="text-blue-600 hover:underline"
          >
            info@velisaafrica.co.za
          </a>
          .
        </p>

        <div className="text-center">
          <Link
            href="/videos/introduction"
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-700"
          >
            Watch Introduction Video
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apply;
