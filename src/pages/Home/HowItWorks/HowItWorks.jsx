import React from "react";

import { MapPin, Wallet, Warehouse, Briefcase } from "lucide-react";

const steps = [
  {
    title: "Booking Pick & Drop",
    desc: "Schedule crop pickup and delivery with flexible time slots.",
    icon: <MapPin className="text-teal-700" />,
  },
  {
    title: "Cash on Delivery",
    desc: "Secure payment system ensuring trust between farmers and buyers.",
    icon: <Wallet className="text-teal-700" />,
  },
  {
    title: "Delivery Hub",
    desc: "Centralized hubs for faster sorting and distribution.",
    icon: <Warehouse className="text-teal-700" />,
  },
  {
    title: "SME & Corporate Booking",
    desc: "Bulk and contract-based logistics solutions for businesses.",
    icon: <Briefcase className="text-teal-700" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-lg font-bold mb-8">
          How it Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-full mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
