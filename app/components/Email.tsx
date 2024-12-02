"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "LastName must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "This field has to be filled.",
    })
    .email("This is not a valid email"),
  message: z
    .string()
    .min(1, {
      message: "This field has to be filled.",
    })
    .max(255),
  interestedIn: z.enum(["Buy", "Rent", "Other"], {
    required_error: "You need to select.",
  }),
});

export default function Email() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit() {
    toast({
      title: "An email has been sent",
    });
  }

  return (
    <section className="w-full bg-slate-700 text-white py-5 px-5 mt-20">
      <h1 className="tracking-widest text-center text-xl font-thin lg:text-2xl mb-9 mt-5">
        CONTACT US
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-3xl space-y-8 mx-auto"
        >
          <div className="flex justify-between gap-5 w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="text-lg">First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name...." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="text-lg">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name...." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestedIn"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-lg">Intersted in</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex justify-between"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Buy" className="border-white" />
                      </FormControl>
                      <FormLabel className="font-normal text-lg">Buy</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Rent" className="border-white" />
                      </FormControl>
                      <FormLabel className="font-normal text-lg">
                        Rent
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="Other"
                          className="border-white"
                        />
                      </FormControl>
                      <FormLabel className="font-normal text-lg">
                        Other
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
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
                <FormLabel className="text-lg">Message</FormLabel>
                <FormControl>
                  <Input placeholder="Write your message...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full transition-colors ease-in-out mt-16 bg-red-700 hover:bg-red-500 font-bold py-4 rounded-md px-5 tracking-wide text-lg  "
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
