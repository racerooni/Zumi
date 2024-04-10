"use client";

import * as z from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Copy, Trash } from "lucide-react";
import { User } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { AlertModal } from "@/components/modals/alert-modal";
import ImageUpload from "@/components/ui/image-upload";
import prismadb from "@/lib/prismadb";
import getUserAuth from "@/lib/getUserAuth";

const formSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  city: z.string().min(1),
  phoneNumber: z.string().min(1),
  email: z.string().min(1),
});

type BillboardFormValues = z.infer<typeof formSchema>;

interface UserPageProps {
  initialData: User | null;
}

export const UserPage: React.FC<UserPageProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const userId = params.userId;
  console.log(userId);

  const onSubmit = async (data: BillboardFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/billboards/${params.billboardId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.storeId}/billboards`, data);
      }
      router.refresh();
      setTimeout(() => {
        router.push(`/dashboard/${params.storeId}/billboards`);
      }, 500);

      toast.success("Sikeres módosítás!");
    } catch (error: any) {
      toast.error("Hiba történt.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `/api/${params.storeId}/billboards/${params.billboardId}`
      );
      router.refresh();
      setTimeout(() => {
        router.push(`/dashboard/${params.storeId}/billboards`);
        toast.success("Termék törölve.");
      }, 500);
    } catch (error: any) {
      toast.error("Az összes kategóriát törölni kell.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      id: userId + "",
      name: "",
      city: "",
      phoneNumber: "",
      email: "",
    },
  });

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading
          title={"Felhasználói adatok módosítása!"}
          description={"Ezen az oldalon módosíthatód az adataidat!"}
        />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full bg-blue-200"
        >
          <div className="flex flex-col p-2 space-y-2">
            <FormLabel>Felhasználói azonosító</FormLabel>
            <div className="flex items-center w-1/3 space-x-2">
              <Input disabled placeholder={`${userId}`} />
              <Copy
                onClick={() => {
                  navigator.clipboard.writeText(`${userId}`);
                  toast.success("Vágólapra másolva!");
                }}
                className="h-10 w-10
                 cursor-pointer"
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Felhasználónév</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Új felhasználónév.." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Mentés</Button>
        </form>
      </Form>
    </>
  );
};

export default UserPage;
