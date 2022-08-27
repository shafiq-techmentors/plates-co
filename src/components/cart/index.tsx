import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { cartItemType } from "../../types";
import { Typography } from "@mui/material";
import { CartItem } from "./cart-item";

type Props = {
  cartItems: cartItemType[];
  addToCart: (clickedItem: cartItemType) => void;
  removeFromCart: (id: number) => void;
};
export const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="div" align="center" pt={2} pb={2}>
            Your Shopping Cart
          </Typography>
          {/* <Divider /> */}
        </Grid>
        {cartItems.length === 0 ? (
          <Grid item xs={12} mt={3}>
            <Typography variant="h5" component="div" align="center">
              No Items added to the cart.
            </Typography>
          </Grid>
        ) : (
          <CartItem
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </Grid>
    </>
  );
};
