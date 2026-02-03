import React, { useState } from 'react';

// Added key and made children optional to fix list rendering type errors.
interface AccordionItemProps {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  key?: React.Key;
}

/**
 * A single accordion item that can be expanded or collapsed.
 */
function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 transition-all hover:underline"
        onClick={onClick}
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
}

/**
 * Accordion component that manages the open/close state of multiple items.
 */
export function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}