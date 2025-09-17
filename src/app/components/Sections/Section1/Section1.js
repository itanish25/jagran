import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import StatsCard from "@/app/components/StatsCard/StatsCard";
import { numberOfClients, numberOfProjects, yearsOfExperience } from "@/app/constants/constants";

function Section1() {
  return (
    <Box
      id="Home"
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
        <Box
          sx={{
            width: "fit-content",
            padding: "0.625rem",
            backgroundColor: "rgba(255, 196, 31, .14)",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "rgb(255 196 31)",
            }}
          >
            Welcome to
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#000000",
            }}
          >
            Naveen Sharma & Party
          </Typography>
        </Box>
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
            openLink={"https://www.youtube.com/@NaveenSharma-mg7nc/featured"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: "1.5rem", md: "8rem" },
            marginTop: "0.8rem",
          }}
        >
          <StatsCard number={`${numberOfClients}+`} label="Clients" />
          <StatsCard number={`${numberOfProjects}+`} label="Projects" />
          <StatsCard number={`${yearsOfExperience}+`} label="Years Experience" />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
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
