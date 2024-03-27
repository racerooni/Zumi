import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function UserBtns() {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div>
        <Link href="/sign-in">
          <Button variant="secondary">Login</Button>
        </Link>{" "}
        or{" "}
      </div>
      <Button variant="secondary" className="border border-black/10">
        Register
      </Button>
    </div>
  );
}
