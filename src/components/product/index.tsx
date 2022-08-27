import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import StarIcon from "@mui/icons-material/StarBorder";
import { cartItemType } from "../../types";

type Props = {
  item: cartItemType;
  handleAddToCart: (clickedItem: cartItemType) => void;
};
export const Product = ({ item, handleAddToCart }: Props) => (
  <Card>
    <CardHeader
      title={item.title}
      subheader={item.subheader}
      titleTypographyProps={{ align: "center" }}
      action={item.code === "R01" ? <StarIcon /> : null}
      subheaderTypographyProps={{
        align: "center",
      }}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[700],
      }}
    />
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography component="h2" variant="h3" color="text.primary">
          ${item.price}
        </Typography>
      </Box>
      <Typography component="div" variant="h5" color="secondary" align="center">
        Code: {item.code}
      </Typography>
      <Typography
        component="div"
        variant="body1"
        color="text.primary"
        align="center"
        pt={4}
        pb={2}
      >
        {item.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        fullWidth
        variant={"contained"}
        color="info"
        size="large"
        onClick={() => handleAddToCart(item)}
      >
        Add to Cart
      </Button>
    </CardActions>
  </Card>
);
