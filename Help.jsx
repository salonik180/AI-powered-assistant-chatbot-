import React, { useState } from "react";
import "./Help.css";

const Help = () => {
  const faqs = [
    {
      question: "How do I reset my portal password?",
      answer: "Visit the ICT Help Desk or click the 'Forgot Password' link on the student portal."
    },
    {
      question: "Can I access the AI chatbot offline?",
      answer: "No, the chatbot requires an active internet connection to function."
    },
    {
      question: "Who can I contact for technical issues?",
      answer: "Reach out to the ICT support team via email or phone. They are available 9 AM – 5 PM."
    },
    {
      question: "How can I check my exam timetable?",
      answer: "Log in to the student portal and click on 'Examinations' to view your timetable."
    },
    {
      question: "Where can I find academic results?",
      answer: "Academic results are available on your portal under the 'Results' section."
    },
    {
      question: "How do I register for courses?",
      answer: "Course registration can be done via the portal at the start of each semester. Contact the registrar for assistance if needed."
    },
    {
      question: "How do I apply for graduation?",
      answer: "Graduation applications are submitted online via the student portal, following the instructions provided by the academic office."
    },
    {
      question: "How do I participate in student elections?",
      answer: "Student elections (TUSA) details are announced on the university website and social media. Eligible students can vote online or at designated polling stations."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="help-page">
      <h2 className="help-title"> Help & Support</h2>

      {/* Contact Info */}
      <div className="help-section contact">
        <h3>Contact Us</h3>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-icon"></span>
            <div>
              <p className="contact-type">Email</p>
              <p className="contact-info">support@tharakauniversity.ac.ke</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon"></span>
            <div>
              <p className="contact-type">Phone</p>
              <p className="contact-info">+254 700 123 456</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon"></span>
            <div>
              <p className="contact-type">Office</p>
              <p className="contact-info">ICT Department, Tharaka University</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="help-section faqs">
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openFAQ === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <p className="faq-question"> {faq.question}</p>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
