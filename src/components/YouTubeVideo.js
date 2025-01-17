import React from "react";

const YouTubeVideo = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6QOUtHKjaq0?si=vsmlfMXqaqnVUk4R"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-[#384f4b] dark:text-white">
          Video Title Goes Here
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Description of the video can be added here.
        </p>
      </div>
    </div>
  );
};

export default YouTubeVideo;
