import { Separator } from "@/components/ui/separator";
import { BuyRent, Hero } from "./components";
import Rent from "./components/Rent";
import Sale from "./components/Sale";

export default function Home() {
  return (
    <>
      <Hero />
      <BuyRent />
      <Sale />
      <Separator className="w-[85%] mx-auto my-20 h-[2px]" />
      <Rent />
    </>
  );
}
