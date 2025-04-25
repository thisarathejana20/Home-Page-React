import { Box, Typography, Button, Stack, Avatar } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Left side - Text */}
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography
          variant="h3"
          fontWeight={700}
          mb={2}
          sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
        >
          People don’t take trips, trips take people
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          To get the best of your adventure you just need to leave and go where
          you like. We are waiting for you!
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF6B00",
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Plan a Trip
          </Button>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Typography>Watch Our Story</Typography>
          </Stack>
        </Stack>
      </Box>

      {/* Right side - Image */}
      <Box
        component="img"
        src="https://images.pexels.com/photos/4762853/pexels-photo-4762853.jpeg?auto=compress&cs=tinysrgb&w=600path-to-hero-image.png"
        alt="Hero"
        sx={{
          width: { xs: "100%", md: "50%" },
          maxHeight: { xs: 250, md: 400 },
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default HeroSection;
