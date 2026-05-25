import React from "react";
import PageTransition from "../components/PageTransition";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-[80px] bg-[#08110c] text-white overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0')] bg-cover bg-center scale-110" />
          <div className="absolute inset-0 bg-[#06100b]/85" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-black">
              Let’s Talk <span className="text-yellow-300">Food & Flavour</span>
            </h1>

            <p className="mt-6 text-[#cfd8cf] leading-[1.8]">
              Whether you’re craving something delicious, planning a bulk order,
              or want to collaborate with us — we’re always happy to serve and
              connect.
            </p>
          </motion.div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="py-20 px-5 sm:px-10 lg:px-16 bg-[#0d1711]">
          <div className="max-w-[1200px] mx-auto">
            {/* GRID (BALANCED CARDS) */}
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* ================= LEFT BOX ================= */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="h-full bg-white/5 border border-white/10 backdrop-blur-md  p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <motion.h2
                    custom={1}
                    variants={fadeUp}
                    className="text-3xl sm:text-5xl font-black leading-tight"
                  >
                    Get in <span className="text-lime-300">Touch</span>
                  </motion.h2>

                  <motion.p
                    custom={2}
                    variants={fadeUp}
                    className="mt-4 text-[#b8c2b8] leading-[1.8]"
                  >
                    Reach out anytime — we usually respond within a few hours.
                  </motion.p>

                  {/* CONTACT INFO */}
                  <div className="mt-12 space-y-4">
                    {[
                      [Phone, "Call Us", "+91 98765 43210"],
                      [Mail, "Email", "vegor@gmail.com"],
                      [MapPin, "Location", "Jaipur, Rajasthan, India"],
                      [Clock, "Opening Hours", " 10 AM - 11 PM"],
                    ].map(([Icon, title, value], i) => (
                      <motion.div
                        key={title}
                        custom={i}
                        variants={fadeUp}
                        whileHover={{ x: 6, scale: 1.02 }}
                        className="flex items-start gap-4 p-4 bg-black/20 border border-white/10"
                      >
                        <Icon className="text-yellow-300" />
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="text-[#b8c2b8] text-sm mt-1">{value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ================= RIGHT BOX ================= */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="h-full bg-[#111f17] border border-white/10 p-8 sm:p-10 backdrop-blur-xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                  <p className="text-[#b8c2b8] text-sm mt-2 mb-8">
                    We’ll respond as soon as possible.
                  </p>

                  <form className="space-y-5">
                    {["Your Name", "Email Address", "Subject"].map((ph) => (
                      <input
                        key={ph}
                        type="text"
                        placeholder={ph}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 focus:border-yellow-300 outline-none  transition focus:scale-[1.02]"
                      />
                    ))}

                    <textarea
                      rows="5"
                      placeholder="Your Message..."
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 focus:border-yellow-300 outline-none resize-none transition focus:scale-[1.02]"
                    />
                  </form>
                </div>

                {/* BUTTON STICK TO BOTTOM */}
                <button
                  type="submit"
                  className="mt-8 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-yellow-400 text-black font-bold py-4 uppercase tracking-[3px] rounded-xl hover:scale-[1.02] transition"
                >
                  Send Message <Send size={16} />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= FULL WIDTH MAP ================= */}
        <section className="relative w-full py-10 bg-[#08110c]">
          <div className="max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-xl">
              {/* top fade */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0d1711] to-transparent z-10" />

              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
