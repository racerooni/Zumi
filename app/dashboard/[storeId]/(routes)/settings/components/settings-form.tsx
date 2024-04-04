"use client";

import { store } from "@prisma/client";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";
import { ApiAlert } from "@/components/ui/api-alert";
import useOrigin from "@/hooks/use-origin";

interface SettingsFormProp {
  initialData: store;
}

//form validálás zod-al
const formSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormProp> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  // bolt frissítés kezelése
  const onSubmit = async (data: SettingsFormValues) => {
    try {
      setLoading(true);
      axios.patch(`/api/stores/${params.storeId}`, data);

      toast.success("Bolt frissítve.");
      router.refresh();
    } catch (error) {
      toast.error("Sikertelen művelet.");
    } finally {
      setLoading(false);
    }
  };

  // bolt törlés kezelése
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/stores/${params.storeId}`);
      router.refresh();
      router.push("/");
      toast.success("Bolt törölve.");
    } catch (error) {
      toast.error("Töröld ki az összes terméket a boltból.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const origin = useOrigin();

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
          title="Beállítások"
          description="Itt módosíthatja az eladásait"
        />
        <Button
          variant="destructive"
          disabled={loading}
          size="sm"
          onClick={() => setOpen(true)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>

      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Játék:</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Játék neve"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} type="submit">
            Beállítások mentése
          </Button>
        </form>
      </Form>
      <Separator />
    </>
  );
};

export default SettingsForm;
