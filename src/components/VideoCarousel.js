import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const videos = [
  { id: "video1", url: "https://www.youtube.com/embed/Fmndt8_0qnI" },
  { id: "video2", url: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2" },
  { id: "video3", url: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3" },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlay]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden p-4">
      <motion.div
        className="flex"
        initial={{ x: "-100%" }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {videos.map((video) => (
          <div key={video.id} className="w-full flex-shrink-0">
            <iframe
              className="w-full h-56 md:h-72 lg:h-96 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:shadow-gray-700"
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition dark:bg-gray-300 dark:text-black"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition dark:bg-gray-300 dark:text-black"
      >
        ▶
      </button>

      {/* AutoPlay Toggle */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition dark:bg-blue-400 dark:hover:bg-blue-500"
        >
          {isAutoPlay ? "Pause Autoplay" : "Start Autoplay"}
        </button>
      </div>
    </div>
  );
}
