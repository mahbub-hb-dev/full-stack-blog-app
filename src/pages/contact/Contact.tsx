import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
  full_name: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(50, { message: "Full name must be less than 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Full name can only contain letters and spaces." }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please enter a valid email address." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email must be less than 100 characters." }),

  phone: z
    .string()
    .trim()
    .regex(/^\+?\d{10,15}$/, {
      message: "Phone number must be 10–15 digits (can start with +).",
    }),

  message: z
  .string()
  .min(2, { message: "Full name must be at least 2 characters long." })
  .max(180, { message: "Full name must be less than 180 characters." })
  // .regex(/^[a-zA-Z\s]+$/, { message: "Full name can only contain letters and spaces." }),
});


const Contact = () => {

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email : "",
      phone : "",
      message : ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    toast.success("Thanks for your message");
    form.reset();
  }

  return (
    <div className=" w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
        <div className="text-center max-w-3xl">
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                Contact Us
            </h1>

            <div className="container mx-auto my-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
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
                        <FormLabel> Email </FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> Phone Number </FormLabel>
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} />
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
                        <FormLabel> Your Message </FormLabel>
                        <FormControl>
                          <Textarea placeholder="Write your message..." {...field} />
                        </FormControl>
                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-full" type="submit">Send message</Button>
                </form>
              </Form>
            </div>

        </div>
    </div> 
  )
}

export default Contact
