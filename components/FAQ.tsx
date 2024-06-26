"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What it is a Locale?",
    answer: <div className="space-y-2 leading-relaxed">Locale is our website name, offering comprehensive CV maker services tailored to create professional resumes efficiently and effectively. Create standout CVs with customizable templates, AI optimization, and seamless integration with online profiles like LinkedIn.</div>,
  },
  {
    question: "Is there any limit on the number of applications?",
    answer: (
      <p>
        No, there are no limits on the number of applications you can create using our CV maker service. You can create and customize as many resumes as needed to tailor them to different job applications and career opportunities.
      </p>
    ),
  },
  {
    question: "What is a variable in a email template?",
    answer: (
      <div className="space-y-2 leading-relaxed">In email templates, variables are placeholders that dynamically insert personalized information like names or company details for each recipient. They make emails more relevant and effective by tailoring content to individual recipients, boosting engagement and response rates.</div>
    ),
  },
  {
    question: "How can I disable sending emails?",
    answer: (
      <div className="space-y-2 leading-relaxed">If you want to pause your Locale for a couple of day find more details how you can do it</div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
