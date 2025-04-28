import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Grid,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Testimonials = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 10, bgcolor: "#FAF9FB" }}>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{ position: "relative", width: 300, height: 320, mx: "auto" }}
          >
            {/* Main Image */}
            <Box
              component="img"
              src="https://images.pexels.com/photos/2458409/pexels-photo-2458409.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Main"
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%) rotate(-2deg)",
              }}
            />
            <Chip
              label="📍Nowhere"
              sx={{
                position: "absolute",
                top: 8,
                left: 50,
                bgcolor: "#fff",
                fontWeight: "bold",
              }}
            />

            {/* Right Small Image */}
            <Box
              component="img"
              src="https://images.pexels.com/photos/2458409/pexels-photo-2458409.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Canada"
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                top: 140,
                right: 0,
                border: "4px solid #FAF9FB",
              }}
            />
            <Chip
              label="📍Canada"
              sx={{
                position: "absolute",
                top: 210,
                right: -10,
                bgcolor: "#fff",
                fontWeight: "bold",
              }}
            />

            {/* Left Small Image */}
            <Box
              component="img"
              src="https://images.pexels.com/photos/2458409/pexels-photo-2458409.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Algeria"
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                top: 180,
                left: 0,
                border: "4px solid #FAF9FB",
              }}
            />
            <Chip
              label="📍Algeria"
              sx={{
                position: "absolute",
                top: 250,
                left: -8,
                bgcolor: "#fff",
                fontWeight: "bold",
              }}
            />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 500, mx: "auto", textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: 18, md: 22 },
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Their service is absolutely wonderful and cheaper than the hotel
              direct or any other booking site. You got back to us straight away
              and no issues at all in the other end.
            </Typography>

            {/* Avatars in Circle Stack */}
            <Stack
              direction="row"
              spacing={-1.5}
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              {[
                "https://randomuser.me/api/portraits/men/75.jpg",
                "https://randomuser.me/api/portraits/women/45.jpg",
                "https://randomuser.me/api/portraits/women/55.jpg",
                "https://randomuser.me/api/portraits/women/75.jpg",
                "https://randomuser.me/api/portraits/men/65.jpg",
                "https://randomuser.me/api/portraits/men/85.jpg",
              ].map((src, idx) => (
                <Avatar
                  key={idx}
                  src={src}
                  sx={{
                    border: "2px solid white",
                    boxShadow: 1,
                    width: 44,
                    height: 44,
                  }}
                />
              ))}
              <IconButton sx={{ ml: 1 }}>
                <ArrowForwardIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {/* Logos */}
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt={6}
        sx={{ opacity: 0.5 }}
      >
        {["/amazon.svg", "/bnb.svg", "/cm1.svg", "/cm2.svg"].map((brand) => (
          <Box
            key={brand}
            component="img"
            src={brand}
            alt={brand}
            width={100}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Testimonials;
