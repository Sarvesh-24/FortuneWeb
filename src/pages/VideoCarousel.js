import React, { useState, useEffect } from 'react';

const VideoCarousel = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/videos');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to load videos.');
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Presenting Before You: The Solution To Unpredictable Markets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => {
          const videoId = video.url.split('v=')[1]?.split('&')[0]; // Extract the YouTube video ID
          if (!videoId) {
            console.error(`Invalid video URL: ${video.url}`);
            return (
              <div key={index} className="text-red-500 text-center">
                Invalid Video URL
              </div>
            );
          }

          return (
            <div
              key={index}
              className="relative bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
  <div className="relative w-[360px] h-[440px]">
      <iframe
        src="https://rss.app/embed/v1/carousel/E3gmsZutVUDKTFPW"
        frameBorder="0"
        className="w-full h-full border-0"
        title="Video Carousel"
      />
    </div>


              <h3 className="text-center text-white text-xl mt-4">{video.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoCarousel;
