import { Box } from "@mui/material";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsBanner from "../components/StatsBanner";
import DestinationCards from "../components/DestinationCards";

const Home = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Header />
      <HeroSection />
      <StatsBanner />
      <DestinationCards />
    </Box>
  );
};

export default Home;
