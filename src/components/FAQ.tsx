import Arrow from "../assets/icon-arrow.svg?react";
import faqData, { type faq } from "../assets/data/faq";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function FAQ() {
  const [faqArr, setFaqArr] = useState<faq[]>(faqData);
  const arrowRef = useRef<(SVGSVGElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setFaqArr((prev) =>
      prev.map((faq, i) => {
        if (i === index) {
          return { ...faq, toggle: !faq.toggle };
        } else {
          return faq;
        }
      }),
    );
  };

  useEffect(() => {
    faqArr.forEach((faq, index) => {
      gsap.to(arrowRef.current[index], {
        rotation: faq.toggle ? -180 : 0,
        duration: 0.3,
      });
    });
  }, [faqArr]);

  const faqElems = faqArr.map((faq, index) => {
    return (
      <div className="group border-b-1 border-gray-300 py-4" key={index}>
        <div
          className="flex cursor-pointer items-center justify-between text-sm text-gray-700 md:text-lg"
          onClick={() => {
            toggleFaq(index);
          }}
        >
          <h3 className="group-hover:text-custom-Red-400 text-left transition">
            {faq.title}
          </h3>
          <Arrow
            ref={(element) => {
              arrowRef.current[index] = element;
            }}
            className={`${faq.toggle ? "text-custom-Red-400" : "text-custom-Blue-600"}`}
          />
        </div>

        {faq.toggle && (
          <p className="py-4 text-left text-sm text-gray-500 md:text-lg">
            {faq.description}
          </p>
        )}
      </div>
    );
  });

  return (
    <>
      <section className="font-rubik mx-auto my-20 w-8/10 text-center md:mt-50">
        <h2 className="text-custom-Blue-950 text-2xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 md:text-lg">
          Here are some of our FAQs. If you have any other question you'd like
          answered please feel free to email us.
        </p>

        <div className="mx-auto my-8 md:w-8/10 md:max-w-xl">{faqElems}</div>

        <button className="bg-custom-Blue-600 my-8 rounded-md px-4 py-2 text-white">
          More Info
        </button>
      </section>
    </>
  );
}

export default FAQ;
