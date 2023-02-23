import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import JournalCover from "./JournalCover";

export default function JournalList() {
  return (
    <Box>
      <JournalCover />
      <Box sx={{ textAlign: "right" }}>
        <Button>
          <AddIcon sx={{ fontSize: "60px" }} />
        </Button>
      </Box>
    </Box>
  );
}
