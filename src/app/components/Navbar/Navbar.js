import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "next/link";

const pages = [
  "Home",
  "About",
  "Events",
  "Projects",
  "Contact us",
  "Let's connect",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const phoneNumber = "+919717715315"; // include country code without spaces
  const message = "Hello, I want to know more about your Jagran event."; // optional pre-filled message

  const handleClickWhatsApp = (page) => {
    if (page === "Let's connect") {
      const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank"); // opens in new tab or WhatsApp app on mobile
    }
  }

  return (
    <AppBar
      position="static"
      sx={{
        padding: "0.3rem 3rem",
        backgroundColor: "#000000",
        marginTop: "2rem",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* md is 900px width */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src="/Photos/logo2.png" alt="logo" width="180" height="50" />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1.5rem" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClickWhatsApp(page)}
                sx={{
                  my: 2,
                  display: "block",
                  fontSize: "0.9rem",
                  ...(page === "Let's connect"
                    ? {
                      color: "#000000",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "0.2rem",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }
                    : {
                      color: "white",
                    }),
                }}
              >
                <Link href={`#${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{ display: { xs: "flex", md: "none" }, marginRight: "1rem" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {
                  handleCloseNavMenu();
                  handleClickWhatsApp(page);
                }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Link href={`#${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Image src="/Photos/logo2.png" alt="logo" width="180" height="50" />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
