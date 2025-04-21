"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const enquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    destination: z.string().min(2, "Destination must be at least 2 characters"),
    message: z.string().optional(),
    male: z.string().regex(/^\d+$/, "Must be a number").optional(),
    female: z.string().regex(/^\d+$/, "Must be a number").optional(),
    child: z.string().regex(/^\d+$/, "Must be a number").optional(),
  });

type EnquiryFormValues = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  onSubmitSuccess?: () => void; // Optional callback for closing sheet or other actions
}

export function EnquiryForm({ onSubmitSuccess }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
        name: "",
        email: "",
        destination: "",
        message: "",
        male: "",
        female: "",
        child: "",
      },
  });

  async function onSubmit(values: EnquiryFormValues) {
    try {
      setIsSubmitting(true);
      // TODO: Implement form submission (e.g., send to API)
      console.log(values);
      toast.success("Enquiry sent successfully");
      form.reset();
      if (onSubmitSuccess) onSubmitSuccess(); // Call callback if provided
    } catch (error) {
      toast.error("Failed to send enquiry");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
  control={form.control}
  name="destination"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Package Destination</FormLabel>
      <FormControl>
        <Input placeholder="e.g., Himachal, Bali, Switzerland..." {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

        <FormField
          control={form.control}
          name="male"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Male Travelers</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Number of males" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="female"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Female Travelers</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Number of females" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="child"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Children</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Number of children" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>
      </form>
    </Form>
  );
}