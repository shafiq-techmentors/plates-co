import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Copyright = () => {
  return (
    <Typography
      variant="body1"
      align="center"
      sx={{ pt: { xs: 2, sm: 2, md: 20, lg: 20 } }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.leanscale.com/">
        Plates Co
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};
