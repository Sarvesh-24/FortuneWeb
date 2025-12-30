import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formDataToSubmit = new URLSearchParams();
        formDataToSubmit.append(process.env.REACT_APP_FORM_NAME, formData.name);
        formDataToSubmit.append(process.env.REACT_APP_FORM_EMAIL, formData.email);
        formDataToSubmit.append(process.env.REACT_APP_FORM_PHONE, formData.phone || "");
        formDataToSubmit.append(process.env.REACT_APP_FORM_SUBJECT, formData.subject);
        formDataToSubmit.append(process.env.REACT_APP_FORM_MESSAGE, formData.message);

        try {
            await fetch(process.env.REACT_APP_GOOGLE_FORM_URL, {
                method: "POST",
                body: formDataToSubmit,
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                mode: 'no-cors'
            });

            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative w-full py-16 md:py-32 px-4 overflow-hidden">
            <div className="relative z-10 mx-auto w-full max-w-[1440px] md:w-[95%] lg:w-[85%]">

                {/* Header Section */}
                <div className="lg:text-center mb-16 space-y-4">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest text-primary uppercase">Contact Us</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-5xl font-bold dark:text-light">Let’s start a conversation</h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 space-y-6 md:space-y-8"
                    >
                        <div className="bg-light dark:bg-primary/0 p-6 md:p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-light mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <ContactItem
                                    icon={<MapPin size={20} />}
                                    label="Headquarters"
                                    text="3903, 39th Floor, Kohinoor Square, Dadar West, 400028"
                                    href="https://maps.app.goo.gl/BLGe3qoBhqef4tb26"
                                />
                                <ContactItem
                                    icon={<Mail size={20} />}
                                    label="Email Us"
                                    text="info@fortuneadvisorz.com"
                                    href="info@fortuneadvisorz.com"
                                />
                                <ContactItem
                                    icon={<Phone size={20} />}
                                    label="Call Us"
                                    text="+91 9699613407"
                                    href="tel:+919699613407"
                                />
                                <ContactItem
                                    icon={<Clock size={20} />}
                                    label="Working Hours"
                                    text="Mon – Sat: 9:00 AM – 7:00 PM"
                                />
                            </div>
                        </div>

                        {/* Optional Social Proof */}
                        <div className="px-2 md:p-6">
                            <p className="text-sm text-neutral-500 italic">
                                "Our support team typically responds within 24 hours during business days."
                            </p>
                        </div>
                    </motion.div>


                    {/* Right Form Panel */}
                    <motion.div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-xl">
                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <InputField name="name" label="Full Name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                                <InputField name="email" label="Email Address" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <PhoneInputField
                                    label="Phone Number"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    placeholder="12345 67890"
                                />
                                <InputField name="subject" label="Subject" type="text" placeholder="Investment Inquiry" value={formData.subject} onChange={handleChange} />
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-primary/0 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-light focus:ring-2 focus:ring-primary/50 focus:bg-light dark:focus:bg-neutral-900 transition-all duration-300 resize-none" placeholder="How can we help?" />
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-light font-semibold hover:-translate-y-1 transition-all disabled:opacity-70 shadow-lg shadow-primary/20">
                                {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><ArrowRight className="w-4 h-4" /> Send Message</>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Global Overrides to force the library into your layout */}
            <style jsx={true} global={true}>{`
                .PhoneInputInput {
                    background: transparent !important;
                    border: none !important;
                    outline: none !important;
                    padding: 0 !important; 
                    margin: 0 !important;
                    font-size: 0.875rem !important; 
                    color: inherit !important;
                    height: 100% !important;
                    width: 100% !important;
                }

                .PhoneInputCountry {
                    margin-right: 0.75rem !important;
                    display: flex;
                    align-items: center;
                }
                .PhoneInputCountrySelect {
                    cursor: pointer;
                }

                .PhoneInputCountrySelect option {
                    background-color: white !important;
                    color: black !important;
                }
                .dark .PhoneInputCountrySelect option {
                    background-color: #171717 !important; /* neutral-900 */
                    color: white !important;
                }

                .PhoneInputCountrySelectArrow {
                    opacity: 0.6;
                    margin-left: 0.25rem;
                }
            `}</style>
        </section>
    );
};


function PhoneInputField({ label, value, onChange, placeholder, defaultCountry = "IN" }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                {label}
            </label>
            <div className="relative">
                <PhoneInput
                    international
                    defaultCountry={defaultCountry}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    // These classes match InputField exactly
                    className="
                        flex items-center w-full px-4 py-3 rounded-xl
                        bg-neutral-50 dark:bg-primary/0
                        border border-neutral-200 dark:border-neutral-700
                        text-neutral-900 dark:text-light
                        focus-within:ring-2 focus-within:ring-primary/50 focus-within:bg-light dark:focus-within:bg-neutral-900
                        transition-all duration-300
                    "
                />
            </div>
        </div>
    );
}

function InputField({ label, type, name, value, onChange, placeholder }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                {label}
            </label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required
                className="
                    w-full px-4 py-3 rounded-xl
                    bg-neutral-50 dark:bg-primary/0
                    border border-neutral-200 dark:border-neutral-700
                    text-neutral-900 dark:text-light
                    placeholder:text-neutral-400
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-light dark:focus:bg-neutral-900
                    transition-all duration-300
                "
                placeholder={placeholder}
            />
        </div>
    );
}

function ContactItem({ icon, label, text }) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-primary">
                {icon}
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-0.5">{label}</p>
                <p className="text-sm sm:text-base font-medium text-neutral-800 dark:text-neutral-200">{text}</p>
            </div>
        </div>
    );
}

export default Contact;