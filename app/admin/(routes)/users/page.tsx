import { DataTable } from "./components/data-table";
import { User, columns } from "./components/column";
import prismadb from "@/lib/prismadb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

async function getData(): Promise<User[]> {
  const users = await prismadb.user.findMany();
  return users;
}

export default async function UsersPage() {
  const data = await getData();
  console.log(data);

  const users = await prismadb.user.findMany();
  console.log(users);
  return (
    <div className="flex flex-col h-screen">
      <DataTable columns={columns} data={data} />
      <div className="flex-grow"></div>
      <div className="flex justify-center mb-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#"></PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
