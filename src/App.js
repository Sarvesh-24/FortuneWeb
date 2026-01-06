import Navbar from "./components/frontend/Navbar";
import Hero from "./components/frontend/Hero";
import About from "./components/frontend/About";
import Aboutus from "./components/routes/About";
import Progress from "./components/frontend/Progress";
import Program from "./components/frontend/Program";
import Services from "./components/frontend/Services";
import Book from "./components/frontend/Book";
import FAQ from "./components/frontend/FAQ";
import Contact from "./components/frontend/Contact";
import Footer from "./components/frontend/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Team from "./components/frontend/Team";
import FloatingSocials from "./components/frontend/FloatingSocials";
import FloatingWhatsApp from "./components/frontend/FloatingWhatsApp";
import Course from "./components/routes/Course";
import ScrollToTop from "./components/ui/ScrollToTop";
import RiskDisclaimer from "./components/policies/RiskDisclaimer";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import TermsConditions from "./components/policies/TermsConditions";
import RefundPolicy from "./components/policies/RefundPolicy";
import {Toaster} from "sonner";
import MutualFunds from "./components/routes/MutualFunds";
import Gallery from "./components/frontend/Gallery";
import ServicesPage from "./components/routes/Services";
import Events from "./components/routes/Events";
import {scheduledEvents} from "./constants/Events";
import GalleryRoute from "./components/routes/GalleryRoute";
import Testimonials from "./components/frontend/Testimonials";
import ScrollToHash from "./components/Helpers/ScrollToHash";


function App() {

    return (
        <div className="bg-gradient-to-b
        from-bg-light-1 to-bg-light-2
        dark:from-bg-dark-1 dark:to-bg-dark-2">
          <Router>
              <ScrollToTop />
              <ScrollToHash />
              <Navbar />
              <FloatingSocials />
              <Routes>
                  <Route path="/" element={
                      <>
                          <Hero />
                          <About />
                          <Progress />
                          <Program />
                          <Services />
                          <Book />
                          <Gallery />
                          <Team />
                          <FAQ />
                          <Contact />
                      </>
                  } />

                  <Route path="/courses" element={<Course />} />
                  <Route path="/about" element={<Aboutus />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/mutual-funds" element={<MutualFunds />} />
                  <Route path="/services" element={<ServicesPage/>} />
                  <Route path="/gallery" element={<GalleryRoute/>} />
                  <Route path="/events" element={<Events events={scheduledEvents} />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/policies/risk-disclaimer" element={<RiskDisclaimer />} />
                  <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/policies/terms-and-conditions" element={<TermsConditions />} />
                  <Route path="/policies/refund-policy" element={<RefundPolicy />} />

              </Routes>
              <FloatingWhatsApp />
              <Footer />
              <Toaster
                  position="top-right"
                  toastOptions={{
                      style: {
                          marginTop: '1rem',
                          marginRight: '1rem',
                      },
                  }}
              />
          </Router>
         </div>
  );
}

export default App;


