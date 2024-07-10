"use client";

import type { User } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  user: User;
}

const formSchema = z.object({
  name: z.string().min(3).max(50),
  bio: z.string().max(255).optional(),
});

export default function ProfileForm({ user }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name ?? "Your name",
      bio: user.bio ?? "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const res = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 dark">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Your display name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                A short description about yourself
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="hover:bg-green-400" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
