// components/StatsBanner.jsx
import { Box, Typography, Avatar, Stack, Button } from "@mui/material";

const StatsBanner = () => {
  return (
    <>
      <Box
        sx={{
          px: 4,
          py: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={-1.5} alignItems="center">
          <Avatar alt="User 1" src="/user1.png" />
          <Avatar alt="User 2" src="/user2.png" />
          <Avatar alt="3K +" src="/" />
        </Stack>
      </Box>
      <Typography fontWeight={500} fontSize={24} textAlign="center" mb={2}>
        Travelled more than 2000 places 🏖️
      </Typography>
      <Box
        sx={{
          backgroundColor: "#1b0b8f",
          borderRadius: 5,
          overflow: "hidden",
          p: { xs: 4, md: 8 },
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          height: { xs: 450, md: 350 },
        }}
      >
        {/* Left Section - Traveler + Play Button */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              backgroundColor: "#00e0ff",
              borderRadius: 3,
              overflow: "hidden",
              width: { xs: 120, md: 180 },
              height: { xs: 160, md: 250 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Traveler"
              width={180}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Button
            sx={{
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "white",
              borderRadius: "50%",
              width: 50,
              height: 50,
              minWidth: 0,
            }}
          >
            <span style={{ fontSize: 24 }}>▶️</span>
          </Button>
        </Box>

        {/* Center Section - Text + Plane */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 2, md: 6 },
            textAlign: "center",
            color: "white",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Your travel companion that carries <br /> all the information
          </Typography>
          <Box sx={{ mt: 4 }}>
            <img
              src="https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Plane"
              width={250}
              height={100}
            />
          </Box>
        </Box>

        {/* Right Section - Girl Traveler */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <img
            src="https://images.pexels.com/photos/4762827/pexels-photo-4762827.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Traveler Girl"
            width={200}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Floating Clouds - decorations */}
        <img
          src="https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cloud"
          width={80}
          height={50}
          style={{
            position: "absolute",
            top: 30,
            left: "40%",
            opacity: 0.7,
          }}
        />
        <img
          src="https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cloud"
          width={80}
          height={50}
          style={{
            position: "absolute",
            bottom: 30,
            right: "40%",
            opacity: 0.7,
          }}
        />
      </Box>
    </>
  );
};

export default StatsBanner;
