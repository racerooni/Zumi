import bg from "@/public/26292.jpg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex items-center justify-center h-full w-full relative`}>
      <img src={bg.src} alt="" className="absolute w-full h-screen blur-sm" />
      <div className="shadow-xl shadow-black border-2 border-black/20">
        {children}
      </div>
    </div>
  );
}
