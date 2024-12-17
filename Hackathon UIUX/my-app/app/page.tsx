import Image from "next/image";
import { Footer } from "./components/footer";
import { MainFooter } from "./components/footer";
import MainHeader from "./components/header";
import Body, { BosySection } from "./components/Body";


export default function Home() {
  return (
    <div>
      <MainHeader />
      
      <Body />
      <BosySection />
      <MainFooter />
      <Footer />
    </div>
  );
}
