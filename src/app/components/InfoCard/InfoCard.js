import { Box, Typography } from "@mui/material";

function InfoCard({ heading, content }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
      }}
    >
      <Typography sx={{ color: "rgb(119 128 161)" }}>{heading}</Typography>
      <Typography sx={{ fontWeight: "600" }}>{content}</Typography>
    </Box>
  );
}

export default InfoCard;
