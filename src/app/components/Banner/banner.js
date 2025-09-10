import { AppBar, Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

function Banner() {
  return (
    <AppBar position="fixed">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 6rem",
          alignItems: "center",
          backgroundColor: "#232d3b",
        }}
      >
        <Box sx={{ display: "flex", gap: 4, padding: "0.3rem 0" }}>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalPhoneIcon fontSize="small" />
            9999980964
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon fontSize="small" />
            nkumar47459@gmail.com
          </Typography>
        </Box>
        <Typography sx={{ display: { xs: "none", md: "flex" }}}>Mata ka Jagran by Naveen Kumar in Delhi NCR</Typography>
      </Box>
    </AppBar>
  );
}

export default Banner;
