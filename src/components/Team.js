import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "R.S. PARTHASARATHY",
      position: "Partner | Founder | Time Trader",
      image: '/assets/profile/profile1.jpg',
      bio: " R.S. Parthasarathy, a Master in Business Administration with experience at prestigious institutions like Morgan Stanley and ICICI Securities, is a distinguished figure in the financial world. His unique market forecasts, which integrate Time, Price, and Vedic Mathematics, set him apart in the realm of financial analysis. In today’s tech-driven financial landscape, He specializes in developing advanced mathematical models and algorithms tailored for diverse asset classes. Renowned as an expert in Time Analysis, he is a highly sought-after trainer, having conducted numerous webinars for traders and investors. Additionally, he provides invaluable guidance to Mutual Fund Advisors, leveraging market timing techniques to optimize wealth management strategies.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 2,
      name: "BHAGESH GIRI",
      position: "Partner | Co-Founder",
      image: '/assets/profile/Profile2.webp',
      bio: "Bhagesh Giri brings over 16 years of extensive experience in Stock Market Industry, Specializing in Operations & Information Technology. As a Bachelor of Computer Applications, he has held key leadership roles in prominent corporate organizations, including Operations Head and Vice President. Throughout his career, He has provided strategic direction, streamlined processes, and empowered teams to embrace a culture of excellence and continuous improvement. As an ambitious and detail-oriented professional, Bhagesh has consistently delivered exceptional results, achieving high standards and fostering a strong work ethic. His proven track record highlights his ability to drive organizational success through operational efficiency and effective leadership.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 3,
      name: "Puja Khot",
      position: "Assistant Vice President",
      image: '/assets/profile/profile5.jpeg',
      bio: "Puja Khot is an accomplished finance professional with over 11 years of experience in financial management and analysis. She holds a Post Graduate Diploma in Financial Management along with a Certification in Financial Management. Puja excels in creating precise reports and conducting in-depth analyses of organizational performance to support data-driven decision-making. With expertise in driving team-oriented process improvements, she has a proven track record of enhancing operational effectiveness, profitability, and consumer retention while ensuring reliability and compliance. She is skilled in analyzing financial data, preparing detailed reports, and aligning financial strategies with business goals to achieve budgetary and strategic objectives efficiently.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    // {
    //   id: 4,
    //   name: "Rahul Shah",
    //   position: "Research Analyst",
    //   image: '/assets/profile/profile4.jpg',
    //   bio: "Rahul Shah, had 15+ years of experience into Hedge Fund Administration, Served multinational companies viz. State Street Corporation, Apex Fund services, Viteos Capital Market services, SS&C Globeop. Techno - Funda trader since 2012. Cleared NISIM Investment Advisor X-A and NISIM Investment Advisor X-B certification. Applied for SEBI Investment Advisor Certification",
    //   social: {
    //     twitter: "https://twitter.com",
    //     linkedin: "https://linkedin.com",
    //     github: "https://github.com"
    //   }
    // },

  ];

  const Modal = ({ member, onClose }) => {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${member.id}`}
      >
        <div
          className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <IoClose size={24} />
          </button>

          <div className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full object-cover mb-4"
              style={{ width: '128px', height: '128px' }} // Fix size directly
            />
            <h2 id={`modal-${member.id}`} className="text-2xl font-bold text-[#384f4b] dark:text-white mb-2">{member.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{member.position}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{member.bio}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="about section mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-roboto text-[#444444] dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-white text-center mb-4 font-inter">
          Our Team
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 dark:bg-blue-400"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setSelectedMember(member)}
              aria-haspopup="dialog"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ width: '128px', height: '128px' }} // Fixed size directly
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.position}</p>
              </div>
            </button>
          ))}
        </div>

        {selectedMember && (
          <Modal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Team;
