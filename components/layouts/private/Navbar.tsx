import React from "react";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { IMAGE_SOURCE } from "../../../config";
import Link from "next/link";

const PrivateNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link href="/admin/home" className="flex items-center gap-2">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={IMAGE_SOURCE.ART_IMAGE}
              alt={"[]~(￣▽￣)~*"}
              width={100}
              height={100}
              className="h-auto w-full object-contain"
            />
          </div>
          <span>Kunal Keshan</span>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default PrivateNavbar;
