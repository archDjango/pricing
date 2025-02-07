import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    { q: "What is HBO Max?", a: "HBO Max is a premium streaming platform with HBO originals, movies, and TV shows." },
    { q: "Can I download movies?", a: "Yes, with the Standard and Premium plans, you can download content." },
    { q: "Does HBO Max support 4K?", a: "Yes, the Standard and Premium plans support 4K HDR streaming." },
  ];

  return (
    <div className="faq-section">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.q} answer={faq.a} />
      ))}
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <h5>{question}</h5>
      {open && <p>{answer}</p>}
    </div>
  );
}
