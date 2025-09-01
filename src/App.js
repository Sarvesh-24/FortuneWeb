// import React from "react";
// import Header from "./components/Header";
// import About from "./components/About"; // Assuming you have this component
// import Hero from "./components/Hero";
// import Program from "./components/Program";
// import Indicator from "./components/Indicator";
// import Services from "./components/Services";
// import Book from "./components/Book";
// import Event from "./components/Event";
// import Feedback from "./components/Feedback";
// import Gallery from "./components/Gallery";
// import Team from "./components/Team";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// import Contact from "./api/Contact";
// // import GoogleReviewsCarousel from "./components/GoogleReviewsCarousel";
// import GoogleReviews from "./api/google-reviews";
// // Add more components as needed (e.g., Services, Gallery, etc.)

// const App = () => {
//   return (
//     <div>
//       {/* Header */}
//       <Header />
//       <Hero />
//       {/* Content Sections */}
//       <About />
//       <Program />
//       <Indicator />
//       <Services />
//       <Book />
//       <Event />
//       {/* <GoogleReviewsCarousel /> */}
//       <GoogleReviews />
//       {/* {google review} */}
//       <Feedback />
//       <Gallery />
//       <Team />
//       <FAQ />
//       <Contact />
//       <Footer />
//       {/* Add other sections (Services, Gallery, etc.) */}

//       {/* Make sure to add proper IDs to your other sections */}
//     </div>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Program from "./components/Program";
// import Indicator from "./components/Indicator";
// import Services from "./components/Services";
// import Book from "./components/Book";
// // import Feedback from "./components/Feedback";
// import Gallery from "./components/Gallery";
// import Team from "./components/Team";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact.js";
// import Event from "./components/Event.js";


// // Individual Pages
// // import Home from "./pages/Home";
// import Testimonials from "./pages/Testimonials";
// import Company from "./pages/Company";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import RefundsAndCancellations from "./pages/RefundsAndCancellations";
// import RiskDisclaimer from "./pages/RiskDisclaimer";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import ServicesProvide from "./pages/ServicesProvide";
// import ServicesPage from "./pages/ServicesPage";
// import VideoYT from "./pages/VideoYT";
// import MutualFundPage from "./pages/MutualFundPage.js";

// import { FloatingWhatsApp } from 'react-floating-whatsapp'
// import VideoCarousel from "./pages/VideoCarousel";
// import AccessForm from "./components/AccessForm.js";
// import FloatingSocialIcons from "./components/FloatingSocialIcons.js";
// import FloatingTicker from "./components/FloatingTicker.js";


// const App = () => {
  
//   const handleChatSubmit = (event, message) => {
//     console.log("Message submitted:", message);
//   };

//   const handleChatClose = () => {
//     console.log("Chat box closed.");
//   };

//   const handleNotification = () => {
//     console.log("Notification triggered.");
//   };


//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
            
//               <Hero />
//               <About />
//               <Indicator />
//               <Program />
//               <Services />
//               <Book />
//               <Event />
//               {/* <Feedback /> */}
//               <Gallery />
//               <Team />
//               <FAQ />
//               <Contact/>
//               <FloatingWhatsApp
//                     phoneNumber="+91 9702625115"
//                     accountName="FORTUNE ADVISORZ"
//                     onSubmit={handleChatSubmit}
//                     onClose={handleChatClose}
//                     onNotification={handleNotification}
//                     avatar="/assets/logo/Profile.webp"
//                     statusMessage="Typically replies within 1 hour"
//                     chatMessage={`How can we help?`}
//                     placeholder="Type your message here..."
//                     messageDelay={2}
//                     darkMode={false}
//                     allowClickAway={true}
//                     allowEsc={true}
//                     className="fixed bottom-8 right-8 z-50" // Ensure proper positioning
//                     chatboxHeight={300} // Adjust height if needed
//                     notification={true}
//                     notificationDelay={60}
//                     notificationSound={true}
//                     notificationLoop={3}
//                     notificationStyle={{ backgroundColor: '#007bff', color: 'white' }}
//                     chatboxStyle={{ borderRadius: '10px' }}
//                   />

//                 <FloatingSocialIcons/>
//                 <FloatingTicker />
          
//             </>
//           }
//         />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/company" element={<Company />} />
//         <Route path="/policies" element={<PrivacyPolicy />} />
//         <Route path="/refundpolicy" element={<RefundsAndCancellations />} />
//         <Route path="/riskdisclaimer" element={<RiskDisclaimer />} />
//         <Route path="/termsandConditions" element={<TermsAndConditions />} />
//         <Route path="/serviceprovide" element={<ServicesProvide />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/videos" element={<VideoYT />} />
//         <Route path="/yt" element={<VideoCarousel />} />
//         <Route path="/mutualfunds" element={<MutualFundPage/>}/>
//         <Route path="/accessform" element={<AccessForm/>}/>
//         {/* <Route path="/ticker" element={FloatingTicker} /> */}
//         <Route path="/event" element={<Event/>}/>
        
//       </Routes>
//       <Footer />
      
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingTicker from "./components/FloatingTicker";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingSocialIcons from "./components/FloatingSocialIcons";

// Page sections for Home route
import Hero from "./components/Hero";
import About from "./components/About";
import Indicator from "./components/Indicator";
import Program from "./components/Program";
import Services from "./components/Services";
import Book from "./components/Book";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

// Other Routes
import Testimonials from "./components/Testimonials";
import Company from "./components/Company";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundsAndCancellations from "./components/RefundsAndCancellations";
import RiskDisclaimer from "./components/RiskDisclaimer";
import TermsAndConditions from "./components/TermsAndConditions";
import ServicesProvide from "./components/ServicesProvide";
import ServicesPage from "./components/ServicesPage";
import VideoYT from "./components/VideoYT";
import VideoCarousel from "./components/VideoCarousel";
import MutualFundPage from "./components/MutualFundPage";
import AccessForm from "./components/AccessForm";


const App = () => {
  // WhatsApp Chat Handlers
  const handleChatSubmit = (event, message) => {
    console.log("Message submitted:", message);
  };

  const handleChatClose = () => {
    console.log("Chat box closed.");
  };

  const handleNotification = () => {
    console.log("Notification triggered.");
  };

  return (
    <Router>
      <Header />

      {/* Global floating components (visible on all pages) */}
      <FloatingTicker />
      <FloatingWhatsApp
        phoneNumber="+91 9702625115"
        accountName="FORTUNE ADVISORZ"
        onSubmit={handleChatSubmit}
        onClose={handleChatClose}
        onNotification={handleNotification}
        avatar="/assets/logo/Profile.webp"
        statusMessage="Typically replies within 1 hour"
        chatMessage="How can we help?"
        placeholder="Type your message here..."
        messageDelay={2}
        darkMode={false}
        allowClickAway={true}
        allowEsc={true}
        className="fixed bottom-8 right-8 z-50"
        chatboxHeight={300}
        notification={true}
        notificationDelay={60}
        notificationSound={true}
        notificationLoop={3}
        notificationStyle={{ backgroundColor: "#007bff", color: "white" }}
        chatboxStyle={{ borderRadius: "10px" }}
      />
      <FloatingSocialIcons />

      {/* Page content with top padding to prevent overlap with FloatingTicker */}
      <div className="pt-[40px]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Indicator />
                <Program />
                <Services />
                <Book />
                <Event />
                {/* <Feedback /> */}
                <Gallery />
                <Team />
                <FAQ />
                <Contact />
              </>
            }
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/company" element={<Company />} />
          <Route path="/policies" element={<PrivacyPolicy />} />
          <Route path="/refundpolicy" element={<RefundsAndCancellations />} />
          <Route path="/riskdisclaimer" element={<RiskDisclaimer />} />
          <Route path="/termsandConditions" element={<TermsAndConditions />} />
          <Route path="/serviceprovide" element={<ServicesProvide />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<VideoYT />} />
          <Route path="/yt" element={<VideoCarousel />} />
          <Route path="/mutualfunds" element={<MutualFundPage />} />
          <Route path="/accessform" element={<AccessForm />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
