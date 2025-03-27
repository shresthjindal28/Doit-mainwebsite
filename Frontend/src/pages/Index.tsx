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
import Contact from "./Contact";
import FAQ from "@/components/FAQ";
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
      <Contact />
      <FAQ />
      <GetApp />
      <StayTuned />
      <Footer/>
    
    </main>
  );
}