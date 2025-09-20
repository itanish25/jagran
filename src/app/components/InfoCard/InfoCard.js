import { Box, Typography } from "@mui/material";

function InfoCard({ heading, content, altContent=null }) {
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
      {altContent && (
        <Typography sx={{ fontWeight: "600" }}>{altContent}</Typography>
      )}
    </Box>
  );
}

export default InfoCard;
