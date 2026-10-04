import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Sports from "./components/Sports";
import VirtualTour from "./components/VirtualTour";
import Testimonials from "./components/Testimonials";
import AdmissionCTA from "./components/AdmissionCTA";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div id="top" className="min-h-screen">
      <ScrollProgress />

      <CustomCursor />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Stats />

        <Experience />

        <Sports />

        <VirtualTour />

        <Testimonials />

        <AdmissionCTA />

        <Footer />
      </main>
    </div>
  );
}

export default App;