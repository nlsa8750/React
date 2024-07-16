import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
// outlet allows you to dynamically handles the UI component

function Layout() {
    return (

        <>
        <Header></Header>
        {/* for nesting = within layout, every element */}
        <Outlet></Outlet>
        <Footer></Footer>
        </>

    )
}

export default Layout;