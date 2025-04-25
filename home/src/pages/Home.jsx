import { Box } from "@mui/material";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsBanner from "../components/StatsBanner";
import DestinationCards from "../components/DestinationCards";
import WeatherSection from "../components/WeatherSection";
import FlightDeals from "../components/FlightDeals";
import Testimonials from "../components/Testimonials";
import ExploreSection from "../components/ExploreSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Header />
      <HeroSection />
      <StatsBanner />
      <DestinationCards />
      <WeatherSection />
      <FlightDeals />
      <Testimonials />
      <ExploreSection />
      <Footer />
    </Box>
  );
};

export default Home;
