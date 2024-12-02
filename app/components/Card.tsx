import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import { FaStairs } from "react-icons/fa6";
import { LiaBathSolid, LiaBedSolid, LiaSquare } from "react-icons/lia";
export interface card {
  img: string;
  imgText: string;
  location: string;
  city: string;
  price: string;
  baths: number;
  beds: number;
  levels: number;
  sqft: number;
  id: number;
}
const Card = ({
  beds,
  baths,
  city,
  img,
  imgText,
  levels,
  location,
  price,
  sqft,
  id,
}: card) => {
  return (
    <div className="flex flex-col max-w-[350px] h-[500px] border shadow-lg ">
      <div className="w-full h-[200px] relative">
        <div className="w-1/4 h-[40px] flex justify-center items-center bg-red-800 absolute left-0 bottom-0 text-white tracking-widest">
          {imgText}
        </div>
        <Image
          className="w-full h-[200px] object-fill"
          src={img}
          alt="img"
          width={500}
          height={300}
        />
      </div>
      <div className="px-6 flex flex-col justify-between h-full pt-8 pb-4">
        <div className="leading-9 text-left ">
          <Link
            href={`/properties/${id}`}
            className="font-bold text-2xl  hover:text-red-700 transition-colors ease-in-out"
          >
            {location}
          </Link>
          <p className="text-slate-800 font-thin">{city}</p>
          <h3 className="font-semibold text-slate-800 text-xl">{price}</h3>
        </div>
        <Separator className="w-[75%] mx-auto" />
        <div className="flex justify-between mx-auto w-full text-slate-400">
          <div className="grid ">
            <LiaBedSolid size={30} />
            <p>Beds</p>
            <p className="text-black font-bold text-xl">{beds}</p>
          </div>
          <div className="grid">
            <LiaBathSolid size={30} />
            <p>Baths</p>
            <p className="text-black font-bold text-xl">{baths}</p>
          </div>
          <div className="grid">
            <LiaSquare size={30} />
            <p>Levels</p>
            <p className="text-black font-bold text-xl">{levels}</p>
          </div>
          <div className="grid">
            <FaStairs size={30} />
            <p>Sqft</p>
            <p className="text-black font-bold text-xl">{sqft}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
