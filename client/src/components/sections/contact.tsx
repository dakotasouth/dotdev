import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionHeading, fadeIn, stagger } from "../ui/motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    // Handle form submission
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16 bg-[#3C3D37] relative"
    >
      <MotionDiv
        className="max-w-6xl mx-auto w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <MotionHeading
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={fadeIn}
        >
          Reach Out!
        </MotionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MotionDiv variants={fadeIn} className="space-y-6 relative z-10">
            <p className="text-lg">
              Let's work together! Feel free to reach out for collaborations or
              just a friendly hello.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:southd20@gmail.com"
                className="inline-flex items-center gap-2 text-[#697565] hover:text-[#ECDFCC] transition-colors"
              >
                <span className="text-xl">📧</span>
                <span>southd20@gmail.com</span>
              </a>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://www.linkedin.com/in/dakota-south/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#697565] hover:text-[#ECDFCC] transition-colors"
                >
                  <span className="text-xl">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/dakotasouth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#697565] hover:text-[#ECDFCC] transition-colors"
                >
                  <span className="text-xl">💻</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                        <Input placeholder="Your email" {...field} />
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
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#697565] hover:bg-[#181C14] transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  );
}