import { Box, Typography, Button, Paper } from "@mui/material";
const FlightDeals = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" fontWeight={600} mb={2}>
          Book your flight with super deals 💸
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Get up to 50% off on selected destinations. Secure your seat early and
          save more.
        </Typography>
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
          Book Now
        </Button>
      </Box>

      <Paper
        sx={{
          flex: 1,
          height: 280,
          backgroundImage: `url('https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 4,
        }}
      />
    </Box>
  );
};

export default FlightDeals;
