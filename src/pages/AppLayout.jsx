import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function AppLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
