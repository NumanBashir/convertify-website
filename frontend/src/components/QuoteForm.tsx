/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Send } from "lucide-react";
import { Question, QuoteFormSettings } from "../types";

type QuoteAnswer = string | string[];
type QuoteQuestion = Question & {
  multiple?: boolean;
  exclusiveOption?: string;
};

const QUOTE_QUESTIONS: QuoteQuestion[] = [
  {
    id: "goal",
    text: "What do you need help with?",
    options: [
      "New website",
      "Website redesign",
      "Landing page",
      "CMS setup",
      "Not sure yet",
    ],
  },
  {
    id: "type",
    text: "What type of business do you run?",
    options: [
      "Local service",
      "Restaurant/Café",
      "Shop/Ecommerce",
      "Consultant",
      "SaaS/Startup",
      "Other",
    ],
  },
  {
    id: "main-goal",
    text: "What is the main goal?",
    options: [
      "More enquiries",
      "Take bookings",
      "Look more professional",
      "Sell products",
      "Clearer services",
    ],
  },
  {
    id: "pages",
    text: "How many pages do you think you need?",
    options: [
      "1-page landing",
      "2–5 pages",
      "6–10 pages",
      "10+ pages",
      "Not sure yet",
    ],
  },
  {
    id: "features",
    text: "Any extra features needed?",
    multiple: true,
    exclusiveOption: "Not sure yet",
    options: [
      "Contact form",
      "Booking form",
      "CMS/Blog",
      "Gallery",
      "Ecommerce",
      "Not sure yet",
    ],
  },
  {
    id: "readiness",
    text: "Do you have content ready?",
    options: ["Yes, everything", "Partly", "No, I need help"],
  },
  {
    id: "timeline",
    text: "When would you like to start?",
    options: ["As soon as possible", "Within 1–2 months", "Just exploring"],
  },
];

interface QuoteFormProps {
  settings: QuoteFormSettings;
}

export default function QuoteForm({ settings }: QuoteFormProps) {
  const [formspreeState, submitToFormspree] = useForm("mzdoaezy");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, QuoteAnswer>>({});
  const [contactData, setContactData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFinalStep = currentStep === QUOTE_QUESTIONS.length;
  const currentQuestion = QUOTE_QUESTIONS[currentStep];

  const formatAnswer = (answer?: QuoteAnswer) =>
    Array.isArray(answer) ? answer.join(", ") : answer || "";

  const hasAnswer = (question: QuoteQuestion) => {
    const answer = answers[question.id];
    return Array.isArray(answer) ? answer.length > 0 : Boolean(answer);
  };

  const isOptionSelected = (question: QuoteQuestion, option: string) => {
    const answer = answers[question.id];
    return Array.isArray(answer) ? answer.includes(option) : answer === option;
  };

  const handleOptionSelect = (question: QuoteQuestion, option: string) => {
    if (question.multiple) {
      setAnswers((currentAnswers) => {
        const currentAnswer = currentAnswers[question.id];
        const selectedOptions = Array.isArray(currentAnswer)
          ? currentAnswer
          : currentAnswer
            ? [currentAnswer]
            : [];
        const isExclusive = option === question.exclusiveOption;
        const nextOptions = isExclusive
          ? [option]
          : selectedOptions.includes(option)
            ? selectedOptions.filter(
                (selectedOption) => selectedOption !== option,
              )
            : [
                ...selectedOptions.filter(
                  (selectedOption) =>
                    selectedOption !== question.exclusiveOption,
                ),
                option,
              ];

        return {
          ...currentAnswers,
          [question.id]: nextOptions,
        };
      });
      return;
    }

    setAnswers({ ...answers, [question.id]: option });
    if (currentStep < QUOTE_QUESTIONS.length) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const selectedAnswers = QUOTE_QUESTIONS.map((question) => ({
    question: question.text,
    answer: formatAnswer(answers[question.id]),
  }));

  const answerSummary = selectedAnswers
    .map((item) => `${item.question}: ${item.answer || "Not answered"}`)
    .join("\n");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitToFormspree(e);
  };

  React.useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSubmitted(true);
    }
  }, [formspreeState.succeeded]);

  return (
    <section id="quote" className="py-24 bg-brand-depth relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            {settings.formHeadline}
          </h2>
          <p className="text-brand-beige/60">{settings.formSupportingText}</p>
        </div>

        <div className="glass-card rounded-[32px] overflow-hidden min-h-[550px] flex flex-col relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-brand-gold to-blue-500 opacity-20 blur rounded-[32px]"></div>

          <div className="relative bg-[#0D1631] flex-grow flex flex-col">
            {/* Progress Bar */}
            <div className="h-1.5 bg-white/5 w-full">
              <motion.div
                className="h-full bg-brand-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]"
                initial={{ width: 0 }}
                animate={{
                  width: `${(currentStep / (QUOTE_QUESTIONS.length + 1)) * 100}%`,
                }}
              />
            </div>

            <div className="p-8 md:p-14 flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <>
                    {!isFinalStep ? (
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-10"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">
                            Step {String(currentStep + 1).padStart(2, "0")}/
                            {String(QUOTE_QUESTIONS.length + 1).padStart(
                              2,
                              "0",
                            )}
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold !text-white leading-tight">
                          {currentQuestion.text}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          {currentQuestion.options.map((option) => (
                            <button
                              key={option}
                              onClick={() =>
                                handleOptionSelect(currentQuestion, option)
                              }
                              className={`p-6 rounded-xl border transition-all duration-300 group flex items-center justify-between ${
                                isOptionSelected(currentQuestion, option)
                                  ? "border-brand-gold bg-brand-gold/10"
                                  : "border-white/10 bg-white/5 hover:border-brand-gold/50 hover:bg-brand-gold/10"
                              }`}
                            >
                              <span
                                className={`font-bold text-lg transition-colors ${isOptionSelected(currentQuestion, option) ? "text-brand-gold" : "text-brand-beige"}`}
                              >
                                {option}
                              </span>
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                  isOptionSelected(currentQuestion, option)
                                    ? "bg-brand-gold border-brand-gold shadow-[0_0_8px_rgba(197,160,89,0.4)]"
                                    : "border-white/20 group-hover:border-brand-gold"
                                }`}
                              >
                                {isOptionSelected(currentQuestion, option) && (
                                  <Check
                                    size={14}
                                    className="text-brand-navy"
                                    strokeWidth={4}
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                          <button
                            onClick={() =>
                              currentStep < QUOTE_QUESTIONS.length &&
                              setCurrentStep(currentStep + 1)
                            }
                            disabled={!hasAnswer(currentQuestion)}
                            className={`btn-primary px-10 py-4 flex items-center gap-3 disabled:opacity-30 disabled:pointer-events-none`}
                          >
                            Next Question
                            <ArrowRight size={18} />
                          </button>

                          {currentStep > 0 && (
                            <button
                              onClick={() => setCurrentStep(currentStep - 1)}
                              className="text-white/40 hover:text-brand-gold transition-colors text-xs font-black uppercase tracking-widest"
                            >
                              Go back
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-10"
                      >
                        <div className="space-y-4">
                          <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">
                            Final Step
                          </span>
                          <h3 className="text-3xl md:text-4xl font-bold !text-white leading-tight">
                            Great! Where should we send the estimate?
                          </h3>
                        </div>

                        <form
                          onSubmit={handleContactSubmit}
                          className="space-y-8"
                        >
                          <input
                            type="hidden"
                            name="form_name"
                            value="Convertify Quote Request"
                          />
                          <input
                            type="hidden"
                            name="subject"
                            value="New Convertify quote request"
                          />
                          <input
                            type="hidden"
                            name="questionnaire_summary"
                            value={answerSummary}
                          />
                          {selectedAnswers.map((item, index) => (
                            <React.Fragment key={item.question}>
                              <input
                                type="hidden"
                                name={`question_${index + 1}`}
                                value={item.question}
                              />
                              <input
                                type="hidden"
                                name={`answer_${index + 1}`}
                                value={item.answer}
                              />
                            </React.Fragment>
                          ))}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <label
                                htmlFor="quote-name"
                                className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]"
                              >
                                Navn*
                              </label>
                              <input
                                id="quote-name"
                                name="name"
                                required
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10"
                                placeholder="Name"
                                value={contactData.name}
                                onChange={(e) =>
                                  setContactData({
                                    ...contactData,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="space-y-3">
                              <label
                                htmlFor="quote-company"
                                className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]"
                              >
                                Firma*
                              </label>
                              <input
                                id="quote-company"
                                name="company"
                                required
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10"
                                placeholder="Company Name"
                                value={contactData.company}
                                onChange={(e) =>
                                  setContactData({
                                    ...contactData,
                                    company: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="space-y-3">
                              <label
                                htmlFor="quote-email"
                                className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]"
                              >
                                E-mail*
                              </label>
                              <input
                                id="quote-email"
                                name="email"
                                required
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10"
                                placeholder="your@mail.com"
                                value={contactData.email}
                                onChange={(e) =>
                                  setContactData({
                                    ...contactData,
                                    email: e.target.value,
                                  })
                                }
                              />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={formspreeState.errors}
                                className="text-sm font-bold text-red-300"
                              />
                            </div>
                            <div className="space-y-3">
                              <label
                                htmlFor="quote-phone"
                                className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]"
                              >
                                Telefon*
                              </label>
                              <input
                                id="quote-phone"
                                name="phone"
                                required
                                type="tel"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10"
                                placeholder="+45 12 34 56 78"
                                value={contactData.phone}
                                onChange={(e) =>
                                  setContactData({
                                    ...contactData,
                                    phone: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <label
                              htmlFor="quote-message"
                              className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]"
                            >
                              Kort besked (valgfri)
                            </label>
                            <textarea
                              id="quote-message"
                              name="message"
                              rows={3}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10 resize-none"
                              placeholder="Tell us about your project..."
                              value={contactData.message}
                              onChange={(e) =>
                                setContactData({
                                  ...contactData,
                                  message: e.target.value,
                                })
                              }
                            ></textarea>
                            <ValidationError
                              prefix="Message"
                              field="message"
                              errors={formspreeState.errors}
                              className="text-sm font-bold text-red-300"
                            />
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <h4 className="mb-5 text-xl font-bold !text-white">
                              You have chosen:
                            </h4>
                            <dl className="space-y-4">
                              {selectedAnswers.map((item) => (
                                <div
                                  key={item.question}
                                  className="grid gap-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-6"
                                >
                                  <dt className="text-sm font-bold text-brand-beige/50">
                                    {item.question}:
                                  </dt>
                                  <dd className="text-sm font-bold text-brand-gold">
                                    {item.answer || "Not answered"}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>

                          <ValidationError
                            errors={formspreeState.errors}
                            className="text-sm font-bold text-red-300"
                          />

                          <div className="pt-6 flex flex-col md:flex-row items-center gap-10">
                            <button
                              type="submit"
                              disabled={formspreeState.submitting}
                              className="btn-primary flex items-center justify-center gap-3 min-w-[240px] disabled:opacity-50 disabled:pointer-events-none"
                            >
                              {formspreeState.submitting
                                ? "Sending..."
                                : "Send Request"}
                              <Send size={18} />
                            </button>
                            <button
                              type="button"
                              onClick={() => setCurrentStep(currentStep - 1)}
                              className="text-white/40 hover:text-brand-gold transition-colors text-xs font-black uppercase tracking-widest"
                            >
                              Review answers
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-brand-gold rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(197,160,89,0.3)] rotate-3">
                      <Check
                        size={48}
                        className="text-brand-navy"
                        strokeWidth={4}
                      />
                    </div>
                    <h3 className="text-4xl font-bold !text-white">
                      Estimate request sent!
                    </h3>
                    <p className="text-xl text-white/60 max-w-sm mx-auto leading-relaxed">
                      Thanks for the details, {contactData.name.split(" ")[0]}!{" "}
                      {settings.successMessage}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setCurrentStep(0);
                        setAnswers({});
                      }}
                      className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs pt-8 hover:tracking-[0.4em] transition-all"
                    >
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-white/5 p-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-10 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
              {settings.trustText.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-brand-gold" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
