import { Box, Typography } from "@mui/material";
import Image from "next/image";

function Card({ iconPath, iconAlt, text1, text2, handleClick }) {
    return (
        <Box
            onClick={handleClick}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: 'none' },
                justifyContent: "center",
                gap: '1rem',
                cursor: 'pointer'
            }}
        >
            <Image src={iconPath} alt={iconAlt} width={40} height={40} />
            <Typography
                sx={{
                    color: "rgb(230, 230, 230)",
                    textAlign: "center",
                }}
            >
                {text1}
            </Typography>
            <Typography
                sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                }}
            >
                {text2}
            </Typography>
        </Box>
    )
}

export default Card;