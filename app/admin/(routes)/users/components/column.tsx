"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: string;
  type: "User" | "Admin";
  email: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "type",
    header: "Jogosultság",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "id",
    header: "Azonosító",
  },
  {
    accessorKey: "actions",
    header: "Műveletek",
  },
];
