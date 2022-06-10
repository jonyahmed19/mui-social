import { styled } from "@mui/system";
import { Pets } from "@mui/icons-material";
import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
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
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
