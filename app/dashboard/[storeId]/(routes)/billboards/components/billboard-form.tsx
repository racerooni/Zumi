"use client";

import * as z from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Trash } from "lucide-react";
import { Categories, Products, Condition } from "@prisma/client";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
  price: z.coerce.number().min(1),
  category: z.string(),
  description: z.string().min(1),
  condition: z.string(),
});

type BillboardFormValues = z.infer<typeof formSchema>;

interface BillboardFormProps {
  initialData: Products | null;
  Categories: Categories[];
  Condition: Condition[];
}

export const BillboardForm: React.FC<BillboardFormProps> = ({
  initialData,
  Categories,
  Condition,
}) => {
  const params = useParams();
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData
    ? "Szerkeszd a termék nevét!"
    : "Hozd létre a termék oldalát!";
  const description = initialData
    ? "Szerkeszd a terméket."
    : "Adj hozzá egy új terméket.";
  const toastMessage = initialData ? "Termék frissítve." : "Termék hozzáadva.";
  const action = initialData ? "Mentés" : "Kész";

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      label: "",
      imageUrl: "",
      price: 0,
      category: "",
      description: category,
      condition: "",
    },
  });

  const onSubmit = async (data: BillboardFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/billboards/${params.billboardId}`,
          data
        );
        console.log(data);
      } else {
        await axios.post(`/api/${params.storeId}/billboards`, data);
      }
      router.refresh();
      setTimeout(() => {
        router.push(`/dashboard/${params.storeId}/billboards`);
      }, 500);

      toast.success(toastMessage);
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

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between ">
        <Heading title={title} description={description} />
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Háttérkép</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Név</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Termék neve"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ár</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Termék ára"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategória</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={category}
                      onValueChange={(selectedValue) => {
                        field.onChange(selectedValue);
                        setCategory(selectedValue);
                      }}
                    >
                      <SelectTrigger className="w-[250px]">
                        <SelectValue placeholder="Válassz egy kategóriát!" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {Categories.map((c) => (
                            <SelectItem key={c.id} value={c.id}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leírás</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="Termék neve"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Állapot</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={condition}
                      onValueChange={(selectedValue) => {
                        field.onChange(selectedValue);
                        setCategory(selectedValue);
                      }}
                    >
                      <SelectTrigger className="w-[250px]">
                        <SelectValue placeholder="Válassz egy kategóriát!" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {Condition.map((c) => (
                            <SelectItem key={c.id} value={c.id}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto mt-2" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
