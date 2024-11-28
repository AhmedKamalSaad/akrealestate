import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { ReactNode } from "react";

export { default as Hero } from "@/app/components/Hero";
export { default as BuyRent } from "@/app/components/BuyRent";
export { default as NavBar } from "@/app/components/NavBar";
export { default as Rent } from "@/app/components/Rent";
export { default as Sale } from "@/app/components/Sale";
export { default as ClientsStories } from "@/app/components/ClientsStories";
export { default as Email } from "@/app/components/Email";
export { default as Footer } from "@/app/components/Footer";
export { default as TeamCard } from "@/app/components/TeamCard";
export { default as MainPages } from "@/app/components/MainPages";

export const Sales = [
  {
    location: "17081 Perry",
    city: "San Francisco, CA, USA",
    price: "$850,000",
    img: "/project_img_1.jpg",
    baths: 3,
    beds: 2,
    levels: 4,
    sqft: 1234,
  },
  {
    location: "52591 Union Boulevard",
    city: "San Francisco, CA, USA",
    price: "$580,000",
    img: "/project_img_2.jpg",
    baths: 2,
    beds: 3,
    levels: 4,
    sqft: 1546,
  },
  {
    location: "15066 Banks Street",
    city: "San Francisco, CA, USA",
    price: "$700,000",
    img: "/project_img_3.jpg",
    baths: 2,
    beds: 3,
    levels: 2,
    sqft: 1090,
  },
  {
    location: "33234 Washington Avenue",
    city: "San Francisco, CA, USA",
    price: "$770,000",
    img: "/project_img_4.jpg",
    baths: 1,
    beds: 3,
    levels: 2,
    sqft: 900,
  },
];
export const stories = [
  {
    writer: "Sarah & Jake M.",
    story:
      "As first-time homebuyers, we were nervous about the process, but AK made everything so easy! They took the time to explain every detail, guided us through each step, and found us the perfect home in our budget. We couldn’t be happier!",
  },
  {
    writer: "James R.",
    story:
      "Selling a home can be stressful, but AK turned it into a breeze. From staging advice to professional photos and expert marketing, my house sold in just 10 days for above the asking price. I highly recommend their services!",
  },
  {
    writer: "Laura T.",
    story:
      "Moving across the country felt overwhelming, but Ak went above and beyond to help us find a home that met all our needs. Their virtual tours, neighborhood insights, and prompt responses made the process smooth and enjoyable. We’re so grateful!",
  },
  {
    writer: "Michael P.",
    story:
      "I was looking for a great investment property, and AK was incredibly knowledgeable about the market. They helped me find a rental property with excellent ROI, and the closing process was seamless. I look forward to working with them again!",
  },
  {
    writer: "The Johnson Family",
    story:
      "We had a very specific vision for our dream home, and Ak went above and beyond to find it. They were patient, attentive, and always had our best interests at heart. Now we’re living in the home we’ve always dreamed of, thanks to their expertise!",
  },
];
export const contact: {
  icon: ReactNode;
  bold: string;
  text1: string;
  text2: string;
}[] = [
  {
    icon: <IoCallOutline color="red" size={60} />,
    bold: "Call Us",
    text1: "Free Calls",
    text2: "1-800-000-000",
  },
  {
    icon: <IoLocationOutline color="red" size={60} />,
    bold: "Find Us",
    text1: "500 Terry Francine St.",
    text2: "San Francisco, CA 94158",
  },
  {
    icon: <AiOutlineMail color="red" size={60} />,
    bold: "Email Us",
    text1: "Direct Email",
    text2: "info@mysite.com",
  },
];
export const realtors = [
  {
    name: "Gregory Jems",
    img: "/one.avif",
  },
  {
    name: "Britney Bails",
    img: "/two.avif",
  },
  {
    name: "Gerry Grossman",
    img: "/three.avif",
  },
  {
    name: "Don White",
    img: "/four.avif",
  },
  {
    name: "Brenda Rogers",
    img: "/five.avif",
  },
  {
    name: "Mike Helman",
    img: "/six.avif",
  },
];
