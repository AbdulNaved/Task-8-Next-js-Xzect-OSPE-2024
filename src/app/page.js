import NavBar from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
import ServiceInfo from "@/components/ServiceInfo";
import Services from "@/components/Services";
import Step from "@/components/step";
import Solutions from "@/components/Solutions";
import CoreFeature from "@/components/CoreFeature";
import RecyclingSection from "@/components/Section";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div className="w-full h-full ">
      <NavBar />
      <HeroSection />
      <ServiceInfo />
      <Services />
      <Step />
      <Solutions />
      <CoreFeature />
      <RecyclingSection />
      <TestimonialsSection /> 
      <LatestNews />
      <Footer/>
      
    </div>
  );
}
