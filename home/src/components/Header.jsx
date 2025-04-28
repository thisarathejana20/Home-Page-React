import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ px: 4, py: 2 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Section - Logo + Search */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Kanra
            </Typography>

            {/* Search Box */}
            <Box
              sx={{
                bgcolor: "#f3f4f6",
                px: 2,
                py: 0.5,
                borderRadius: 2,
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1,
                minWidth: 250,
              }}
            >
              <SearchIcon sx={{ color: "#FF6B00" }} />
              <InputBase placeholder="Search destination..." sx={{ flex: 1 }} />
            </Box>
          </Box>

          {/* Right Section - Menu Items */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
              <Button
                variant="text"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Reviews
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Destinations
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Ticket
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                Blog
              </Button>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF6B00",
                borderRadius: 2,
                display: { xs: "none", sm: "inline-block" },
              }}
            >
              Get the App
            </Button>

            {/* Hamburger */}
            <IconButton
              sx={{ display: { xs: "inline-block", sm: "none" } }}
              onClick={toggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            <ListItem button>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Reviews
              </Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Destinations
              </Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Ticket
              </Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Blog
              </Typography>
            </ListItem>
            <ListItem button>
              <Button
                variant="contained"
                sx={{ bgcolor: "#FF6B00", width: "100%" }}
              >
                Get the App
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
