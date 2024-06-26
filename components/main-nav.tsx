"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
export function MainNav({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    //Főoldal navigalas
    {
      href: `/`,
      label: "Főoldal",
    },
    {
      href: `/dashboard/${params.storeId}/billboards`,
      label: "Termékeid",
      active: pathname === `/dashboard/${params.storeId}/billboard`,
    },
    //beállítások menube navigalas
    {
      href: `/dashboard/${params.storeId}/settings`,
      label: "Beállítások",
      active: pathname === `/dashboard/${params.storeId}/settings`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colros hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
