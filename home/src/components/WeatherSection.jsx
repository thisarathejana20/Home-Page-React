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
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 8, md: 12 } }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 5,
                bgcolor: "#fff",
                width: { xs: "100%", md: 400 },
                mb: 4,
              }}
            >
              <Typography
                variant="h2"
                fontWeight={900}
                color="primary"
                sx={{ mb: 2 }}
              >
                -12°C
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight={600}>
                    Wind
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    13 km
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" fontWeight={600}>
                    Snow
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    80 cm
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* City Cards */}
            <Grid container spacing={3}>
              {cities.map((city, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      bgcolor: "#fff",
                    }}
                  >
                    <Box
                      component="img"
                      src={city.image}
                      alt={city.name}
                      sx={{
                        width: "100%",
                        height: 150,
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" fontWeight={700}>
                        {city.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        YVR → LAX{city.name === "Morocco" ? " → DXB" : ""}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color="text.secondary"
            sx={{ textTransform: "uppercase", mb: 2 }}
          >
            Get Connected
          </Typography>
          <Typography variant="h3" fontWeight={900} sx={{ mb: 3 }}>
            It is better to <br /> travel well than <br /> to arrive
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Your ultimate travel companion. Carries all the information you need
            while travelling.
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 3,
                  borderColor: "#ccc",
                  color: "#000",
                  textTransform: "none",
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                }}
                // startIcon={<GoogleIcon />}
              >
                Get it from Google Play
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 3,
                  borderColor: "#ccc",
                  color: "#000",
                  textTransform: "none",
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                }}
                // startIcon={<AppleIcon />}
              >
                Download on the Apple Store
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherSection;
