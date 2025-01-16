import React from "react";

const Certificates = () => {
  const certificates = [
    {
      
      image: "../assets/certificate-1.png",
      link: "https://www.freecodecamp.org/certification/SodabaRauf/responsive-web-design",
    },
    {
      image: "../assets/certificate-2.png",
      link: "https://www.freecodecamp.org/certification/SodabaRauf/javascript-algorithms-and-data-structures-v8",
    },
    {
      image: "../assets/certificate-3.png",
      link: "https://www.freecodecamp.org/certification/SodabaRauf/front-end-development-libraries",
    },
  ];

  return (
    <section id="certificates" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Certificate Image */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover"
              />
              {/* Certificate Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {certificate.title}
                </h3>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
