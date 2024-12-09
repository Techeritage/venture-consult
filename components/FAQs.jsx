import { Sparkle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";

const FAQs = () => {
  return (
    <section className="sectionStyle border-t-2 border-black bg-secondaryBg !text-black">
      <div className="flex items-center gap-3">
        <Sparkle fill="#000" size={18} />
        <h2>FAQs</h2>
      </div>
      <h1 className="max-w-[80%] mt-4">Frequently Asked Questions</h1>
      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base max-w-[80%] md:max-w-[50%] text-opacity-90">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
