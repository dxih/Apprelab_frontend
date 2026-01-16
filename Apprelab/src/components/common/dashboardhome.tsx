import React from "react";
import DashHomeHero from "./DashHomeHero";
import TopCategories from "./TopCategories";
import Recommended from "./Recommended";
import TopRatedCourses from "./TopRatedCourses";

function App() {
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            <DashHomeHero />
            <TopCategories />
            <TopRatedCourses />
            <Recommended />
        </div>
    );
}

export default App;

