import Link from "next/link";
import React from "react";

const Apply = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          How to Apply for Our MERN Stack Web Development Course
        </h1>

        <p className="text-lg mb-4">
          The course is available in three different formats. Choose the format
          that best fits your preferred way of learning:
        </p>
        <div className="flex justify-center items-center gap-4 my-6">
          <div className="flex flex-col items-center">
            <img
              src={"./study/low-energy.gif"}
              alt="self-paced"
              width={100}
              height={300}
              className="mb-2"
            />
            <p>Self-paced</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={"./study/stickman.gif"}
              alt="self-paced"
              width={100}
              height={300}
            />
            <p className="text-center">Instructor-led (Online)</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={"./study/student.gif"}
              alt="self-paced"
              width={100}
              height={300}
            />
            <p>Blended</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">Application Steps:</h2>

        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>
            Create an account by clicking the{" "}
            <span className="font-bold">New Account</span> button.
          </li>
          <li>Watch our free videos to help you decide.</li>
          <li>
            After deciding which format to choose, proceed with payment. You
            must be logged in to access your dashboard.
            <span className="font-bold"> Click on Bank Details</span>.
            Instructions will be available in your dashboard.
          </li>
          <li>
            When making a payment via EFT, use your{" "}
            <span className="font-bold">student ID</span> as the unique
            reference number, which you will find in your dashboard.
          </li>
          <li>
            Send an email with the attached payment slip to{" "}
            <a
              href="mailto:info@velisaafrica.co.za"
              className="text-blue-600 hover:underline"
            >
              info@velisaafrica.co.za
            </a>
            , mentioning your Student ID in the subject line.
          </li>
          <li>
            Update your profile. This information will be used to generate your
            course completion certificate.
          </li>
          <li>
            We will add you to our chat group on Discord, where you will find
            further instructions.{" "}
            <span className="font-bold">Download Discord</span>.
          </li>
        </ol>

        <h2 className="text-xl font-semibold mb-2">Important Notes:</h2>
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
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
          >
            Watch Introduction Video
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apply;
