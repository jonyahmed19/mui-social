import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  ListItemText,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h5" fontWeight={100} mb={2} mt={3}>
          Online Friends
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <AvatarGroup total={23}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
          </AvatarGroup>
        </Box>
        <Typography variant="h5" fontWeight={100} mb={2} mt={4}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 350 }} cols={3} mt={3} rowHeight={164}>
          <ImageListItem>
            <img
              src={`https://material-ui.com/static/images/image-list/camera.jpg`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://material-ui.com/static/images/image-list/camera.jpg`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://material-ui.com/static/images/image-list/camera.jpg`}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h5" fontWeight={100} mb={2} mt={4}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
