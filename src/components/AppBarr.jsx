import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
export default function AppBarr() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#2196f3' }}>
        <Toolbar >
          <IconButton>
            <PlaylistAddCheckIcon/>
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center' }}> Görevler Uygulaması</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
