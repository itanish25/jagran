import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "../../CustomButton/customButton";
import StatsCard from "../../StatsCard/StatsCard";

function Section1() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          flex: 1,
          height: "100vh",
          padding: "5rem 3rem",
        }}
      >
        <Typography
          sx={{
            alignSelf: "flex-start", // keeps it aligned to the left
            fontSize: "1.125rem",
            fontWeight: "600",
            padding: "0.625rem",
            color: "rgb(255 196 31)",
            backgroundColor: "rgba(255, 196, 31, .14)",
          }}
        >
          Welcome to{" "}
          <span style={{ color: "#000000" }}>Naveen Sharma & Party</span>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.875rem", md: "50px" },
            fontWeight: "700",
          }}
        >
          Famous for Mata ki Chowki, Jagran & Kirtan
        </Typography>
        <Typography
          sx={{
            color: "rgb(119 128 161)",
            lineHeight: "2",
          }}
        >
          Devotional singer Naveen Sharma performs in Jagrans and Mata Ki
          Chowkis, creating a spiritual atmosphere with his bhajans.
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomButton
            color="#FFFFFF"
            bgColor="rgb(153, 79, 245)"
            brRadius={"0.2rem"}
            iconPath={"/Photos/book-jagran-icon.png"}
            iconAlt={"book jagran"}
            btnText={"Book Jagran"}
          />
          <CustomButton
            color="#000000"
            bgColor="#FFFFFF"
            brRadius={"0.2rem"}
            iconPath={"/Photos/listen-to-bhajan-icon.png"}
            iconAlt={"listen jagran"}
            btnText={"Listen Jagran"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1.5rem", md: "8rem" },
            marginTop: "0.8rem",
          }}
        >
          <StatsCard number={"150+"} label="Clients" />
          <StatsCard number={"120+"} label="Projects" />
          <StatsCard number={"20+"} label="Years Experience" />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          background: "linear-gradient(to right, #fceabb, #f8b500, #ffb347)",
        }}
      >
        <Image
          src="/Photos/Photo_4.png"
          width="590"
          height="590"
          style={{ width: "100%", height: "auto" }}
          alt="Photo_1"
        />
      </Box>
    </Box>
  );
}

export default Section1;
