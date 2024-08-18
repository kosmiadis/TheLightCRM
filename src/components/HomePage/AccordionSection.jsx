import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionSection () {
    const faqData = [
        {
          title: 'What is a CRM?',
          text: 'A CRM (Customer Relationship Management) system is software designed to help businesses manage customer interactions, track sales, and streamline processes.'
        },
        {
          title: 'Why do businesses need a CRM?',
          text: 'CRMs centralize customer data, making it easier to track interactions, manage leads, and improve customer service, ultimately increasing sales and customer satisfaction.'
        },
        {
          title: 'What are the key features of a CRM?',
          text: 'Key features of a CRM include contact management, sales tracking, email marketing, reporting, and analytics. Advanced CRMs may also offer automation and AI-driven insights.'
        },
        {
          title: 'How can a CRM improve customer relationships?',
          text: 'A CRM helps businesses better understand customer needs by tracking interactions and preferences, allowing for more personalized and timely communication.'
        }
    ];

    return <section className="mt-8 mb-12">
        <h2 className="text-4xl font-bold underline mb-6">FAQ's</h2>
        <Accordion className="w-full flex flex-col gap-2" variant="splitted">
           {faqData.map(question => (
            <AccordionItem size='lg' key={question.title} aria-label={question.title} title={question.title}>
                <article className='p-4 pl-0 pt-0'>
                    <p className='text-[16px]'>{question.text}</p>
                </article>
            </AccordionItem>
           ))}
        </Accordion>
    </section>
}