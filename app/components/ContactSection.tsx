import React, { ReactNode } from "react";
import { contact } from ".";
interface props {
  icon: ReactNode;
  bold: string;
  text1: string;
  text2: string;
}

const ContactSection = () => {
  return (
    <section className="mx-auto pb-4 mt-16 max-w-screen-2xl">
      <h1 className="tracking-widest text-xl text-black font-thin lg:text-2xl mb-20 text-center ">
        YOUR DREAM HOUSE IS ONE STEP AWAY!
      </h1>
      <div className="flex items-center justify-between flex-col gap-10 md:gap-0 md:flex-row md:max-w-screen-md md:px-5 lg:px-8 xl:px-0 lg:max-w-screen-lg mx-auto">
        {contact.map((i, index) => (
          <ContactSectionDiv
            bold={i.bold}
            icon={i.icon}
            text1={i.text1}
            text2={i.text2}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;

export const ContactSectionDiv = ({ bold, icon, text1, text2 }: props) => {
  return (
    <div className="flex flex-col items-center justify-center tracking-wide ">
      {icon}
      <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-5">{bold}</h1>
      <p className="mb-2 text-slate-700">{text1}</p>
      <p className="text-slate-700">{text2}</p>
    </div>
  );
};
