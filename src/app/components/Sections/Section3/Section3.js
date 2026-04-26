import { Box, Typography } from "@mui/material";
import Image from "next/image";
import YouTubeEmbed from "@/app/components/YouTubeEmbed/YouTubeEmbed";
import { eventsFirstYoutubeVideoId, eventsSecondYoutubeVideoId, eventsThirdYoutubeVideoId, eventsFourthYoutubeVideoId, eventsFifthYoutubeVideoId, eventsSixthYoutubeVideoId, eventsSeventhYoutubeVideoId } from "@/app/constants/constants";

function Section3() {
  return (
    <section
      id="Events"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        padding: "5rem 3rem",
        backgroundColor: "#000000",
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
          src="/Photos/events-icon.png"
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
          EVENTS
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "1.625rem",
          fontWeight: "600",
        }}
      >
        JAGRANS | CHOWKIS
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          color: "rgb(119 128 161)",
          lineHeight: "1.5",
          maxWidth: "708px",
          textAlign: "center",
        }}
      >
        Watch the devotional singing in Jagrans, Mata Ki Chowkis, and Bhakti
        programs. Enjoy soulful bhajans that spread peace, happiness, and
        devotion.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "2rem", md: "1rem" },
          flexWrap: "nowrap", // keep them in a row
          overflowx: "auto", // scroll if it overflows
          padding: "1rem",
        }}
      >
        <Box width="400px" minWidth="400px">
          <YouTubeEmbed videoId={eventsFirstYoutubeVideoId} />
        </Box>
        <Box width="400px" minWidth="400px">
          <YouTubeEmbed videoId={eventsSecondYoutubeVideoId} />
        </Box>
        <Box width="400px" minWidth="400px">
          <YouTubeEmbed videoId={eventsThirdYoutubeVideoId} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "2rem", md: "1rem" },
          flexWrap: "nowrap", // keep them in a row
          overflowx: "auto", // scroll if it overflows
          padding: "1rem",
        }}
      >
        <Box width="400px" minWidth="400px">
          <YouTubeEmbed videoId={eventsFourthYoutubeVideoId} />
        </Box>
        <Box width="400px" minWidth="400px">
          <YouTubeEmbed videoId={eventsFifthYoutubeVideoId} />
        </Box>
        <Box width="400px" minWidth="400px">
          <YouTubeEmbed videoId={eventsSixthYoutubeVideoId} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "2rem", md: "1rem" },
          flexWrap: "nowrap", // keep them in a row
          overflowx: "auto", // scroll if it overflows
          padding: "1rem",
        }}
      >
        <Box width="400px" minWidth="400px">
          <Image
            src="/Photos/MataPandal_1.jpeg"
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
        <Box width="400px" minWidth="400px">
          <YouTubeEmbed videoId={eventsSeventhYoutubeVideoId} />
        </Box>
        <Box width="400px" minWidth="400px">
          <Image
            src="/Photos/MataPandal_2.jpeg"
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
      </Box>
      <Box
        width="2000px"
        minWidth="2000px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/Photos/MataPandal_3.jpeg"
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
      <Box
        width="2000px"
        minWidth="2000px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/Photos/MataPandal_4.jpeg"
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
      <Box
        width="2000px"
        minWidth="2000px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/Photos/MataPandal_5.jpeg"
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
    </section >
  );
}

export default Section3;
