import { Separator } from "@/components/ui/separator";
import { BuyRent, ClientsStories, Hero, Rent, Sale } from "./components";
export default function Home() {
  return (
    <>
      <Hero />
      <BuyRent />
      <Sale />
      <Separator className="w-[85%] mx-auto my-20 h-[2px]" />
      <Rent />
      <ClientsStories/>
    </>
  );
}
