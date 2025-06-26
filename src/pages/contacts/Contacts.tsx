import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sendContactEmail } from "@/services/emailjs.service";

export default function Contacts() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!formRef.current) return;
    sendContactEmail(formRef.current)
      .then(() => {
        setSent(true);
        setLoading(false);
        formRef.current?.reset();
      })
      .catch(() => {
        setLoading(false);
        alert(t("contact.error"));
      });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-2">{t("contact.title")}</h2>
        <p className="text-muted-foreground">{t("contact.subtitle")}</p>
      </motion.header>
      <motion.form
        id="contactForm"
        ref={formRef}
        onSubmit={handleSend}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-lg bg-background/80 dark:bg-zinc-900/90 backdrop-blur rounded-xl shadow-lg dark:shadow-2xl p-8 flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder={t("contact.name")}
          required
          className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background dark:bg-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        />
        <input
          type="email"
          name="user_email"
          placeholder={t("contact.email")}
          required
          className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background dark:bg-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        />
        <input
          type="text"
          name="user_whatsapp"
          placeholder={t("contact.whatsapp")}
          className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background dark:bg-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        />
        <textarea
          name="message"
          placeholder={t("contact.message")}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background dark:bg-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="btn btn-primary font-bold text-lg py-2 px-6 rounded-full shadow-xl bg-primary text-white dark:text-black hover:scale-105 transition-all"
        >
          {loading ? t("contact.sending") : t("contact.send")}
        </motion.button>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-semibold mt-2"
          >
            {t("contact.success")}
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}