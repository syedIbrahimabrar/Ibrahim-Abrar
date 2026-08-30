import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export function QuickMessageSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      setError('Please write your message.');
      return;
    }

    setError('');

    const formattedText = `Hello Ibrahim,

${name.trim() ? `Name: ${name.trim()}\n\n` : ''}Message:
${message.trim()}

Sent from your portfolio website.`;

    const whatsappUrl = `https://wa.me/923132165707?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSent(true);
  };

  const handleReset = () => {
    setMessage('');
    setName('');
    setIsSent(false);
  };

  return (
    <section id="quick-message" className="relative z-10 py-24 sm:py-32 border-t border-white/[0.05] bg-[#06080d]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#38bdf8]">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>DIRECT INQUIRY</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Send a quick message.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Have a project, question, or idea? Type your message below and it will open directly in my WhatsApp.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Direct WhatsApp: <strong className="text-slate-300 font-medium">03132165707</strong></span>
            </div>
          </div>

          {/* Right Column: WhatsApp Message Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#070b12] shadow-2xl relative overflow-hidden">
              
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center mx-auto border border-[#38bdf8]/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Message Prepared on WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Your message has been formatted and opened in WhatsApp chat with <strong>03132165707</strong>.
                  </p>
                  
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-white/25 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="quick-name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      YOUR NAME (OPTIONAL)
                    </label>
                    <input
                      id="quick-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John"
                      className="w-full bg-[#06080d] border border-white/[0.08] focus:border-[#38bdf8] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="quick-message-text" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      YOUR MESSAGE <span className="text-[#38bdf8]">*</span>
                    </label>
                    <textarea
                      id="quick-message-text"
                      rows={3}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Hi Ibrahim, I would like to build..."
                      className={`w-full bg-[#06080d] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors duration-200 resize-none ${
                        error ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/[0.08] focus:border-[#38bdf8]'
                      }`}
                    />
                    {error && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    id="quick-send-whatsapp-btn"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white text-black hover:bg-slate-200 font-semibold text-xs sm:text-sm py-3.5 rounded-xl transition-all duration-200 group cursor-pointer"
                  >
                    <span>SEND MESSAGE TO WHATSAPP</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
