import {Navbar} from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { CompanyTestimonials } from "@/components/CompanyTestimonials";
import { ClientTestimonials } from "@/components/ClientTestimonials"
import { GetApp } from "@/components/GetApp";
import {StayTuned} from "@/components/StayTuned";
import { Footer } from "@/components/Footer";
export default function Index() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <CompanyTestimonials />
      <Stats />
      <Services />
      <Features />
      <ClientTestimonials />
      <GetApp />
      <StayTuned />
      <Footer/>
    
    </main>
  );
}