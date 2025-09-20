import { Box, Typography } from "@mui/material";
import Image from "next/image";
import InfoCard from "@/app/components/InfoCard/InfoCard";
import { emailId, phoneNumber, phoneNumber2, yearsOfExperience, numberOfProjects } from "@/app/constants/constants";

function Section2() {
  return (
    <section
      id="About"
      style={{
        padding: "5rem 3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              color: "#FFFFFF",
              backgroundColor: "rgb(153, 79, 245)",
              display: "inline-flex",
              gap: "0.5rem",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.8rem 1.25rem",
              borderRadius: "9999px",
              width: "fit-content",
            }}
          >
            <Image
              src="/Photos/about-me-icon.png"
              alt="about-me"
              width="18"
              height="18"
            />
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "0.875rem",
              }}
            >
              ABOUT
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "1.625rem",
            fontWeight: "600",
          }}
        >
          Hi! I'm Naveen Sharma
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            color: "rgb(119 128 161)",
            lineHeight: "1.5",
          }}
        >
          I'm a devotional singer who performs in Jagrans, Mata Ki Chowkis, and
          Bhakti programs. With my soulful voice, I spread peace, devotion, and
          happiness. Invite me to make your religious events more spiritual and
          memorable. I believe music is a way to connect with the divine, and
          through bhajans I try to bring people closer to Maa Durga and God.
          Every performance is not just a program for me, but a prayer from my
          heart. My aim is to create a positive and divine atmosphere where
          everyone feels blessed and joyful.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "none", md: "space-between" },
            gap: { xs: "1.5rem", md: "0" },
          }}
        >
          <InfoCard heading={"contact"} content={emailId} />
          <InfoCard heading={"Phone"} content={phoneNumber} altContent={phoneNumber2} />
          <InfoCard heading={"Experience"} content={`${yearsOfExperience}+ years`} />
          <InfoCard heading={"Projects"} content={`${numberOfProjects}+`} />
          <InfoCard heading={"Language"} content={"Hindi, English"} />
        </Box>
      </Box>
    </section>
  );
}

export default Section2;
