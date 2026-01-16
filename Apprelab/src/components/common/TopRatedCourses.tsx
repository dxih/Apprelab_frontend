import React from "react";
import course1 from "../../assets/images/components/courses/course1.png";
import course2 from "../../assets/images/components/courses/course2.png";
import course3 from "../../assets/images/components/courses/course3.png";
import course4 from "../../assets/images/components/courses/course4.png";

export default function TopRatedCourses() {
    const courses = [
        {
            id: 1,
            title: "Advanced UI/UX design in Figma: Intermediate",
            instructors: "Yvonne Wilson, Emilia Clarke",
            rating: 4.5,
            reviews: 900,
            price: "₦10,000",
            originalPrice: "₦15,000",
            image: course1,
        },
        {
            id: 2,
            title: "Advanced Data Analysis in Tableau: Intermediate",
            instructors: "Yvonne Wilson, Emilia Clarke",
            rating: 4.5,
            reviews: 900,
            price: "₦10,000",
            originalPrice: "₦15,000",
            image: course2,
        },
        {
            id: 3,
            title: "Advanced Python in Frontend: Intermediate",
            instructors: "Yvonne Wilson, Emilia Clarke",
            rating: 4.5,
            reviews: 900,
            price: "₦10,000",
            originalPrice: "₦15,000",
            image: course3,
        },
        {
            id: 4,
            title: "Advanced Motion design: Intermediate",
            instructors: "Yvonne Wilson, Emilia Clarke",
            rating: 4.5,
            reviews: 900,
            price: "₦10,000",
            originalPrice: "₦15,000",
            image: course4,
        },
    ];

    return (
        <section
            style={{
                padding: "40px 0",
                fontFamily: "Poppins, sans-serif",
                margin: "0 120px",
            }}
        >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "30px" }}>
                Top Rated Courses
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "40px",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                {courses.map((course) => (
                    <div
                        key={course.id}
                        style={{
                            flex: 1,
                            minWidth: "250px",
                            border: "1px solid #2a2a72",
                            borderRadius: "12px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#fff",
                        }}
                    >
                        {/* Course Image */}
                        <div style={{ padding: "12px" }}>
                            <img
                                src={course.image}
                                alt={course.title}
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div style={{ padding: "0 16px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "700",
                                    marginBottom: "8px",
                                    lineHeight: "1.4",
                                }}
                            >
                                {course.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#666",
                                    marginBottom: "8px",
                                }}
                            >
                                {course.instructors}
                            </p>

                            {/* Rating */}
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "4px" }}>
                                <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>{course.rating}</span>
                                <div style={{ display: "flex" }}>
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} style={{ color: i < Math.floor(course.rating) ? "#FFD700" : "#e0e0e0", fontSize: "0.9rem" }}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span style={{ color: "#666", fontSize: "0.8rem" }}>({course.reviews})</span>
                            </div>

                            {/* Price and Button */}
                            <div
                                style={{
                                    marginTop: "auto",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <span style={{ fontWeight: "700", fontSize: "1rem", marginRight: "8px" }}>
                                        {course.price}
                                    </span>
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#999",
                                            fontSize: "0.8rem",
                                        }}
                                    >
                                        {course.originalPrice}
                                    </span>
                                </div>
                                <button
                                    style={{
                                        backgroundColor: "#002147",
                                        color: "#fff",
                                        border: "none",
                                        padding: "8px 16px",
                                        borderRadius: "6px",
                                        fontSize: "0.85rem",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                    }}
                                >
                                    View Course
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
