import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import Activity from "./Activity";
import ExportAndDomestic from "./ExportAndDomestic";
import Founder from "./Founder";
import Hero from "./Hero";
import Milestone from "./Milestone"
import Partners from "./Partners";
import Products from "./Product";

const HomePages = () => {
  return (
    <>
      <Navbar sections={['Home', 'Experience', 'Product', 'Export & Domestic', 'Founder', 'Partners']}/>
      <Hero />
      <AboutUs />
      <Milestone />
      <Activity />
      <Products />
      <ExportAndDomestic />
      <Founder />
      <Partners />
      <Footer />
    </>
  )
}

export default HomePages
