import { styled } from "@mui/system";
import { Pets } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const IconsGroup = styled("div")(({ theme }) => ({
    display: "none",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    alignItems: "center",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          MUI 5
        </Typography>
        <Pets
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <IconsGroup>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{
              height: "32px",
              width: "32px",
            }}
            src="https://img.favpng.com/2/16/2/web-development-computer-icons-avatar-business-user-png-favpng-TuvxvfDtZq4sFC6US4DHKgeiy.jpg"
          />
        </IconsGroup>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{
              height: "32px",
              width: "32px",
            }}
            src="https://img.favpng.com/2/16/2/web-development-computer-icons-avatar-business-user-png-favpng-TuvxvfDtZq4sFC6US4DHKgeiy.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
