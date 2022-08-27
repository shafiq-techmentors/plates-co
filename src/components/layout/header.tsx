import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import { Cart } from "../cart";
import { cartItemType } from "../../types";

type Props = {
  open: boolean;
  toggleDrawer: () => void;
  badgeContent: number;
  cartItems: cartItemType[];
  addToCart: (clickedItem: cartItemType) => void;
  removeFromCart: (id: number) => void;
};

export const Header = ({
  open,
  toggleDrawer,
  badgeContent,
  cartItems,
  addToCart,
  removeFromCart,
}: Props) => {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Plates Co.
          </Typography>
          <Box>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={toggleDrawer}
              >
                <Badge badgeContent={badgeContent} color="warning">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>
    </AppBar>
  );
};
