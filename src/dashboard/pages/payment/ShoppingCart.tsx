import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

import course1 from "../../assets/images/courses/course1.png";
import course2 from "../../assets/images/courses/course2.png";
import course3 from "../../assets/images/courses/course3.png";
import course4 from "../../assets/images/courses/course4.png";

interface CourseItem {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  author?: string;
  rating?: number;
  reviews?: string;
}

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<CourseItem[]>([
    {
      id: 1,
      image: course1,
      title:
        "Advanced UI/UX design in Figma: Intermediate (5 Real world projects)",
      price: 10500,
      oldPrice: 20500,
    },
  ]);

  const recommended: CourseItem[] = [
    {
      id: 2,
      image: course1,
      title: "Advanced UI/UX design in Figma: Expert Level",
      author: "Yvonne Wilson, Emilia Clarke",
      rating: 4.5,
      reviews: "900",
      price: 10000,
      oldPrice: 15000,
    },
    {
      id: 3,
      image: course2,
      title: "Figma for Beginners, Vol. 2",
      author: "Faizur Rehman, Swello",
      rating: 5.0,
      reviews: "1800",
      price: 20000,
      oldPrice: 35000,
    },
    {
      id: 4,
      image: course3,
      title:
        "The Art of Getting Paid to Design User Centered Products",
      author: "Olaf Val, Waluli Hasan",
      rating: 4.5,
      reviews: "900",
      price: 10000,
      oldPrice: 15000,
    },
    {
      id: 5,
      image: course4,
      title: "Introduction to Figma: Beginner Bootcamp, Vol 1.",
      author: "Ian Spillow, Tracy Adams",
      rating: 5.0,
      reviews: "4900",
      price: 10000,
      oldPrice: 15000,
    },
  ];

  // Calculate TOTAL
  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addToCart = (item: CourseItem) => {
    if (!cart.find((c) => c.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", py: 6 }}>
      <Typography fontSize="2.5rem" fontWeight={700}>
        Shopping Cart
      </Typography>
      <Typography mt={1} mb={4} fontSize="1.1rem" color="#555">
        (You have {cart.length} course(s) in cart)
      </Typography>

      {/* CART LIST */}
      {cart.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            gap: 3,
            mb: 4,
            alignItems: "center",
            flexWrap: "wrap",
            p: 2,
            border: "1px solid #e5e5e5",
            borderRadius: "12px",
          }}
        >
          <Card sx={{ width: 80, height: 80, borderRadius: "14px" }}>
            <CardMedia component="img" src={item.image} />
          </Card>

          <Box width="280px">
            <Typography fontWeight={600}>{item.title}</Typography>

            <Typography mt={1}>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                ₦{item.price.toLocaleString()}
              </span>
              &nbsp;&nbsp;
              <span
                style={{
                  color: "#aaa",
                  textDecoration: "line-through",
                }}
              >
                ₦{item.oldPrice.toLocaleString()}
              </span>
            </Typography>
          </Box>

          <Box sx={{ marginLeft: "auto" }}>
            <Button
              variant="outlined"
              sx={{ px: 4, borderRadius: "10px" }}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </Box>
        </Box>
      ))}

      {/* TOTAL SECTION */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          border: "1px solid #dcdcdc",
          textAlign: "right",
        }}
      >
        <Typography fontSize="1.4rem" fontWeight={700}>
          Total:{" "}
          <span>
            ₦{totalPrice.toLocaleString()}
          </span>
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/dashboard/checkout"
          sx={{
            mt: 2,
            px: 6,
            py: 1.5,
            fontSize: "1rem",
            background: "#00093a",
            borderRadius: "10px",
            textTransform: "none",
          }}
        >
          Checkout
        </Button>
      </Box>

      {/* RECOMMENDED SECTION */}
      <Typography mt={6} mb={2} fontSize="1.3rem" fontWeight={600}>
        You may also like
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {recommended.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: "14px",
              border: "1px solid #e0e0e0",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              },
            }}
          >
            <CardMedia component="img" height={170} src={item.image} />

            <Box p={2}>
              <Typography fontWeight={700}>{item.title}</Typography>

              <Typography fontSize="0.85rem" color="#666">
                {item.author}
              </Typography>

              <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
                {[...Array(Math.round(item.rating || 0))].map((_, i) => (
                  <StarIcon key={i} sx={{ fontSize: 18, color: "#FFD700" }} />
                ))}
                <Typography ml={1} fontSize="0.85rem">
                  ({item.reviews})
                </Typography>
              </Box>

              <Box mt={1}>
                <span style={{ fontWeight: 700 }}>
                  ₦{item.price.toLocaleString()}
                </span>
                &nbsp;&nbsp;
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#777",
                  }}
                >
                  ₦{item.oldPrice.toLocaleString()}
                </span>
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  background: "#00093a",
                  textTransform: "none",
                  borderRadius: "10px",
                }}
                onClick={() => addToCart(item)}
              >
                Add to cart
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ShoppingCart;
