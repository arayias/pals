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
import { Textarea } from "@/components/ui/textarea";
import { serverRevalidatePath } from "@/app/actions";
import { postComment } from "@/app/blog/[slug]/actions";

const formSchema = z.object({
  content: z.string().min(10).max(1000),
});

type Props = {
  blogId: string;
};

export default function CreateBlogForm({ blogId }: Props) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    let comment = await postComment({ content: data.content, blogId });
    await serverRevalidatePath(`/blogs/${blogId}`, "page");
    form.reset();
    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 dark">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add a comment</FormLabel>
              <FormControl>
                <Textarea {...field} className="dark:bg-gray-900" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="hover:bg-green-400" type="submit">
          Post
        </Button>
      </form>
    </Form>
  );
}
