import bg from "@/public/bg.jpg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex items-center justify-end h-full w-full relative`}>
      <img src={bg.src} alt="" className="absolute w-full h-screen blur-sm" />
      <div className="absolute w-[30rem] h-screen bg-gray-100 border border-black/10"></div>
      {children}
    </div>
  );
}
