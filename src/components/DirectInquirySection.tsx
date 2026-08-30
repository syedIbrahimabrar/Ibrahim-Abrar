import { useState, useRef, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function DirectInquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Field validation
  const isNameValid = formData.name.trim().length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isMessageValid = formData.message.trim().length > 0;
  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isFormValid) {
      return;
    }

    // Build the formatted WhatsApp message
    const formattedText = `Hello Ibrahim,

I would like to discuss a project.

Name:
${formData.name.trim()}

Email:
${formData.email.trim()}

Project Type:
${formData.projectType}

Message:
${formData.message.trim()}

Thank you.`;

    const whatsappUrl = `https://wa.me/923132165707?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Website',
      message: '',
    });
    setTouched({ name: false, email: false, message: false });
    setIsSuccess(false);
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);
  };

  return (
    <section id="direct-inquiry" className="relative z-10 text-white bg-[#06080d] pt-20 sm:pt-28 pb-24 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Contact Hero Section matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8] block mb-3 font-mono">
            LET'S TALK
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
            Have a project in mind?
            <span className="block text-[#38bdf8] font-bold mt-1">
              Let's build something great.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mt-4">
            Whether you need a modern website, an AI voice agent, or an AI chatbot, I'd love to hear about your project.
          </p>
        </motion.div>

        {/* Main Two-Column Contact Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Contact Information Rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Let's work together.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Reach out directly via email, message on WhatsApp, or connect on Instagram.
              </p>
            </div>

            {/* Three Contact Cards with subtle hover arrow */}
            <div className="space-y-4 pt-2">
              
              {/* EMAIL */}
              <a
                href="mailto:iqadri6912@gmail.com"
                id="inquiry-email-row"
                className="group flex items-center justify-between p-5 rounded-xl border border-white/[0.06] hover:border-[#38bdf8]/40 bg-[#070b12] transition-all duration-300"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-1">
                    EMAIL
                  </div>
                  <div className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-[#38bdf8] transition-colors break-all">
                    iqadri6912@gmail.com
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/923132165707"
                target="_blank"
                rel="noopener noreferrer"
                id="inquiry-whatsapp-row"
                className="group flex items-center justify-between p-5 rounded-xl border border-white/[0.06] hover:border-[#38bdf8]/40 bg-[#070b12] transition-all duration-300"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-1">
                    WHATSAPP
                  </div>
                  <div className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-[#38bdf8] transition-colors">
                    03132165707
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/itz_ibrahim_abrar/"
                target="_blank"
                rel="noopener noreferrer"
                id="inquiry-instagram-row"
                className="group flex items-center justify-between p-5 rounded-xl border border-white/[0.06] hover:border-[#38bdf8]/40 bg-[#070b12] transition-all duration-300"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-1">
                    INSTAGRAM
                  </div>
                  <div className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-[#38bdf8] transition-colors">
                    @itz_ibrahim_abrar
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE: Contact Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-2xl border border-white/[0.06] bg-[#070b12]/90 backdrop-blur-sm shadow-2xl">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center border border-[#38bdf8]/20">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#38bdf8]">
                    MESSAGE READY
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Your message has been prepared in WhatsApp.
                  </h3>
                  <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                    WhatsApp has opened in a new tab with your formatted inquiry. If it didn't open automatically, you can tap below to proceed.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`https://wa.me/923132165707?text=${encodeURIComponent(
                        `Hello Ibrahim,\n\nI would like to discuss a project.\n\nName:\n${formData.name.trim()}\n\nEmail:\n${formData.email.trim()}\n\nProject Type:\n${formData.projectType}\n\nMessage:\n${formData.message.trim()}\n\nThank you.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wide hover:bg-slate-200 transition-colors"
                    >
                      <span>OPEN WHATSAPP NOW</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      NAME
                    </label>
                    <input
                      ref={nameInputRef}
                      id="inquiry-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onBlur={() => handleBlur('name')}
                      placeholder="Your name"
                      className={`w-full bg-[#06080d] border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors duration-200 ${
                        touched.name && !isNameValid
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-[#38bdf8]'
                      }`}
                    />
                    {touched.name && !isNameValid && (
                      <p className="text-xs text-rose-400 mt-1.5 font-mono">Please enter your name.</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      EMAIL
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onBlur={() => handleBlur('email')}
                      placeholder="Your email"
                      className={`w-full bg-[#06080d] border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors duration-200 ${
                        touched.email && !isEmailValid
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-[#38bdf8]'
                      }`}
                    />
                    {touched.email && !isEmailValid && (
                      <p className="text-xs text-rose-400 mt-1.5 font-mono">Please enter a valid email address.</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="inquiry-project-type" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      PROJECT TYPE
                    </label>
                    <div className="relative">
                      <select
                        id="inquiry-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#06080d] border border-white/[0.08] focus:border-[#38bdf8] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        <option value="Website">Website</option>
                        <option value="AI Voice Agent">AI Voice Agent</option>
                        <option value="AI Chatbot">AI Chatbot</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell me about your project..."
                      className={`w-full bg-[#06080d] border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors duration-200 resize-none ${
                        touched.message && !isMessageValid
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-[#38bdf8]'
                      }`}
                    />
                    {touched.message && !isMessageValid && (
                      <p className="text-xs text-rose-400 mt-1.5 font-mono">Please describe your project.</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="inquiry-submit-btn"
                    disabled={!isFormValid && (touched.name || touched.email || touched.message)}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white text-black hover:bg-slate-200 disabled:opacity-50 disabled:hover:bg-white font-semibold text-sm py-4 rounded-xl transition-all duration-300 group cursor-pointer"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
