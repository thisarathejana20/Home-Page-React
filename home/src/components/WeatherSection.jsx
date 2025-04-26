import { Box, Typography, Grid, Paper, Button } from "@mui/material";

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
      <Grid container spacing={3} size={{ xs: 12, md: 6 }}>
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
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            fontWeight={500}
            color="text.secondary"
            sx={{ mb: 2, textAlign: "left" }}
          >
            Get Connected
          </Typography>
          <Typography
            variant="h4"
            fontWeight={900}
            sx={{ mb: 2, textAlign: "left" }}
          >
            It is better to travel well than to arrive.
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            sx={{ mb: 2, textAlign: "left" }}
          >
            Your ultimate travel companion. Carries all the information you need
            while traveling.
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ mt: 2, display: "flex", alignItems: "center" }}
          >
            <Grid item>
              <Button variant="outlined" color="white" size="large">
                Get it on Play Store
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="white" size="large">
                Download App
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherSection;
