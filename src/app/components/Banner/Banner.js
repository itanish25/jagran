import { AppBar, Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { phoneNumber, phoneNumber2, emailId } from "@/app/constants/constants";

function Banner() {
  const handleClickPhone = (number) => {
    window.location.href = `tel:${number}`;
  }

  return (
    <AppBar position="fixed">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "0 1rem", md: "0 3rem" },
          alignItems: "center",
          backgroundColor: "#232d3b",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "7rem", md: "2rem" },
            padding: "0.3rem 0",
          }}
        >
          <Box
            onClick={() => handleClickPhone(phoneNumber)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <LocalPhoneIcon fontSize="small" />
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "1rem" }
              }}
            >
              {phoneNumber}
            </Typography>
          </Box>
          <Box
            onClick={() => handleClickPhone(phoneNumber2)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <LocalPhoneIcon fontSize="small" />
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "1rem" }
              }}
            >
              {phoneNumber2}
            </Typography>
          </Box>
          <Typography
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "0.8rem", md: "1rem" }
            }}
          >
            <EmailIcon fontSize="small" />
            {emailId}
          </Typography>
        </Box>
        <Typography
          sx={{
            display: { xs: "none", md: "flex" }
          }}
        >
          Mata ka Jagran by Naveen Sharma & Party | Delhi NCR
        </Typography>
      </Box>
    </AppBar>
  );
}

export default Banner;
