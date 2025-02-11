// import { useState } from "react";

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: '/assets/background img/bgImg01.jpg', 
//       title: "Discover Expert Financial Guidance",
//       description: "Start your search today for the best financial planners, investment advisors, or stock market experts near you.",
//     },
//     {
//       image:'/assets/background img/bgImg02.jpg', 
//       title: "Expert Mentorship and Guidance",
//       description: "Unlock the secrets to successful trading with personalized mentorship. Learn directly from experts who guide you through every market phase with tailored strategies.",
//     },
//     {
//       image: '/assets/background img/DSC00043-Edit-Photoroom.png', 
//       title: "Cutting-Edge Tools and Resources",
//       description: "Access a suite of powerful tools and resources designed to enhance your trading decisions. From real-time market data to comprehensive analysis tools, we've got you covered.",
//     },
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden pt-30">
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="relative w-full h-screen flex-shrink-0">
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover sm:object-contain md:object-cover"  // Adjust images for different screens
//             />
//             {/* Captions */}
//             <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
//               <h5 className="text-2xl md:text-4xl font-bold">{slide.title}</h5>
//               <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>

//       {/* Controls */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default Hero;

import { useState, useRef } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // Track if a drag is in progress
  const touchStart = useRef(0);
  const touchCurrent = useRef(0);
  const containerRef = useRef(null); // Ref to the container

  const slides = [
    {
      image: "/assets/background img/compressed2.webp",
      title: "Expert Mentorship and Guidance",
      description: "Unlock the secrets to successful trading with personalized mentorship. Learn directly from experts who guide you through every market phase with tailored strategies.",
    },
    {
      image: "/assets/background img/compressed.webp",
      title: "Discover Expert Financial Guidance",
      description:
        "Start your search today for the best financial planners, investment advisors, or stock market experts near you.",
    },
    {
      image: "/assets/bangalore/banglore3.webp"
      
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchCurrent.current = e.touches[0].clientX;
    const dragDistance = touchCurrent.current - touchStart.current;

    // Dynamically move slides while dragging
    const container = containerRef.current;
    if (container) {
      const offset = -currentIndex * 100 + (dragDistance / container.offsetWidth) * 100;
      container.style.transform = `translateX(${offset}%)`;
    }
  };

  const handleTouchEnd = () => {
    const dragDistance = touchCurrent.current - touchStart.current;
    setIsDragging(false);

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        handlePrev(); // Swipe right
      } else {
        handleNext(); // Swipe left
      }
    } else {
      // Snap back to the current slide
      const container = containerRef.current;
      if (container) {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }

    touchStart.current = 0;
    touchCurrent.current = 0;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      {/* Slides */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-screen flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full ${index === 3 ? "object-contain mt-32" : "object-cover"}`}
            />
            {/* Captions */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black bg-opacity-40 z-10">
            <h5 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                  {slide.title}
                </h5>
                <p className="mt-4 text-sm md:text-lg max-w-3xl text-white drop-shadow-md">
                  {slide.description}
                </p>

            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Controls (Hide on smaller screens) */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-30 hidden md:block"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-30 hidden md:block"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Hero;
