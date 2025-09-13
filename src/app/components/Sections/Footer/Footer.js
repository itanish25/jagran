import { Box, Divider, Typography } from "@mui/material";
import Card from "@/app/components/Card/Card";

const phoneNumber = "+919717715315"; // include country code without spaces
const message = "Hello, I want to know more about your Jagran event."; // optional pre-filled message

function Footer() {
    const handleClickPhone = () => {
        window.location.href = `tel:${phoneNumber}`;
    }

    const handleClickWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank"); // opens in new tab or WhatsApp app on mobile
    }

    const handleClickYouTube = () => {
        const url = "https://www.youtube.com/@NaveenSharma-mg7nc/featured";
        window.open(url, "_blank"); // opens in new tab or WhatsApp app on mobile
    }

    return (
        <section
            id="Contact us"
            style={{
                backgroundColor: "rgb(153, 79, 245)",
                padding: "3rem 8rem 0 8rem",
                marginTop: "-4rem"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    gap: { xs: '2rem', md: '0' },
                    paddingBottom: '2rem'
                }}
            >
                <Card
                    iconPath={"/Photos/call-icon.png"}
                    iconAlt={"phone"}
                    text1={"Call us from 8AM to 6PM"}
                    text2={"+91-9717715315"}
                    handleClick={handleClickPhone}
                />
                <Card
                    iconPath={"/Photos/mail-icon.png"}
                    iconAlt={"mail"}
                    text1={"Our team is there to help."}
                    text2={"nkumar47459@gmail.com"}
                    handleClick={handleClickWhatsApp}
                />
                <Card
                    iconPath={"/Photos/whatsapp-icon.png"}
                    iconAlt={"youtube"}
                    text1={"Connect with us on WhatsApp"}
                    text2={"+91-9717715315"}
                    handleClick={handleClickWhatsApp}
                />
                <Card
                    iconPath={"/Photos/youtube-icon.png"}
                    iconAlt={"youtube"}
                    text1={"See our social media"}
                    text2={"Naveen Sharma and Party"}
                    handleClick={handleClickYouTube}
                />
            </Box>
            <Divider />
            <br />
            <Typography
                sx={{
                    color: "rgb(230, 230, 230)",
                    textAlign: "center",
                }}
            >
                © 2025 Naveen Sharma. All rights reserved.
            </Typography>
            <br />
        </section>
    )
}

export default Footer;