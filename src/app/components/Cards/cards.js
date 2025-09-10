import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Cards() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: '0 9.5rem' }}>
      <Card
        sx={{ maxWidth: 345, marginTop: "2rem", backgroundColor: "#33363b" }}
      >
        <CardMedia sx={{ height: 200 }} image="/Photos/Photo_1.png" title="green iguana" />
        <CardContent>
          <Typography variant="body2" sx={{ color: "#b6bac2" }}>
            Find us on YouTube
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#ffffff" }}
          >
            YouTube Gallery
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "#b6bac2" }}>
            Gallery
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{ maxWidth: 345, marginTop: "2rem", backgroundColor: "#33363b" }}
      >
        <CardMedia sx={{ height: 200 }} image="/Photos/Photo_1.png" title="green iguana" />
        <CardContent>
          <Typography variant="body2" sx={{ color: "#b6bac2" }}>
            Find us on YouTube
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#ffffff" }}
          >
            YouTube Gallery
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "#b6bac2" }}>
            Gallery
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{ maxWidth: 345, marginTop: "2rem", backgroundColor: "#33363b" }}
      >
        <CardMedia sx={{ height: 200 }} image="/Photos/Photo_1.png" title="green iguana" />
        <CardContent>
          <Typography variant="body2" sx={{ color: "#b6bac2" }}>
            Find us on YouTube
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#ffffff" }}
          >
            YouTube Gallery
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "#b6bac2" }}>
            Gallery
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{ maxWidth: 345, marginTop: "2rem", backgroundColor: "#33363b" }}
      >
        <CardMedia sx={{ height: 200 }} image="/Photos/Photo_1.png" title="green iguana" />
        <CardContent>
          <Typography variant="body2" sx={{ color: "#b6bac2" }}>
            Find us on YouTube
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#ffffff" }}
          >
            YouTube Gallery
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "#b6bac2" }}>
            Gallery
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Cards;
