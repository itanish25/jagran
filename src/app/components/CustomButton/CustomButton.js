import { Button } from "@mui/material";
import Image from "next/image";
import { phoneNumber, whatsappMessage, youtubeChannelAllVideosLink } from "@/app/constants/constants";

function CustomButton({
  color = '#000000',
  bgColor = '#FFFFFF',
  brRadius = 0,
  iconPath = null,
  iconAlt = null,
  btnText = null,
  openLink = youtubeChannelAllVideosLink,
}) {

  const number = phoneNumber; // include country code without spaces
  const message = whatsappMessage;

  const handleClick = () => {
    if (btnText === "Book Jagran" || btnText === "Book Now") {
      const url = `https://wa.me/${number.replace("+", "")}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank"); // opens in new tab or WhatsApp app on mobile
    } else {
      window.open(openLink, "_blank");
    }
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
      startIcon={
        iconPath ? (
          <Image src={iconPath} alt={iconAlt} width={24} height={24} />
        ) : null
      }
      onClick={handleClick}
    >
      {btnText}
    </Button>
  );
}

export default CustomButton;
