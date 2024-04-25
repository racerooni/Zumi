"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: string;
  type: string;
  email: string;
  city: string;
  name: string;
  phoneNumber: string;
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
