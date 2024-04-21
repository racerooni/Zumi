"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FormLabel } from "@mui/material";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";

const formSchema = z.object({
  name: z.string().min(1),
  phoneNumber: z.string().min(2),
  city: z.string().min(1),
  email: z.string().min(1),
});

export const UserForm = () => {
  const [isFilled, setIsFilled] = useState(true);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const userId = params.userId;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      city: "",
      email: "",
    },
  });

  const checkUser = async () => {
    const response = await axios.get(`/api/user/${params.userId}`);
    const user = response.data;
    console.log(user);
  };

  console.log(!checkUser());
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/user/${params.userId}`, values);
      window.location.assign(`${response.data.id}`);
      toast.success("Beállítások mentése sikerult!");
    } catch (error) {
      toast.error("Hiba történt!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="space-y-8 space-x-4 py-2 ms-4 pb-4 w-[25rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <p>Név</p>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Bolt neve"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefonszám</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="+36 (30) 123 4567"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Város</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Város neve..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail cím</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="E-mail cím..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-start w-full">
              <Button type="submit" disabled={isFilled}>
                Mentés
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
