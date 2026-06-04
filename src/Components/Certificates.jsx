import React, { useState } from "react";
import { certificates } from "../Constant";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <section
      id="certificate"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Certifications & Achievements</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Demonstrating my dedication to learning through professional certifications, technical training programs, and research contributions
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-x-12 gap-y-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            onClick={() => handleOpenModal(certificate)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-5">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-50 object-cover rounded-xl"
              />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {certificate.description}
              </p>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {certificate.issuer}
              </p>
          

              {/* Centered View Code Button */}
              <div
                className="flex justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking link
              >
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-800 text-gray-400 text-sm px-6 py-2 rounded-xl text-center font-semibold"
                >
                  View 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
