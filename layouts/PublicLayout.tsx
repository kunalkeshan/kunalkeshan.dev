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
      <main className="mt-40 w-full px-5 py-10 md:mt-32 lg:mt-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
