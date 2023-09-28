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
  const dateIssued = new Intl.DateTimeFormat("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(certificate.dateIssued);

  return (
    <li
      {...props}
      className="block w-full p-4 rounded-xl border-2 border-black transition-all duration-300 shadow-3d-small hover:shadow-3d hover:-translate-y-1"
    >
      <div className="w-full overflow-hidden rounded-md">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={100}
          height={100}
          unoptimized
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">{certificate.title}</h3>
        <p>{dateIssued}</p>
        <div className="mt-2 flex items-center gap-2">
          <Link
            href={certificate.organization.link}
            target="_blank"
            className="block w-10 h-10 rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-3d-small hover:-translate-y-1"
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
            className="w-10 h-10 rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-3d-small hover:-translate-y-1 text-2xl flex items-center justify-center bg-white"
            title="View certification"
          >
            <FaLink />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CertificateCard;
