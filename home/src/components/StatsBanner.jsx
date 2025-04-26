// components/StatsBanner.jsx
import { Box, Typography, Avatar, Stack } from "@mui/material";

const StatsBanner = () => {
  return (
    <>
      <Box
        sx={{
          px: 4,
          py: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={-1.5} alignItems="center">
          <Avatar alt="User 1" src="/user1.png" />
          <Avatar alt="User 2" src="/user2.png" />
          <Avatar alt="3K +" src="/" />
        </Stack>
      </Box>
      <Typography fontWeight={500} fontSize={24} textAlign="center" mb={2}>
        Travelled more than 2000 places 🏖️
      </Typography>
      <Box
        component="img"
        src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Travelers"
        sx={{
          mx: "10",
          height: 350,
          width: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />
    </>
  );
};

export default StatsBanner;
