import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

emailjs.init(PUBLIC_KEY);

export function sendContactEmail(form: HTMLFormElement) {
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);
}