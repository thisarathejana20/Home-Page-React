import {
  Box,
  Typography,
  Stack,
  Link,
  Grid,
  Input,
  Divider,
  Button,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "	#000068",
        color: "#fff",
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 8,
        borderRadius: 4,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item size={{ xs: 12, md: 6 }}>
          <Grid item size={6}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Leading the way in adventure
            </Typography>
          </Grid>
          <Grid item size={6}></Grid>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Grid item size={6}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Join our newsletter
            </Typography>
          </Grid>
          <Grid item size={6}>
            <Input placeholder="Enter your email" />
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Grid container spacing={2} justifyContent="center">
        <Grid item size={{ xs: 12, md: 4 }}>
          <Typography variant="body1" fontWeight={600} mb={2}>
            Kanra
          </Typography>
          <Box
            component="img"
            src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Logo"
            sx={{
              width: 300,
              height: 100,
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 2 }}>
          <Typography variant="body1" fontWeight={600} mb={2}>
            Contact
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body4">gatemail@kanra.com</Typography>
            <Typography variant="body4">+1 234 567 890</Typography>
          </Stack>
        </Grid>
        <Grid item size={{ xs: 12, md: 2 }}>
          <Typography variant="body1" fontWeight={600} mb={2}>
            Company
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body4">Career</Typography>
            <Typography variant="body4">Developers</Typography>
            <Typography variant="body4">Our Story</Typography>
          </Stack>
        </Grid>
        <Grid item size={{ xs: 12, md: 2 }}>
          <Typography variant="body1" fontWeight={600} mb={2}>
            Kanra
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body4">Why Kanra</Typography>
            <Typography variant="body4">Customer</Typography>
            <Typography variant="body4">Press Info</Typography>
          </Stack>
        </Grid>
        <Grid item size={{ xs: 12, md: 2 }}>
          <Typography variant="body1" fontWeight={600} mb={2}>
            Resources
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body4">Career</Typography>
            <Typography variant="body4">About Us</Typography>
            <Typography variant="body4">Features</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography variant="body2" align="center">
        © 2023 Kanra. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
