import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to manage the selected image

  // Image sources (update these paths to match your project's structure)
  const images = [
    '/assets/testimonials/testimonials1.webp',
    '/assets/testimonials/testimonials2.webp',
    '/assets/testimonials/testimonials3.webp',
    '/assets/testimonials/testimonials4.webp',
    '/assets/testimonials/testimonials5.webp',
    '/assets/testimonials/testimonials6.webp',
    '/assets/testimonials/testimonials7.webp',
    '/assets/testimonials/testimonials8.webp',
    '/assets/testimonials/testimonials9.webp',
    '/assets/testimonials/testimonials13.webp',
    '/assets/testimonials/testimonials14.jpeg',
    '/assets/testimonials/testimonials15.jpeg',
    '/assets/testimonials/testimonials16.jpeg',
    '/assets/testimonials/testimonials17.jpeg'

  ];

  // Close Modal function
  const closeModal = () => {
    setSelectedImage(null); // Close the modal by resetting the selected image
  };

  return (
    <div id="testimonials" className="max-w-screen-xl mx-auto py-16 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-[#384f4b] dark:text-white mb-8 font-inter">
        Testimonials
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedImage(src)} // Set the selected image on click
          >
            <img
              src={src}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal to display the larger image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close modal when clicking on the overlay
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-4 rounded-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <button
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                onClick={closeModal} // Close modal when clicked
              >
                ✖
              </button>
              <img
                src={selectedImage}
                alt="Selected testimonial"
                className="rounded-lg max-w-full max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
