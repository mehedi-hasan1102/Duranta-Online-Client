import Image from "next/image";
import Banner from "./components/banner/Banner";
import AboutUs from "./about/page";
import Packages from "./packages/page";
import ContactUs from "./contact/page";
import GallerySection from "./GallerySection/page";
import TeamSection from "./components/team/TeamSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <TeamSection />
       <GallerySection />
      <Packages />
      <ContactUs />

    </div>
  );
}
