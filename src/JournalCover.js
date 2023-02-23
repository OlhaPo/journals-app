import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import yogaMat from "./images/yogaMat.jpg";
import spiralNotebook from "./images/spiralNotebook.jpg";

export default function JournalCover() {
  return (
    <Box className="JournalCover">
      <Card
        sx={{ maxWidth: 345, mt: "30px", position: "relative" }}
        elevation={8}
      >
        <Box
          src={spiralNotebook}
          component="img"
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            height: "100%",
            zIndex: 100,
            left: "-15px",
          }}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="210"
            src={yogaMat}
            alt="yoga mat"
          />
          <CardContent sx={{ ml: "30px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ mb: "20px" }}
            >
              Yoga Journey
            </Typography>
            <Typography variant="body2" sx={{ mb: "20px" }}>
              22.02.23 Yoga for lymphatic flow
            </Typography>
            <ModeEditIcon color="action" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
