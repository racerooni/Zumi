import { DataTable } from "./components/data-table";
import { User, columns } from "./components/column";

async function getData(): Promise<User[]> {
  return [
    {
      id: "728ed52f",
      type: "User",
      email: "xdxdxd@asd.com",
    },
    {
      id: "728ed52f",
      type: "User",
      email: "xdxdxd@asd.com",
    },
    {
      id: "728ed52f",
      type: "User",
      email: "xdxdxd@asd.com",
    },
    {
      id: "728ed52f",
      type: "User",
      email: "xdxdxd@asd.com",
    },
    {
      id: "728ed52f",
      type: "User",
      email: "xdxdxd@asd.com",
    },
  ];
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
