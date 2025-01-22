import Banner from "@/app/(home)/modules/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Build from "./modules/build/Build";
import HowItWorks from "./modules/howItWorks/HowItWorks";
import AboutUs from "./modules/about/AboutUs";
import Faqs from "./modules/faq/Faqs";
import ContactUs from "./modules/contact/ContactUs";

export default function Home() {
  return (
    <>
      <Navbar
        privacyLayout={false}
      />
      <Banner/>
      <Build/>
      <HowItWorks/>
      <AboutUs/>
      <Faqs/>
      <ContactUs/>
    </>
  );
}
