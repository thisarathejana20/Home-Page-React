import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const destinations = [
  {
    name: "Venice",
    image:
      "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=600g",
  },
  {
    name: "Iceland",
    image:
      "https://images.pexels.com/photos/831056/pexels-photo-831056.jpeg?auto=compress&cs=tinysrgb&w=600/iceland.jpg",
  },
  {
    name: "New Zealand",
    image:
      "https://images.pexels.com/photos/710263/pexels-photo-710263.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Arizona",
    image:
      "https://images.pexels.com/photos/1672813/pexels-photo-1672813.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const DestinationCards = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight={600}>
          Discover the touch of nature 🌈
        </Typography>
        <Box>
          <IconButton>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Stack>

      <Grid container spacing={3} alignContent={"center"}>
        {destinations.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 4 }}>
              <CardMedia component="img" image={item.image} height="160" />
              <CardContent>
                <Typography fontWeight={600}>{item.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DestinationCards;
