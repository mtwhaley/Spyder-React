import React from "react";

import WebSVG from "./WebSVG";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {}}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              Spyder
            </Typography>
            {/* <Button color="inherit">Login</Button> */}

            <WebSVG
              width={40}
              height={40}
              color="#dddddd"
              backgroundColor="#444444"
            />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
