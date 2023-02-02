/**
 * Public Layout - Navbar and Footer
 */

// Dependencies
import React, { PropsWithChildren } from "react";
import { NextPage } from "next";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Headroom from "react-headroom";

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <main className="w-full px-5">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
