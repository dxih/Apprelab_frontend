import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  TextField,
  MenuItem,
  Divider,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import uiuxImg from "../../assets/images/courses/course1.png"; 


// TEMP STATIC CART (since backend isn’t connected yet)
const cart = [
  {
    id: 1,
    title: "Advanced UI/UX design in Figma: Intermediate (5 Real world projects)",
    price: 10500,
    oldPrice: 20500,
    image: uiuxImg,
  },
];

const Checkout: React.FC = () => {
  const totalOriginal = cart.reduce((sum, i) => sum + i.oldPrice, 0);
  const totalCurrent = cart.reduce((sum, i) => sum + i.price, 0);
  const discount = totalOriginal - totalCurrent;

  return (
    <Grid
      container
      sx={{
        width: "100%",
        maxWidth: "1300px",
        mx: "auto",
        py: 6,
        px: { xs: 2, md: 4 },
      }}
      spacing={6}
    >
      {/* LEFT SECTION */}
      <Grid item xs={12} md={7}>
        <Typography fontSize="1.9rem" fontWeight={700}>
          Checkout
        </Typography>

        {/* Billing Address */}
        <Box mt={4}>
          <Typography fontWeight={600} mb={1.2}>
            Billing Address
          </Typography>

          <TextField
            select
            fullWidth
            label="Country"
            defaultValue="Nigeria"
            sx={{
              borderRadius: "10px",
              "& fieldset": { borderRadius: "10px" },
            }}
          >
            <MenuItem value="Nigeria">Nigeria</MenuItem>
            <MenuItem value="Ghana">Ghana</MenuItem>
            <MenuItem value="Kenya">Kenya</MenuItem>
          </TextField>
        </Box>

        {/* Payment Method */}
        <Box mt={5}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={600}>Payment Method</Typography>
            <Typography fontSize=".85rem" color="#444">
              Secure and encrypted <LockIcon sx={{ fontSize: 14 }} />
            </Typography>
          </Box>

          <Box
            mt={2}
            sx={{
              border: "1px solid #dcdcdc",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <RadioGroup defaultValue="card">
              {/* CARD */}
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Cards"
                sx={{ px: 2, py: 1, fontWeight: 600 }}
              />

              <Box px={2} pb={3}>
                <TextField
                  label="Card Number"
                  fullWidth
                  placeholder="4567 1234 6789 0987"
                  sx={{ mt: 1, mb: 2 }}
                />

                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField fullWidth label="MM/YY" />
                  <TextField fullWidth label="CVC" />
                </Box>

                <TextField
                  label="Name on card"
                  fullWidth
                  sx={{ mt: 2 }}
                  placeholder="Name on card"
                />
              </Box>

              <Divider />

              {/* PayPal */}
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label="Paypal"
                sx={{ px: 2, py: 1 }}
              />

              <Divider />

              {/* Bank Transfer */}
              <FormControlLabel
                value="bank"
                control={<Radio />}
                label="Bank Transfer"
                sx={{ px: 2, py: 1 }}
              />
            </RadioGroup>
          </Box>
        </Box>

        {/* Order Details */}
        <Box mt={5}>
          <Typography fontWeight={600} mb={1.2}>
            Order Details ({cart.length} course)
          </Typography>

          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: 2,
                border: "1px solid #e5e5e5",
                borderRadius: "12px",
                mb: 2,
              }}
            >
              <Card
                sx={{
                  width: 65,
                  height: 65,
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <CardMedia component="img" src={item.image} />
              </Card>

              <Box flex={1}>
                <Typography
                  fontWeight={600}
                  fontSize=".94rem"
                  lineHeight="1.3"
                >
                  {item.title}
                </Typography>
              </Box>

              <Box textAlign="right">
                <Typography fontWeight={700}>
                  ₦{item.price.toLocaleString()}
                </Typography>
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "#999",
                    fontSize: ".8rem",
                  }}
                >
                  ₦{item.oldPrice.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>

      {/* RIGHT SECTION */}
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            p: 4,
            borderRadius: "16px",
            border: "1px solid #e2e2e2",
            background: "#f7f7f7",
          }}
        >
          <Typography fontWeight={700} mb={2}>
            Order Summary
          </Typography>

          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Original Price:</Typography>
            <Typography>₦{totalOriginal.toLocaleString()}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography>Discounts (50% off):</Typography>
            <Typography sx={{ color: "red" }}>
              -₦{discount.toLocaleString()}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="space-between" mb={3}>
            <Typography fontWeight={600}>
              Total ({cart.length} course)
            </Typography>
            <Typography fontWeight={700} fontSize="1.25rem">
              ₦{totalCurrent.toLocaleString()}
            </Typography>
          </Box>

          <Typography fontSize=".85rem" mb={2} color="#444">
            By completing this purchase, you agree to these{" "}
            <a href="#" style={{ color: "#00093a" }}>
              Terms of Use
            </a>
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              background: "#00093a",
              py: 1.8,
              borderRadius: "9px",
              fontSize: "1rem",
              textTransform: "none",
            }}
          >
            <LockIcon sx={{ fontSize: 18, mr: 1 }} />
            Pay ₦{totalCurrent.toLocaleString()}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Checkout;
