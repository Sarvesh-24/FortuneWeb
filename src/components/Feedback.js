import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Feedback = () => {
  const swiperRef = useRef(null);

  const services = [
    {
      id: 1,
      videoSrc: "/assets/video/Video1.Mp4",
      title: "Ad cupiditate sed est odio",
    },
    {
      id: 2,
      videoSrc: "/assets/video/Video2.MOV",
      title: "Voluptatem voluptatum alias",
    },
    {
      id: 3,
      videoSrc: "/assets/video/Video3.MOV",
      title: "Fugit cupiditate alias nobis.",
    },
    {
      id: 4,
      videoSrc: "/assets/video/Video1.MOV",
      title: "Dolorum dolorem maiores",
    },
  ];

  const handleVideoPlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleVideoPause = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section
      id="feedback"
      className="about section mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-roboto text-[#444444] dark:bg-gray-900 dark:text-gray-300"
    >
      {/* Section Title */}
      <div className="container mx-auto text-center mb-8" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-white font-inter mb-4">
          Testimonials
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 dark:bg-blue-400"></div>
      </div>

      {/* Carousel */}
      <div className="container mx-auto relative px-4 sm:px-8">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ enabled: window.innerWidth >= 768 }} // Navigation buttons only on larger screens
          className="mySwiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center transition-transform hover:shadow-lg">
                {/* Video */}
                <div className="relative overflow-hidden rounded-md mb-4">
                  <video
                    className="w-full h-56 rounded-md"
                    controls
                    preload="metadata"
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoPause}
                  >
                    <source src={service.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Explore All Button */}
      <div className="text-center">
        <motion.a
          href="/testimonials"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white md:rounded-md font-semibold shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Learn more about DevFest "
        >
          Learn more
        </motion.a>
      </div>
    </section>
  );
};

export default Feedback;
