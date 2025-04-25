import { Box, Typography, Grid, Paper } from "@mui/material";

const cities = [
  {
    name: "Morocco",
    temp: "-12°C",
    description: "Sunny • Ideal for Road Trips",
    image:
      "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Denver",
    temp: "-12°C",
    description: "Snowy • Scenic Routes",
    image:
      "https://images.pexels.com/photos/3047493/pexels-photo-3047493.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const WeatherSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Plan your trip with real-time weather
      </Typography>
      <Grid container spacing={3}>
        {cities.map((city, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
              <Box
                component="img"
                src={city.image}
                alt={city.name}
                sx={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600}>
                  {city.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {city.temp} • {city.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherSection;
