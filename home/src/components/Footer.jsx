import { Box, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#222",
        color: "#fff",
        py: 4,
        px: { xs: 2, md: 6 },
        mt: 8,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={3}
      >
        <Typography variant="body1">
          © 2025 Travelly. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link href="#" color="inherit" underline="hover">
            Privacy
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Terms
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Contact
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
