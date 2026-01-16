export default function Recommended() {
    const courses = [
        {
            title: "Intro to UX Design",
            duration: "8 Weeks",
            instructor: "James Johnson",
        },
        {
            title: "Frontend Development With React",
            duration: "12 Weeks",
            instructor: "Samuel Paul",
        },
        {
            title: "Product Management Basics",
            duration: "8 Weeks",
            instructor: "Cynthia Israel",
        },
        {
            title: "Intro to Cyber Security",
            duration: "8 Weeks",
            instructor: "James Adelusi",
        },
        {
            title: "Data Analysis Basics",
            duration: "8 Weeks",
            instructor: "Cynthia Israel",
        },
    ];

    return (
        <div
            style={{
                padding: "40px 0",
                fontFamily: "Poppins, sans-serif",
                margin: "0 120px",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "30px",
                }}
            >
                <h2
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        margin: 0,
                    }}
                >
                    Recommended For You
                </h2>
                <a
                    href="#"
                    style={{
                        color: "#000",
                        textDecoration: "underline",
                        fontSize: "0.95rem",
                        fontWeight: "400",
                        marginRight: "30px",
                    }}
                >
                    More
                </a>
            </div>

            {/* Course List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {courses.map((course, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "24px 28px",
                            backgroundColor: "#eeeeee",
                            borderRadius: "8px",
                        }}
                    >
                        {/* Left side - Course info */}
                        <div>
                            <h3
                                style={{
                                    fontSize: "1.05rem",
                                    fontWeight: "600",
                                    margin: 0,
                                    marginBottom: "8px",
                                }}
                            >
                                {course.title}
                            </h3>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "#666",
                                    fontSize: "0.85rem",
                                }}
                            >
                                {/* Clock icon */}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>Duration: {course.duration}</span>
                            </div>
                        </div>

                        {/* Right side - Instructor info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <img
                                alt="instructor"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    backgroundColor: "#ddd",
                                    objectFit: "cover",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#333",
                                    fontWeight: "500",
                                }}
                            >
                                {course.instructor}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
