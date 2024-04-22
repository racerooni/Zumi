import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function UserBtns() {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div>
        <Link href="/sign-in">
          <Button variant="secondary">Bejelentkezés</Button>
        </Link>{" "}
        vagy{" "}
      </div>
      <Link href="/sign-up">
      <Button variant="secondary" className="border border-black/10">
        Regisztráció
      </Button>
      </Link>

    </div>
  );
}
