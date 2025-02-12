import { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  { id: "video1", url: "https://www.youtube.com/embed/Fmndt8_0qnI" },
  { id: "video2", url: "https://www.youtube.com/embed/KgCXW2YMTi4" },
  { id: "video3", url: "https://www.youtube.com/embed/Fmndt8_0qnI" },
  { id: "video4", url: "https://www.youtube.com/embed/Fmndt8_0qnI" },
  { id: "video5", url: "https://www.youtube.com/embed/Fmndt8_0qnI" },
  { id: "video6", url: "https://www.youtube.com/embed/Fmndt8_0qnI" },
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
