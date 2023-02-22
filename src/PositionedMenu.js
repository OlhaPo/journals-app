import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Container from "@mui/material/Container";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className="PositionedMenu">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="secondary"
                size="large"
              >
                <MenuIcon />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem>Creativity</MenuItem>
                <MenuItem>Gratitude </MenuItem>
                <MenuItem>Yoga</MenuItem>
              </Menu>
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Name of the Journal
            </Typography>
            <Button color="inherit">
              <SettingsSuggestIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
