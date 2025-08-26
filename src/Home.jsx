import Footer from "./components/Footer";
import Services from "./Services";
import Nav from "./components/Nav";
import Hero from "./Hero";
import Steps from "./Steps";
import Faq from "./Faq";
import Testimonial from "./Testimonial";
import SignUpCta from "./SignUpCta";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services/>
      <Steps/>
      <Faq/>
      <Testimonial/>
      <SignUpCta/>
      <Footer />
    </div>
  );
}

export default Home;
