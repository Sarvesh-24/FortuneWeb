import { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  { id: "video1", url: "https://www.youtube.com/embed/gkPMzWKAPmU" },
  { id: "video2", url: "https://www.youtube.com/embed/NoiJBOYfqcY" },
  { id: "video3", url: "https://www.youtube.com/embed/b8z0h_QK4mo" },
  { id: "video4", url: "https://www.youtube.com/embed/0KZ-nEKBiZk" },
  { id: "video5", url: "https://www.youtube.com/embed/HVrIOAmRogQ" },
  { id: "video6", url: "https://www.youtube.com/embed/1kkAx78z_8w" },
  { id: "video7", url: "https://www.youtube.com/embed/hBi8K2u4qAk" },
  { id: "video8", url: "https://www.youtube.com/embed/1BjOmD0MQwU" },
  { id: "video9", url: "https://www.youtube.com/embed/G4OzmBoAlnw" },
  { id: "video10", url: "https://www.youtube.com/embed/W2Gvwrn2SB8" },
  { id: "video11", url: "https://www.youtube.com/embed/dpLumtgxyx8" },
  { id: "video12", url: "https://www.youtube.com/embed/J5vwTvhd4io" },
  { id: "video13", url: "https://www.youtube.com/embed/oGQsmvci9Jw" },
  { id: "video14", url: "https://www.youtube.com/embed/IvcbORWpJEY" },
  { id: "video15", url: "https://www.youtube.com/embed/xHLp_3sVGnU" },
  { id: "video16", url: "https://www.youtube.com/embed/hAhPFt4htv4" },
  { id: "video17", url: "https://www.youtube.com/embed/agwiyYS2wBs" },
  { id: "video18", url: "https://www.youtube.com/embed/dUX4FQF-jzY" },
  { id: "video19", url: "https://www.youtube.com/embed/-W86FA20P1k" },
  { id: "video20", url: "https://www.youtube.com/embed/URxSjWHEcb0" },
  { id: "video21", url: "https://www.youtube.com/embed/KzU-mlXBSXE" },
  { id: "video22", url: "https://www.youtube.com/embed/Su0BFKZjCtA" },
  { id: "video23", url: "https://www.youtube.com/embed/uJ_uWkfupSQ" },
  { id: "video24", url: "https://www.youtube.com/embed/NeLxaN0sBGE" },
  { id: "video25", url: "https://www.youtube.com/embed/1OxSSmF7Qos" },
  { id: "video26", url: "https://www.youtube.com/embed/WOF08bzlfJ8" },
  { id: "video27", url: "https://www.youtube.com/embed/x2j-vgTf1Rc" },
  { id: "video28", url: "https://www.youtube.com/embed/YZ5480Pk6Hs" },
  { id: "video29", url: "https://www.youtube.com/embed/NlKCWrmng8Q" },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerPage = 3;

  const totalSlides = Math.ceil(videos.length / videosPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden p-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ x: "-100%" }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {videos
          .slice(currentIndex * videosPerPage, currentIndex * videosPerPage + videosPerPage)
          .map((video) => (
            <div key={video.id} className="w-full">
              <iframe
                className="w-full h-64 md:h-80 lg:h-96 rounded-xl shadow-xl transition-transform transform hover:scale-105 dark:shadow-gray-700"
                src={video.url}
                title="YouTube Video"
                allowFullScreen
              />
            </div>
          ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition dark:bg-gray-300 dark:text-black"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition dark:bg-gray-300 dark:text-black"
      >
        ▶
      </button>
    </div>
  );
}
