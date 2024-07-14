"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

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
import { Textarea } from "@/components/ui/textarea";
import { serverRevalidatePath } from "@/app/actions";
import { editBlog } from "@/app/blog/[slug]/actions";

const formSchema = z.object({
  title: z.string().min(3).max(50),
  content: z.string().min(10).max(1000),
});

type BlogFormProps = {
  params?: {
    title?: string;
    content?: string;
    id?: string;
  };
};

export default function BlogForm({ params }: BlogFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: params?.title ?? "",
      content: params?.content ?? "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (params?.id) {
      await edit(data);
    } else {
      await post(data);
    }
  }

  async function edit(data: z.infer<typeof formSchema>) {
    await editBlog({ ...data, id: params?.id! });
    await serverRevalidatePath("/blogs/page/[page]", "page");
    router.push(`/blog/${params?.id}`);
  }

  async function post(data: z.infer<typeof formSchema>) {
    await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(data),
    });
    await serverRevalidatePath("/blogs/page/[page]", "page");
    router.push("/blogs/page/0");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Your blog's title!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>Your blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="hover:bg-green-400 dark" type="submit">
          {params?.id ? "Update" : "Post"}
        </Button>
      </form>
    </Form>
  );
}
