import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-[#3C3D37]">
      <MotionDiv
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <MotionHeading
          className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-12"
          variants={fadeIn}
        >
          Get in Touch
        </MotionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MotionDiv variants={fadeIn} className="space-y-6">
            <p className="font-['Raleway'] text-lg">
              Let's work together! Feel free to reach out for collaborations or just a friendly hello.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-[#697565] hover:text-[#ECDFCC] transition-colors"
              >
                📧 hello@example.com
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#697565] hover:text-[#ECDFCC] transition-colors"
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#697565] hover:text-[#ECDFCC] transition-colors"
              >
                💻 GitHub
              </a>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
