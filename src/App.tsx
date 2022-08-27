import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Copyright } from "./components/layout/copyright";
import { Header } from "./components/layout/header";
import { products } from "./constants/products";
import { cartItemType } from "./types";
import { Product } from "./components/product";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as cartItemType[]);
  const getTotalItems = (items: cartItemType[]) =>
    items.reduce((total: number, item) => total + item.quantity, 0);

  const handleAddToCart = (clickedItem: cartItemType) => {
    setCartItems((prev) => {
      //check if the item is already added in the cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      //When first item is added to the
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as cartItemType[])
    );
  };
  const handleDrawer = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <>
      <Header
        open={cartOpen}
        toggleDrawer={handleDrawer}
        badgeContent={getTotalItems(cartItems)}
        cartItems={cartItems}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
      />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="secondary"
          gutterBottom
        >
          Delivery Charges
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Orders under $50 cost $4.95. For orders under $90, delivery costs
          $2.95. Orders of $90 or more have{" "}
          <span style={{ color: "#3f3f56", fontWeight: "900" }}>
            free delivery.
          </span>
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {products.map((item: cartItemType) => (
            <Grid item key={item.title} xs={12} md={4}>
              <Product item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Copyright />
    </>
  );
}
