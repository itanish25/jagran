import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton/CustomButton";

function Section5({
  heading = "Planning a Jagran or Mata Ki Chowki? Let’s make it divine together.",
  photoPath = "/Photos/Mata.png",
  openLink
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        margin: "4rem 0rem",
        backgroundColor: "#000000",
        height: "auto",
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          order: { xs: -1, md: 1 }, // 👈 image goes above on xs, right on md
        }}
      >
        <Image
          src={photoPath}
          alt="Photo_1"
          width={590}
          height={590}
          style={{
            width: "100%", // responsive
            height: "auto",
            maxWidth: "590px",
          }}
        />
      </Box>

      {/* Content Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          flex: 1,
          padding: "5rem 3rem",
          order: { xs: 1, md: 0 }, // 👈 ensures content follows on xs, left on md
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "40px" },
            fontWeight: "700",
            color: "#FFFFFF",
          }}
        >
          {heading}
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomButton
            color="#FFFFFF"
            bgColor="rgb(153, 79, 245)"
            brRadius={"0.2rem"}
            iconAlt={"Book Now"}
            btnText={"Book Now"}
            openLink={openLink}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Section5;
