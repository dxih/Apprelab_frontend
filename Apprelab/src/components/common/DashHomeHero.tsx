import React from "react";
import heroImage from "../../assets/images/components/hero_learning.png";
import apprelabLogo from "../../assets/images/components/apprelab_logo.png";

// Helper component for nav links with underline animation
const NavLinkWithUnderline = ({ text, color = '#D4A017' }: { text: string; color?: string }) => (
    <div
        style={{
            position: "relative",
            cursor: "pointer",
            paddingBottom: "5px"
        }}
        onMouseEnter={(e) => {
            const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
            if (underline) underline.style.width = '100%';
        }}
        onMouseLeave={(e) => {
            const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
            if (underline) underline.style.width = '0%';
        }}
    >
        <span>{text}</span>
        <div
            className="nav-underline"
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '2px',
                width: '0%',
                backgroundColor: color,
                transition: 'width 0.3s ease-in-out'
            }}
        />
    </div>
);

export default function DashHomeHero() {
    return (
        <>
            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
                rel="stylesheet"
            />

            {/* Navbar */}
            <nav
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 60px",
                    minHeight: "120px",
                    backgroundColor: "#fff",
                    borderBottom: "1px solid #e0e0e0",
                    fontFamily: "Poppins, sans-serif",
                    position: "relative",
                }}
            >
                {/* Logo - Absolute positioned on left */}
                <div style={{ position: "absolute", left: "60px", top: "50%", transform: "translateY(calc(-50% - 15px))", display: "flex", alignItems: "center" }}>
                    <img
                        src={apprelabLogo}
                        alt="Apprelab"
                        style={{ height: "80px", width: "auto" }}
                    />
                </div>

                {/* Navigation Links - Centered */}
                <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            cursor: "pointer",
                            position: "relative",
                            paddingBottom: "5px"
                        }}
                    >
                        <span style={{ fontWeight: "500" }}>Explore</span>
                        <span style={{ fontSize: "0.8rem", fontWeight: "900" }}>∨</span>
                        <div
                            className="nav-underline"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '2px',
                                width: '100%',
                                backgroundColor: '#D4A017',
                                transition: 'width 0.3s ease-in-out'
                            }}
                        />
                    </div>

                    <NavLinkWithUnderline text="My Stack" color="#D4A017" />
                    <NavLinkWithUnderline text="My Mentor" color="#D4A017" />
                    <NavLinkWithUnderline text="Worklabs" color="#D4A017" />
                </div>

                {/* Right side - Icons and Profile - Absolute positioned on right */}
                <div style={{ position: "absolute", right: "60px", display: "flex", alignItems: "center", gap: "20px" }}>
                    {/* Search Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>

                    {/* Cart Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>

                    {/* Notification Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                            alt="userimage"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                backgroundColor: "#ff6b9d",
                                objectFit: "cover",
                            }}
                        />
                        <div>
                            <div style={{ fontWeight: "600", fontSize: "0.9rem" }}>Welcome, PhAyyy</div>
                            <div style={{ fontSize: "0.75rem", color: "#666" }}>Ready to learn & grow?</div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                style={{
                    background: "linear-gradient(to right, #001233 0%, #002b66 50%, #0044aa 100%)",
                    margin: "40px 120px",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                {/* Hero Content */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "60px",
                        padding: "120px 60px",
                        maxWidth: "1400px",
                        margin: "0 auto",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    {/* Left side - Text content */}
                    <div style={{
                        flex: 1,
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <h1
                            style={{
                                fontSize: "4rem",
                                fontWeight: "800",
                                lineHeight: "1.3",
                                margin: 0,
                                marginBottom: "40px",
                            }}
                        >
                            Learn Market-
                            <br />
                            Ready Skills
                        </h1>
                        <p
                            style={{
                                fontSize: "1.3rem",
                                fontWeight: "300",
                                opacity: 0.95,
                                margin: 0,
                                lineHeight: "1.8",
                            }}
                        >
                            that connect you to opportunities
                        </p>
                    </div>

                    {/* Right side - Image */}
                    <div style={{ flex: 1 }}>
                        <img
                            src={heroImage}
                            alt="Students learning together"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "12px",
                                objectFit: "cover",
                                maxHeight: "550px",
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}


