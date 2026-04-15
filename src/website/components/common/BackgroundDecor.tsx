import React from "react";
import { Box } from "@mui/material";

interface BackgroundDecorProps {
  variant?: "home" | "learn" | "mentor" | "about" | "generic";
}

const BackgroundDecor: React.FC<BackgroundDecorProps> = ({ variant = "generic" }) => {

  const renderHomeDecor = () => (
    <>
      {/* Soft Glow Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(1, 10, 69, 0.12) 0%, rgba(1, 10, 69, 0) 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "35vw",
          height: "35vw",
          background: "radial-gradient(circle, rgba(253, 203, 7, 0.12) 0%, rgba(253, 203, 7, 0) 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      {/* Outline Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 300,
          height: 300,
          border: "2px solid rgba(1, 10, 69, 0.2)",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          zIndex: 0,
          transform: "rotate(45deg)",
        }}
      />
    </>
  );

  const renderLearnDecor = () => (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(rgba(1, 10, 69, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: 200,
          height: 200,
          border: "2px solid rgba(1, 10, 69, 0.1)",
          borderRadius: "12px",
          zIndex: 0,
          transform: "rotate(-15deg)",
        }}
      />
    </>
  );

  const renderMentorDecor = () => (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(1, 10, 69, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "-5%",
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(1, 10, 69, 0.2), transparent)",
          transform: "rotate(-5deg)",
          zIndex: 0,
        }}
      />
    </>
  );

  const renderAboutDecor = () => (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vh",
          border: "2px solid rgba(253, 203, 7, 0.1)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: 150,
          height: 150,
          border: "2px solid rgba(1, 10, 69, 0.15)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
    </>
  );

  const renderGenericDecor = () => (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "300px",
          height: "300px",
          background: "linear-gradient(135deg, rgba(1, 10, 69, 0.1) 0%, transparent 100%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "300px",
          height: "300px",
          background: "linear-gradient(315deg, rgba(253, 203, 7, 0.1) 0%, transparent 100%)",
          zIndex: 0,
        }}
      />
    </>
  );

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {variant === "home" && renderHomeDecor()}
      {variant === "learn" && renderLearnDecor()}
      {variant === "mentor" && renderMentorDecor()}
      {variant === "about" && renderAboutDecor()}
      {variant === "generic" && renderGenericDecor()}
    </Box>
  );
};

export default BackgroundDecor;
