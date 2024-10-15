import React from "react";

const services = [
  {
    id: 1,
    name: "Hair Styling",
    description: "Professional haircuts and styling for all types of hair.",
    image: "/service-images/hair-stylist.jpg",
    price: "$50",
  },
  {
    id: 2,
    name: "Massage Therapy",
    description: "Relaxing massages to rejuvenate your body and mind.",
    image: "/service-images/massage-therapy.jpg",
    price: "$75",
  },
  {
    id: 3,
    name: "Nail Care",
    description:
      "Manicure and pedicure services for beautiful and healthy nails.",
    image: "/service-images/nail-care.jpg",
    price: "$30",
  },
  // Add more services as needed
];

const ServiceList = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="{service.id}"
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-lg font-bold text-gray-800">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
