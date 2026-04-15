import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import Bootcamphero from "../../components/MicrobootcampPage/MicroBootcampHero"
import UpcomingBootcamps from "../../components/MicrobootcampPage/UpcomingMicroBootcamps"
import OngoingBootcamps from "../../components/MicrobootcampPage/OngoingMicroBootcamps";

export default function Microbootcamps() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F9FAFB",
        minHeight: "100vh"
      }}
    >
      {/* Background Glows */}
      <Box sx={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(59, 130, 246, 0.1)", filter: "blur(100px)", zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(168, 85, 247, 0.1)", filter: "blur(100px)", zIndex: 0 }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Bootcamphero />
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <OngoingBootcamps />
            <Box sx={{ height: 40 }} />
            <UpcomingBootcamps />
        </Container>
      </motion.div>
    </Box>
  );
}
