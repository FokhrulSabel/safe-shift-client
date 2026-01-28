import {
  Building2,
  CreditCard,
  Globe,
  PackageCheck,
  RotateCcw,
  Truck,
} from "lucide-react";
import React from "react";

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "Fast and reliable delivery across cities within 24–72 hours.",
    icon: <Truck />,
  },
  {
    title: "Nationwide Delivery",
    desc: "Wide delivery network ensuring reach to rural and urban areas.",
    icon: <Globe />,
    highlight: true,
  },
  {
    title: "Fulfillment Solution",
    desc: "Inventory, packaging, order processing, and after-sales support.",
    icon: <PackageCheck />,
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash-on-delivery service with guaranteed safety.",
    icon: <CreditCard />,
  },
  {
    title: "Corporate & Contract Logistics",
    desc: "Customized logistics services for enterprises and SMEs.",
    icon: <Building2 />,
  },
  {
    title: "Parcel Return",
    desc: "Easy and reliable return system for rejected or exchanged goods.",
    icon: <RotateCcw />,
  },
];

const OurServices = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b3b3f] rounded-3xl py-16 px-6 md:px-12">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-sm opacity-80 mt-3 max-w-xl mx-auto">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 text-center transition bg-white text-secondary
                  `}
              >
                <div
                  className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4
                    ${service.highlight ? "bg-white" : "bg-gray-100"}`}
                >
                  {service.icon}
                </div>

                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm opacity-80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
