import { Key } from "lucide-react";
import React from "react";
import Image from "next/image";
const Frontend = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "Javascript Unit Testing" },
  { id: 5, name: "React" },
  { id: 6, name: "TailWindCss" },
  { id: 7, name: "Next.js" },
  { id: 8, name: "State Management" },
  { id: 9, name: "CSR, SSR, SSG" },
  { id: 10, name: "TypeScript" },
  { id: 11, name: "Authentication" },
  { id: 12, name: "Next-Auth" },
  { id: 13, name: "Radix UI" },
  { id: 14, name: "Shadcn" },
  { id: 15, name: "zod" },
  { id: 16, name: "DataStructure and Algorithms" },
];
const Backend = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Express" },
  { id: 3, name: "MongoDB" },
  { id: 4, name: "SQL" },
  { id: 5, name: "PostgresSQL" },
  { id: 6, name: "Prisma" },
  { id: 7, name: "Serverless Backend" },
  { id: 8, name: "Backend Communication" },
  { id: 9, name: "Websocket" },
  { id: 10, name: "Messaging Quenes, Pub subs, Redis" },
];
const DevOps = [
  { id: 1, name: "Docker Basic" },
  { id: 2, name: "Turbo & Monorepo" },
  { id: 3, name: "Git & Github" },
  { id: 4, name: "Hosting" },
  { id: 5, name: "Continuous Integration and Continuous Deployment(CI/CD)" },
  { id: 6, name: "Github Actions, CI/CD" },
  { id: 7, name: "VPS Hosting" },
  { id: 8, name: "Docker Advance" },
];

const Hero = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-10">
          Courses Offer:
        </h2>
        {/* <div className="text-center text-2xl mb-5">
          <ul>
            <p className="underline ">Course Details:</p>
            <li>
              Duration: <span className="font-bold">9 months</span>
            </li>
            <li>
              Time:{" "}
              <span className="font-bold">1 hour (3:30PM - 4:30PM (SAST))</span>
            </li>
            <li>
              {" "}
              Date: <span className="font-bold">Monday - Friday</span>
            </li>
          </ul>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend</h3>
            <div>
              <Image
                src={"/study/student.gif"}
                alt="blended learning"
                width={200}
                height={300}
                className="mb-2 transition-all hover:scale-110 duration-300"
              />
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              repudiandae.
            </p>
            <div className="flex flex-wrap cursor-pointer">
              {Frontend.map((frontend) => (
                <div
                  key={frontend.id}
                  className="inline-block bg-gray-400 rounded-full px-2 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-orange-400 hover:text-white"
                >
                  {frontend.name}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend</h3>
            <div>
              <Image
                src={"/study/stickman.gif"}
                alt="blended learning"
                width={200}
                height={300}
                className="mb-2 transition-all hover:scale-110 duration-300"
              />
            </div>

            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis!
            </p>
            <div className="flex flex-wrap cursor-pointer">
              {Backend.map((backend) => (
                <div
                  key={backend.id}
                  className="inline-block bg-gray-400 rounded-full px-2 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-orange-400 hover:text-white"
                >
                  {backend.name}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dev Ops</h3>
            <div>
              <Image
                src={"/study/low-energy.gif"}
                alt="blended learning"
                width={200}
                height={300}
                className="mb-2 transition-all hover:scale-110 duration-300"
              />
            </div>

            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              quasi?.
            </p>
            <div className="flex flex-wrap cursor-pointer">
              {DevOps.map((devops) => (
                <div
                  key={devops.id}
                  className="inline-block bg-gray-400 rounded-full px-2 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-orange-400 hover:text-white"
                >
                  {devops.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
