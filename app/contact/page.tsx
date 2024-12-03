import { Metadata } from "next";
import { MainPages } from "../components";

const page = () => {
  return (
    <MainPages bgImg="/contact.jpg" big="Contact" small="BE IN TOUCH">
      <div className="max-w-screen-lg flex flex-col md:flex-row mx-auto gap-10 items-center md:items-start pt-8">
        <h1 className="text-2xl font-bold">Our Office</h1>
        <div className="flex flex-col gap-2">
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Tel: 123-456-7890</p>
          <p>Fax: 123-456-7890</p>
        </div>
        <p>info@mysite.com</p>
      </div>
    </MainPages>
  );
};

export default page;

export const metadata: Metadata = {
  title: "Contact",
  description: "AK realestate website",
};
