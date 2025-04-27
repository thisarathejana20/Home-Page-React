import { Box, Typography, Button } from "@mui/material";
const FlightDeals = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1b0b8f",
        backgroundImage:
          "url('https://images.pexels.com/photos/8828328/pexels-photo-8828328.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 5,
        overflow: "hidden",
        p: { xs: 4, md: 8 },
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        position: "relative",
        height: { xs: 400, md: 350 },
      }}
    >
      {/* Ticket and Text Section */}
      <Box sx={{ flex: 1, zIndex: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <img
            src="https://images.pexels.com/photos/69866/pexels-photo-69866.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="ticket"
            width={80}
            height={80}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00e0ff",
            color: "#000",
            textTransform: "none",
            borderRadius: "20",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          endIcon={<span>✈️</span>}
        >
          Get Tickets
        </Button>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: "white", mb: 2 }}
        >
          Find the <br /> best{" "}
          <span style={{ fontWeight: "bolder" }}>deals</span>
        </Typography>
      </Box>

      {/* Plane Image */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "20%", md: "-10%" },
          left: { xs: "30%", md: "45%" },
          width: { xs: 200, md: 300 },
          zIndex: 1,
          transform: "rotate(20deg)",
        }}
      >
        <img
          src="https://images.pexels.com/photos/31746666/pexels-photo-31746666/free-photo-of-jet2holidays-plane-on-airport-runway-in-daylight.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="plane"
          width={400}
          height={400}
        />
      </Box>

      {/* Sponsored Section */}
      <Box sx={{ flex: 1, textAlign: "right", zIndex: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Sponsored by -
        </Typography>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
          <img
            src="https://images.pexels.com/photos/26576975/pexels-photo-26576975/free-photo-of-close-up-of-a-logo-and-sign-on-white-paper-sheet.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="hawks"
            width={100}
            height={40}
          />
          <img
            src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="suitcase"
            width={100}
            height={100}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightDeals;
