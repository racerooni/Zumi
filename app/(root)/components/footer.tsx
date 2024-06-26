import { Facebook, Instagram, Settings, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="min-h-[12rem] bg-yellow-500 flex justify-center w-full mt-4 relative">
      <div className="flex flex-col md:flex-row w-2/3 justify-center gap-8 md:gap-24 items-center divide-y-2 md:divide-y-0 md:divide-x-2">
        <div className="text-6xl font-bold text-white">Zümi</div>
        <div className="text-white text-xl flex flex-col gap-4 ps-4">
          <p className="text-center">
            Kövess minket a közösségi oldalainkon is!
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="border-2 h-12 w-12 flex justify-center items-center rounded-full border-white mb-4 md:mb-0">
              <Facebook className="w-8 h-8" />
            </div>
            <div className="border-2 h-12 w-12 flex justify-center items-center rounded-full border-white">
              <Twitter className="w-8 h-8" />
            </div>
            <div className="border-2 h-12 w-12 flex justify-center items-center rounded-full border-white">
              <Instagram className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"/admin"}
        className="bottom-2 left-2 absolute flex justify-center items-center gap-2"
      >
        Admin Panel <Settings className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default Footer;
