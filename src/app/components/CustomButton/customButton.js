import { Button } from "@mui/material";
import Image from "next/image";

function CustomButton({
  color,
  bgColor,
  brRadius,
  iconPath,
  iconAlt,
  btnText,
  openLink = "https://www.youtube.com/@NaveenSharma-mg7nc/videos",
}) {
  
  const handleClick = () => {
    window.open(openLink, "_blank");
  };

  return (
    <Button
      sx={{
        color: color,
        backgroundColor: bgColor,
        borderRadius: brRadius,
        padding: "0.7rem 1rem",
        fontWeight: "600",
        border: "0.5px solid rgb(119, 128, 161)",
        fontSize: { xs: "0.6rem", md: "0.875rem" },
      }}
      startIcon={<Image src={iconPath} alt={iconAlt} width={24} height={24} />}
      onClick={handleClick}
    >
      {btnText}
    </Button>
  );
}

export default CustomButton;
