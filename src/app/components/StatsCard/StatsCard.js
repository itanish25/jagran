import { Box, Typography } from "@mui/material";

function StatsCard({ number, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Typography sx={{ fontWeight: "600", fontSize: "1.5rem" }}>
        {number}
      </Typography>
      <Typography sx={{ color: "rgb(119 128 161)" }}>{label}</Typography>
    </Box>
  );
}

export default StatsCard;
