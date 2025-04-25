import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ px: 4, py: 2 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Kanra
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <InputBase
            placeholder="Search destination..."
            sx={{ bgcolor: "#f3f4f6", px: 2, py: 0.5, borderRadius: 2 }}
            startAdornment={<SearchIcon sx={{ mr: 1, color: "#FF6B00" }} />}
          />

          <Button variant="text" color="inherit" sx={{ fontWeight: "bold" }}>
            Reviews
          </Button>
          <Button variant="text" color="inherit" sx={{ fontWeight: "bold" }}>
            Destinations
          </Button>
          <Button variant="text" color="inherit" sx={{ fontWeight: "bold" }}>
            Ticket
          </Button>
          <Button variant="text" color="inherit" sx={{ fontWeight: "bold" }}>
            Blog
          </Button>
        </Box>

        <Button
          variant="contained"
          sx={{ bgcolor: "#FF6B00", borderRadius: 2 }}
        >
          Get the App
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
