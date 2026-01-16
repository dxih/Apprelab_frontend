import React from "react";
import course1 from "../../assets/images/components/courses/course1.png";

export default function TopCategories() {
  const categories = [
    { title: "UI/UX DESIGN", image: course1 },
    { title: "Data Analysis", image: course1 },
    { title: "Product Management", image: course1 },
    { title: "Frontend Development", image: course1 },
  ];

  return (
    <section
      style={{
        padding: "40px 0",
        fontFamily: "Arial, sans-serif",
        margin: "0 120px",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>Top Categories</h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              minWidth: "250px",
              height: "230px",
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              border: "1px solid #2a2a72",
              cursor: "pointer",
            }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                padding: "15px",
                boxSizing: "border-box", // Ensure padding is included in width
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <span style={{ fontWeight: "500", textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>{cat.title}</span>
              <button
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px", // Less rounded
                  backgroundColor: "#002147",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  whiteSpace: "nowrap", // Prevent text wrapping
                  flexShrink: 0, // Prevent button from shrinking/growing
                }}
              >
                View Courses
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <a href="/categories" style={{ textDecoration: "underline", color: "#000", fontSize: "0.8rem" }}>
          See more...
        </a>
      </div>
    </section>
  );
}

