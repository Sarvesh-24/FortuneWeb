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
    {
      id: 4,
      name: "Sarvesh Walke",
      position: "Software Developer",
      image: '/assets/profile/profile4.webp',
      bio: "Sarvesh Walke is a highly skilled Software Developer with a B.Tech from K J Somaiya Institute of Technology, known for exceptional problem-solving abilities and a strong passion for building efficient, scalable solutions. With expertise in full-stack development and automation, Sarvesh excels at optimizing system performance and leveraging cutting-edge technologies to create robust applications. A quick learner with a keen eye for detail, always eager to tackle complex challenges and drive innovation.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },

    {
      id: 5,
      name: "Shubhada Khadye",
      position: "Accounts Executive",
      image: '/assets/profile/profile05.jpg',
      bio: "Shubhada is a creative and business-savvy accounting professional with 5 years of experience, bringing a unique blend of financial expertise and innovative thinking. Proven ability to identify client needs, develop customized solutions, and effectively manage complexity arising in finance resulting in significant revenue growth and customer satisfaction. Possesses a strong understanding of accounting principles and practices, combined with a passion for leveraging financial insights to achieve business objectives.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },

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
    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
  >
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
      aria-label="Close modal"
    >
      <IoClose size={24} />
    </button>

    {/* Modal Content */}
    <div className="flex flex-col items-center">
      {/* Profile Image */}
      <img
        src={member.image}
        alt={member.name}
        className="rounded-full object-cover mb-4"
        style={{ width: '128px', height: '128px' }} // Fixed image size
      />
      {/* Member Name */}
      <h2
        id={`modal-${member.id}`}
        className="text-2xl font-bold text-[#384f4b] dark:text-white mb-2"
      >
        {member.name}
      </h2>
      {/* Member Position */}
      <p className="text-gray-600 dark:text-gray-400 mb-4">{member.position}</p>
      {/* Member Bio */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        {member.bio}
      </p>
    </div>
  </div>
</div>

    
    );
  };

  return (
    <section
  id="team"
  className="w-full px-4 py-8 bg-white dark:bg-gray-900 text-[#444444] dark:text-gray-300 font-roboto transition-colors duration-300"
>
  <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-white text-center mb-4 font-inter">
      Our Team
    </h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 dark:bg-blue-400"></div>

    {/* Team Members Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member) => (
        <button
          key={member.id}
          className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setSelectedMember(member)}
          aria-haspopup="dialog"
        >
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name and Position */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{member.position}</p>
          </div>
        </button>
      ))}
    </div>

    {/* Modal for Selected Team Member */}
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
