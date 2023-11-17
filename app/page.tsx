'use client'

import {
  Form,
  FormControl,
  FormField, 
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import  Tiptap from "../components/tiptap" 
import * as z from "zod";


export default function Home() {

  const formSchema = z.object ({
    title: z.string()
    .min(5, {message: 'hey, the title is not long enough'})
    .max(100, {message: 'it`s too long'}),
    price: z.number()
    .min(3, {message: 'hey, the title is not long enough'})
    .max(100, {message: 'it`s too long'}),
  description: z.string()
    .min(5, {message: 'hey, the title is not long enough'})
    .max(100, {message: 'it`s too long'})
    .trim(), 
  });

  const form = useForm <z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode:'onChange',
    defaultValues: {
      title:' ',
      price: 29.99,
      description: ' ',
    }
  });

  function onSubmit(values:z.infer<typeof formSchema>){
    values.title
  }

  return (
    <main className="p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control}
          name="title"
          render={({field}) => (
            <FormItem>
              <FormLabel>Title</FormLabel>   
              <FormControl>
                  <Input placeholder="Main title for your product " {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />
           <FormField control={form.control}
          name="description"
          render={({field}) => (
            <FormItem>
              <FormLabel>Description</FormLabel>   
              <FormControl>
                 <Tiptap description={field.name} onChange={field.onChange} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />
              <Button className="bg-slate-900 text-white my-4">
                Submit
              </Button>
        </form>
      </Form>
    </main>
  )
}

