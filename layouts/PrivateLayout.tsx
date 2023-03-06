import React, { PropsWithChildren } from "react";
import PrivateFooter from "../components/layouts/private/Footer";
import PrivateNavbar from "../components/layouts/private/Navbar";
import PrivateSidebar from "../components/layouts/private/Sidebar";

const PrivateLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <section>
        <PrivateNavbar />
        <div className="p-4 sm:ml-64">{children}</div>
        <PrivateFooter />
      </section>
      <PrivateSidebar />
    </main>
  );
};

export default PrivateLayout;
