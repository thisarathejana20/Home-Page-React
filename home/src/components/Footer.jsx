import {
  Box,
  Typography,
  Stack,
  Grid,
  InputBase,
  Divider,
  IconButton,
} from "@mui/material";
import { Email, Phone, Send } from "@mui/icons-material";
import { FaDribbble, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#13007C",
        color: "#fff",
        py: 6,
        px: { xs: 2, md: 8 },
        mt: 8,
        borderRadius: 4,
      }}
    >
      {/* Top Row */}
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left: Text + Icons */}
        <Grid item xs={12} md={6}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography variant="h5" fontWeight={700}>
              Leading the way in adventure
            </Typography>
            <Stack direction="row" spacing={2}>
              <FaDribbble size={24} />
              <FaYoutube size={24} />
              <FaInstagram size={24} />
              <FaTwitter size={24} />
            </Stack>
          </Stack>
        </Grid>

        {/* Right: Newsletter */}
        <Grid item xs={12} md={6}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Typography variant="h6" fontWeight={700}>
              Join our Newsletter
            </Typography>

            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                maxWidth: 400,
                flex: 1, // allows it to shrink nicely if needed
              }}
            >
              <InputBase
                placeholder="Your e-mail"
                sx={{ px: 2, py: 1, flex: 1, color: "#000" }}
              />
              <IconButton
                sx={{
                  bgcolor: "#FF6B00",
                  borderRadius: 0,
                  p: 2,
                  "&:hover": { bgcolor: "#e65a00" }, // slight hover effect if you want
                }}
              >
                <Send sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6, borderColor: "#ccc" }} />

      {/* Middle Section */}
      <Grid
        container
        spacing={4}
        justifyContent="space-between" // ⬅️ important
      >
        {/* Logo and Contact */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Location_dot_red.svg/768px-Location_dot_red.svg.png"
                alt="Kanra Logo"
                sx={{ width: 30, height: 30 }}
              />
              <Typography variant="h6" fontWeight={700}>
                Kanra
              </Typography>
            </Stack>

            <Box
              component="img"
              src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Map"
              sx={{
                width: "100%",
                height: 120,
                borderRadius: 2,
                objectFit: "cover",
                mt: 2,
              }}
            />
          </Stack>
        </Grid>

        {/* Contact */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Contact
          </Typography>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email fontSize="small" />
              <Typography variant="body2">getemail@kanra.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">(270) 555-0117</Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Company */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Company
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">Career</Typography>
            <Typography variant="body2">Developers</Typography>
            <Typography variant="body2">Our Story</Typography>
          </Stack>
        </Grid>

        {/* Kanra */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Kanra
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">Why Kanra</Typography>
            <Typography variant="body2">Customer</Typography>
            <Typography variant="body2">Press Info</Typography>
          </Stack>
        </Grid>

        {/* Resources */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Resources
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">Career</Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Features</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6, borderColor: "#ccc" }} />

      {/* Bottom Row */}
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Typography variant="body2">
            © 2023 <strong>Rylic Studio</strong> | All Rights Reserved
          </Typography>
        </Grid>

        <Grid item xs={12} md="auto">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mt={{ xs: 2, md: 0 }}
          >
            <Box
              component="img"
              src="https://seeklogo.com/images/S/stripe-logo-7D3C865A80-seeklogo.com.png"
              alt="Stripe"
              sx={{ height: 24 }}
            />
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              sx={{ height: 24 }}
            />
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/0/00/WooCommerce_logo_2014_version.svg"
              alt="WooCommerce"
              sx={{ height: 24 }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
