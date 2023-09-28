/**
 * Certificate Card Component
 */

// Dependencies
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { Certificate } from "../../data/certifications";

type CertificateCardProps = React.ComponentProps<"li"> & {
  certificate: Certificate;
};

const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  ...props
}) => {
  return (
    <li
      {...props}
      className="block relative w-full overflow-hidden rounded-xl border-2 border-black transition-all duration-300 shadow-3d-small hover:shadow-3d hover:-translate-y-1"
    >
      <Image
        src={certificate.image}
        alt={certificate.title}
        width={100}
        height={100}
        unoptimized
        loading="lazy"
        className="w-full h-auto object-contain"
      />
      <Link
        href={certificate.organization.link}
        target="_blank"
        className="absolute w-10 h-10 bottom-4 left-4 rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-3d-small hover:-translate-y-1"
        title={`Issued by ${certificate.organization.name}`}
      >
        <Image
          src={certificate.organization.image}
          alt={certificate.organization.name}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </Link>
      <Link
        href={certificate.link}
        target="_blank"
        className="absolute w-10 h-10 bottom-4 left-16 rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-3d-small hover:-translate-y-1 text-2xl flex items-center justify-center bg-white"
        title="View certification"
      >
        <FaLink />
      </Link>
    </li>
  );
};

export default CertificateCard;
