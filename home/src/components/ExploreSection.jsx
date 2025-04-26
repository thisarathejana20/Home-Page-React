import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const ExploreSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 10 }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {/* Left Side - Image + CTA */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
          <Box
            sx={{
              bgcolor: "#EDE1D9",
              borderRadius: 5,
              overflow: "hidden",
              position: "relative",
              minHeight: 500,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            <Box
              component="img"
              src="https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg"
              alt="Traveler"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                m: 3,
                bgcolor: "#fff",
                borderRadius: 3,
                px: 3,
                py: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: 380,
                boxShadow: 2,
              }}
            >
              <Typography fontWeight={700} fontSize={18}>
                Explore the world with us 🌍
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FF6A3A",
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#e65a2d",
                  },
                }}
              >
                Plan a Trip
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Cards */}
        <Grid container size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            {/* Top Row */}
            <Grid container size={6} rowGap={2}>
              <Grid item size={12}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#C9F3FF",
                    borderRadius: 4,
                    p: 3,
                    height: "100%",
                    minHeight: 150,
                  }}
                >
                  <Typography fontWeight={700} fontSize={18}>
                    Read our blog <NorthEastIcon fontSize="small" />
                  </Typography>
                  <Typography mt={2}>
                    We have share our journey and some story
                  </Typography>
                </Paper>
              </Grid>

              <Grid item size={12}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#DBFCD4",
                    borderRadius: 4,
                    p: 3,
                    height: "100%",
                    minHeight: 150,
                  }}
                >
                  <Typography fontWeight={700} fontSize={18}>
                    See our workflow <NorthEastIcon fontSize="small" />
                  </Typography>
                  <Typography mt={2}>
                    It’s a must to that we would like to share our workflow to
                    believe you
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Full Height Right Card */}
            <Grid container size={6} sx={{ height: "100%" }}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "#EDE1D9",
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography fontWeight={700} fontSize={18}>
                    Chat With Expert <NorthEastIcon fontSize="small" />
                  </Typography>
                  <Box
                    component="img"
                    src="https://cdn-icons-png.flaticon.com/512/10337/10337389.png"
                    alt="Live"
                    sx={{ width: 70, mt: 2 }}
                  />
                </Box>
                <Typography mt={2}>
                  3,000+ our Expert team members around the world who create
                  incredible and amazing projects
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExploreSection;
