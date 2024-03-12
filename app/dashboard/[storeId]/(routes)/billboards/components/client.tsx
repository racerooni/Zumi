"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";

interface BillboardClientProps {
  data: Billboard[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <Heading
            title={`Termékek: ${data?.length}`}
            description="Termékek kezelése"
          />
          <p className="text-gray-600 text-sm">Ahhoz, hogy szerkessz egy terméket, szimplán kattints a képre!</p>
        </div>

        <Button
          onClick={() => router.push(`/dashboard/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Hozzáadás
        </Button>
      </div>
      <Separator />
    </>
  );
};
