import { Box, Divider, Typography } from "@mui/material";
import Card from "@/app/components/Card/Card";
import { phoneNumber, emailId, whatsappMessage, youtubeChannelLink, instagramPageLink, googleReviewLink, currentYear } from "@/app/constants/constants";

const number = phoneNumber; // include country code without spaces
const message = whatsappMessage; // optional pre-filled message

function Footer() {
    const handleClickPhone = () => {
        window.location.href = `tel:${number}`;
    }

    const handleClickWhatsApp = () => {
        const url = `https://wa.me/${number.replace("+", "")}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    const handleClickYouTube = () => {
        const url = youtubeChannelLink;
        window.open(url, "_blank");
    }

    const handleClickInstagram = () => {
        const url = instagramPageLink;
        window.open(url, "_blank");
    }

    const handleClickGoogleReview = () => {
        const url = googleReviewLink;
        window.open(url, "_blank");
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
                    paddingBottom: '2rem',
                    marginBottom: '1rem',
                }}
            >
                <Card
                    iconPath={"/Photos/call-icon.png"}
                    iconAlt={"phone"}
                    text1={"Call us anytime – we are available 24/7."}
                    text2={number}
                    handleClick={handleClickPhone}
                />
                <Card
                    iconPath={"/Photos/mail-icon.png"}
                    iconAlt={"mail"}
                    text1={"Our team is there to help."}
                    text2={emailId}
                    handleClick={handleClickWhatsApp}
                />
                <Card
                    iconPath={"/Photos/whatsapp-icon.png"}
                    iconAlt={"youtube"}
                    text1={"Connect with us on WhatsApp"}
                    text2={number}
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    gap: { xs: '2rem', md: '8rem' },
                    paddingBottom: '2rem'
                }}
            >
                <Card
                    iconPath={"/Photos/instagram-logo.png"}
                    iconAlt={"instagram"}
                    text1={"See our Instagram handle"}
                    text2={"navveen.sharma"}
                    handleClick={handleClickInstagram}
                />
                <Card
                    iconPath={"/Photos/google-logo.png"}
                    iconAlt={"google-review"}
                    text1={"Share you review on Google Reviews!"}
                    text2={"Mata ki Chowki and Jagran by Naveen Sharma"}
                    handleClick={handleClickGoogleReview}
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
                © {currentYear} Naveen Sharma. All rights reserved.
            </Typography>
            <br />
        </section>
    )
}

export default Footer;