import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="w-full py-16 mb-10 bg-soft-gray">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg p-2">
            <AccordionTrigger className="text-lg hover:no-underline">
              What can I expect in my first therapy session?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-gray">
              Your first session is primarily about getting to know each other.
              We will discuss what brings you to therapy, your background, and
              your goals. It is also an opportunity for you to ask questions and
              ensure you feel comfortable with the therapeutic process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg p-2">
            <AccordionTrigger className="text-lg hover:no-underline">
              How long does each therapy session last?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-gray">
              Standard therapy sessions typically last 50 minutes. However,
              initial consultations might be longer to allow time for a thorough
              assessment of your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg p-2">
            <AccordionTrigger className="text-lg hover:no-underline">
              Is everything I share confidential?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-gray">
              Yes, everything discussed in therapy is strictly confidential. The
              only exceptions are situations where there is a risk of harm to
              yourself or others, or in cases of court orders, which we would
              discuss with you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg p-2">
            <AccordionTrigger className="text-lg hover:no-underline">
              Do you offer online therapy sessions?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-gray">
              Yes, we offer secure online therapy sessions through a
              HIPAA-compliant platform. This option provides flexibility and
              accessibility while maintaining the same quality of care as
              in-person sessions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
