import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "gkPMzWKAPmU", "NoiJBOYfqcY", "b8z0h_QK4mo", "0KZ-nEKBiZk", "HVrIOAmRogQ",
  "1kkAx78z_8w", "hBi8K2u4qAk", "1BjOmD0MQwU", "G4OzmBoAlnw", "W2Gvwrn2SB8",
  "dpLumtgxyx8", "J5vwTvhd4io", "oGQsmvci9Jw", "IvcbORWpJEY", "xHLp_3sVGnU",
  "hAhPFt4htv4", "agwiyYS2wBs", "dUX4FQF-jzY", "-W86FA20P1k", "URxSjWHEcb0",
  "KzU-mlXBSXE", "Su0BFKZjCtA", "uJ_uWkfupSQ", "NeLxaN0sBGE", "1OxSSmF7Qos",
  "WOF08bzlfJ8", "x2j-vgTf1Rc", "YZ5480Pk6Hs", "NlKCWrmng8Q"
];

const VideoCarousel = () => {
  const [index, setIndex] = useState(0);
  const videosPerPage = 3;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? Math.floor(videos.length / videosPerPage) * videosPerPage : prev - videosPerPage));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + videosPerPage >= videos.length ? 0 : prev + videosPerPage));
  };

  return (
    <div className="relative max-w-6xl mx-auto p-6">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {videos.slice(index, index + videosPerPage).map((videoId) => (
              <div key={videoId} className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-[350px] md:h-[400px] lg:h-[450px]"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white dark:bg-gray-300 dark:text-gray-900 p-3 md:p-4 rounded-full shadow-md hover:bg-gray-700 dark:hover:bg-gray-400 transition"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white dark:bg-gray-300 dark:text-gray-900 p-3 md:p-4 rounded-full shadow-md hover:bg-gray-700 dark:hover:bg-gray-400 transition"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default VideoCarousel;
