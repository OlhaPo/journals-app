import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function ViewJournal() {
  return (
    <Box
      className="ViewJournal"
      sx={{
        width: "90%",
        bgcolor: "background.paper",
        margin: "10px auto",
      }}
    >
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="22.02.2023"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Yoga for lymphatic flow
                </Typography>
                {" — 30:15"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="23.02.2023"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Yoga for new beginnings
                </Typography>
                {" — 20:40"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="24.02.2023"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Yoga for inner peace
                </Typography>
                {" — 25:45"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
