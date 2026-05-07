/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Send } from "lucide-react";
import { QUOTE_QUESTIONS } from "../constants";
import { QuoteFormSettings } from "../types";

interface QuoteFormProps {
  settings: QuoteFormSettings;
}

export default function QuoteForm({ settings }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFinalStep = currentStep === QUOTE_QUESTIONS.length;

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers({ ...answers, [questionId]: option });
    if (currentStep < QUOTE_QUESTIONS.length) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote Request:", { ...answers, ...contactData });
    setIsSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 bg-brand-depth relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            {settings.formHeadline}
          </h2>
          <p className="text-brand-beige/60">
            {settings.formSupportingText}
          </p>
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
                          {QUOTE_QUESTIONS[currentStep].text}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          {QUOTE_QUESTIONS[currentStep].options.map(
                            (option) => (
                              <button
                                key={option}
                                onClick={() =>
                                  handleOptionSelect(
                                    QUOTE_QUESTIONS[currentStep].id,
                                    option,
                                  )
                                }
                                className={`p-6 rounded-xl border transition-all duration-300 group flex items-center justify-between ${
                                  answers[QUOTE_QUESTIONS[currentStep].id] ===
                                  option
                                    ? "border-brand-gold bg-brand-gold/10"
                                    : "border-white/10 bg-white/5 hover:border-brand-gold/50 hover:bg-brand-gold/10"
                                }`}
                              >
                                <span
                                  className={`font-bold text-lg transition-colors ${answers[QUOTE_QUESTIONS[currentStep].id] === option ? "text-brand-gold" : "text-brand-beige"}`}
                                >
                                  {option}
                                </span>
                                <div
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                    answers[QUOTE_QUESTIONS[currentStep].id] ===
                                    option
                                      ? "bg-brand-gold border-brand-gold shadow-[0_0_8px_rgba(197,160,89,0.4)]"
                                      : "border-white/20 group-hover:border-brand-gold"
                                  }`}
                                >
                                  {answers[QUOTE_QUESTIONS[currentStep].id] ===
                                    option && (
                                    <Check
                                      size={14}
                                      className="text-brand-navy"
                                      strokeWidth={4}
                                    />
                                  )}
                                </div>
                              </button>
                            ),
                          )}
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                          <button
                            onClick={() =>
                              currentStep < QUOTE_QUESTIONS.length &&
                              setCurrentStep(currentStep + 1)
                            }
                            disabled={!answers[QUOTE_QUESTIONS[currentStep].id]}
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
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                                Your Name
                              </label>
                              <input
                                required
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10"
                                placeholder="Numan Bashir"
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
                              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                                Email Address
                              </label>
                              <input
                                required
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10"
                                placeholder="hello@convertify.com"
                                value={contactData.email}
                                onChange={(e) =>
                                  setContactData({
                                    ...contactData,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                              Short message (Optional)
                            </label>
                            <textarea
                              rows={3}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-gold transition-all text-white placeholder:text-white/10 resize-none"
                              placeholder="Tell us a bit more about your project..."
                              value={contactData.message}
                              onChange={(e) =>
                                setContactData({
                                  ...contactData,
                                  message: e.target.value,
                                })
                              }
                            ></textarea>
                          </div>

                          <div className="pt-6 flex flex-col md:flex-row items-center gap-10">
                            <button
                              type="submit"
                              className="btn-primary flex items-center justify-center gap-3 min-w-[240px]"
                            >
                              Get my free estimate
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
                      Thanks for the details, {contactData.name.split(" ")[0]}!
                      {' '}
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
