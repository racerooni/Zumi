"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { useParams } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";
interface navbarprops {
  userId: string;
}

const NavbarResponsive: React.FC<navbarprops> = ({ userId }) => {
  const params = useParams();
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950 shadow">
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link className="hover:underline" href="/">
          Főoldal
        </Link>
        <Link
          className="hover:underline"
          href={`/dashboard/${params.storeId}/billboards`}
        >
          Termékeim
        </Link>
        <Link
          className="hover:underline"
          href={`/dashboard/${params.storeId}/settings`}
        >
          Bolt beállításai
        </Link>
        <Link className="hover:underline" href={`/dashboard/user/${userId}`}>
          Profilom szerkesztése
        </Link>
        <UserButton afterSignOutUrl="/" />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only"></span>
          </Button>
        </SheetTrigger>
        <SheetContent className="md:hidden" side="right">
          <div className="grid gap-4 p-4">
            <UserButton afterSignOutUrl="/" />
            <Link className="hover:underline" href="/">
              Főoldal
            </Link>
            <Link
              className="hover:underline"
              href={`/dashboard/${params.storeId}/billboards`}
            >
              Termékeim
            </Link>
            <Link
              className="hover:underline"
              href={`/dashboard/${params.storeId}/settings`}
            >
              Bolt beállításai
            </Link>
            <Link
              className="hover:underline"
              href={`/dashboard/user/${userId}`}
            >
              Profilom szerkesztése
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default NavbarResponsive;
