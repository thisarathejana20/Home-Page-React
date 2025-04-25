import { Box } from "@mui/material";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Header />
      <HeroSection />
    </Box>
  );
};

export default Home;
