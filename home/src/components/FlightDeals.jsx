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
          <img src="/ticket.svg" alt="ticket" width={80} height={80} />
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
          top: { xs: "20%", md: "15%" },
          left: { xs: "30%", md: "45%" },
          width: { xs: 200, md: 300 },
          zIndex: 1,
          transform: "rotate(-90deg)",
        }}
      >
        <img src="/plane2.svg" alt="plane" width={400} height={400} />
      </Box>

      {/* Sponsored Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // right-align the content
          justifyContent: "center",
          zIndex: 2,
          pr: { xs: 2, md: 6 }, // padding right for spacing from edge
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            mb: 1,
            fontWeight: 600,
          }}
        >
          Sponsored by -
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component="img"
            src="/logo.svg"
            alt="hawks"
            sx={{ width: 80, height: "auto" }}
          />
          <Box
            component="img"
            src="/suitcase.svg"
            alt="suitcase"
            sx={{ width: 80, height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightDeals;
