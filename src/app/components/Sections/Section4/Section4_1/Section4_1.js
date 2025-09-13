import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton/CustomButton";

function Section4_1({ title, heading, description, photoPath, openLink }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        margin: "4rem 3rem",
        border: "1px solid rgb(179, 188, 207)",
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
          height={700}
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
          gap: "2rem",
          flex: 1,
          padding: "5rem 3rem",
          order: { xs: 1, md: 0 }, // 👈 ensures content follows on xs, left on md
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
            {title}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "50px" },
            fontWeight: "700",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: "rgb(119 128 161)",
            lineHeight: "2",
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomButton
            color="#000000"
            bgColor="#FFFFFF"
            brRadius={"0.2rem"}
            iconPath={"/Photos/view-project-icon.png"}
            iconAlt={"View Project"}
            btnText={"View Project"}
            openLink={openLink}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Section4_1;
