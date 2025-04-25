// components/StatsBanner.jsx
import { Box, Typography, Avatar, Stack } from "@mui/material";

const StatsBanner = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar alt="User 1" src="/user1.png" />
        <Avatar alt="User 2" src="/user2.png" />
        <Typography fontWeight={500}>
          Travelled more than 2000 places 🏖️
        </Typography>
      </Stack>
      <Box
        component="img"
        src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Travelers"
        sx={{ height: 120 }}
      />
    </Box>
  );
};

export default StatsBanner;
