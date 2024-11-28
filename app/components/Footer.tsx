import Link from "next/link";
import React from "react";
import { MdRealEstateAgent } from "react-icons/md";

const Footer = () => {
  return (
    <section className=" bg-slate-900">
      <div className="flex justify-between items-center h-24 max-w-screen-2xl mx-auto px-4">
        <Link href={"/"}>
          <MdRealEstateAgent color="white" size={50} />
        </Link>
        <p className="text-slate-600">Copyright © 2024. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
