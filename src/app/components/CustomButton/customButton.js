import { Button } from "@mui/material";
import Image from "next/image";

function CustomButton({color, bgColor, brRadius, iconPath, iconAlt, btnText}) {
  return (
    <Button
      sx={{
        color: color,
        backgroundColor: bgColor,
        borderRadius: brRadius,
        padding: "0.7rem 1rem",
        fontWeight: "600",
        border: "0.5px solid rgb(119, 128, 161)",
      }}
      startIcon={
        <Image
          src={iconPath}
          alt={iconAlt}
          width={24}
          height={24}
        />
      }
    >
      {btnText}
    </Button>
  );
}

export default CustomButton;
