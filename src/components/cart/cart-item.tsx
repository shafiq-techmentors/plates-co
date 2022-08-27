import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { cartItemType } from "../../types";
import { Button, Typography } from "@mui/material";

type Props = {
  cartItems: cartItemType[];
  addToCart: (clickedItem: cartItemType) => void;
  removeFromCart: (id: number) => void;
};
export const CartItem = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: cartItemType[]) =>
    items.reduce((total: number, item) => {
      if (item.code === "R01" && item.quantity > 1) {
        const num = Math.floor(item.quantity / 2);
        const isSpecialOffer = num * 16.47;
        const normalPrice = Math.ceil(item.quantity / 2) * 32.95;
        return isSpecialOffer + normalPrice + total;
      } else {
        return total + item.quantity * item.price;
      }
    }, 0);
  const deliveryCharges: number =
    calculateTotal(cartItems) >= 90
      ? 0
      : calculateTotal(cartItems) > 50
      ? 2.95
      : 4.95;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 350 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.code}</TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </Button>

                  <Typography>{item.quantity}</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                </Stack>
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">
              ${calculateTotal(cartItems).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Delivery Charges</TableCell>
            <TableCell align="right">${deliveryCharges}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="h6" component="div">
                {" "}
                Total
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6" component="div">
                {(calculateTotal(cartItems) + deliveryCharges).toFixed(2)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
