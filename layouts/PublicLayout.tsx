/**
 * Public Layout - Navbar and Footer
 */

// Dependencies
import React, { PropsWithChildren } from "react";
import { NextPage } from "next";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
