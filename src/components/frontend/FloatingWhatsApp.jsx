import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {X, Send, MoveUp} from "lucide-react";
import { Badge } from "../ui/badge";

export default function WhatsAppButton() {
    const [open, setOpen] = useState(false);
    const [activeChats, setActiveChats] = useState([]);
    const [message, setMessage] = useState({});
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) setShowScroll(true);
            else setShowScroll(false);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // CONTACT LIST
    const contacts = {
        person1: {
            id: "person1",
            name: "Fortune Advisorz",
            number: "+919699613407",
            avatar: "/assets/logo/img.png",
            color: "#22c55e",
        },
        // person2: {
        //     id: "person2",
        //     name: "VINAYAK JOSHI",
        //     number: "+971502576323",
        //     avatar: "/assets/logo/img.png",
        //     color: "#facc15",
        // },
    };

    // AUTO-OPEN BOTH CHATS AFTER PAGE LOAD
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveChats([contacts.person1]);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);


    const sendToWhatsApp = (chat) => {
        const msg = message[chat.id];
        if (!msg?.trim()) return;
        const encoded = encodeURIComponent(msg);
        window.open(`https://wa.me/${chat.number}?text=${encoded}`, "_blank");
        setMessage((prev) => ({ ...prev, [chat.id]: "" }));
    };

    const closeChat = (id) => {
        setActiveChats((prev) => prev.filter((c) => c.id !== id));
    };

    return (
        <>
            <AnimatePresence>
                {showScroll && (
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="
                            fixed bottom-28 right-8 z-50
                            md:w-12 md:h-12 w-10 h-10 flex items-center justify-center
                            rounded-full shadow-lg
                            bg-primary text-white
                            dark:bg-light dark:text-dark
                        "
                        whileHover={{ scale: 1.1 }}
                    >
                        <MoveUp />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Floating WhatsApp FAB */}
            <motion.button
                onClick={() => setOpen(!open)}
                className="
                    fixed bottom-6 right-6 z-50 md:w-16 md:h-16 w-14 h-14
                    flex items-center justify-center rounded-full
                    bg-green-500 text-white shadow-xl
                "
                whileHover={{ scale: 1.1 }}
            >
                {/* REAL WHATSAPP ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32" fill="white">
                    <path d="M16.002 2.001a13.894 13.894 0 0 0-11.95 21.21L2 30l6.998-2.051a13.985 13.985 0 0 0 7.004 1.793 13.997 13.997 0 0 0 0-27.999zm0 25.467a11.47 11.47 0 0 1-5.847-1.604l-.42-.25-4.157 1.218 1.238-4.06-.273-.417a11.46 11.46 0 0 1-1.776-6.13c0-6.353 5.17-11.524 11.526-11.524 3.08 0 5.976 1.2 8.153 3.377a11.44 11.44 0 0 1 3.373 8.151 11.56 11.56 0 0 1-11.517 11.239z"/>
                    <path d="M22.272 18.87c-.342-.171-2.026-.998-2.341-1.11-.315-.115-.544-.171-.773.17-.228.34-.887 1.11-1.086 1.338-.2.228-.401.256-.743.085-.342-.17-1.442-.532-2.748-1.7-1.016-.905-1.701-2.024-1.9-2.366-.2-.34-.021-.525.15-.694.155-.153.342-.4.514-.601.17-.2.228-.341.342-.57.115-.228.057-.428-.028-.6-.085-.171-.773-1.86-1.059-2.548-.278-.667-.56-.576-.773-.586-.2-.01-.428-.012-.657-.012-.229 0-.6.085-.915.428-.315.34-1.201 1.173-1.201 2.86 0 1.687 1.23 3.317 1.4 3.547.171.228 2.422 3.706 5.874 5.036.822.356 1.463.568 1.963.727.825.262 1.575.225 2.168.137.662-.099 2.026-.827 2.312-1.625.285-.8.285-1.49.2-1.625-.086-.135-.314-.228-.657-.4z"/>
                </svg>
            </motion.button>

            {/* SHADCN CHIP LIST */}
            <AnimatePresence>
                {open && activeChats.length < 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-28 right-6 flex flex-col gap-3 z-50"
                    >
                        {/* person1 CHIP */}
                        <Badge
                            onClick={() =>
                                setActiveChats((prev) =>
                                    prev.find((c) => c.id === contacts.person1.id)
                                        ? prev
                                        : [...prev, contacts.person1]
                                )
                            }
                            className="
                                px-3 py-1.5 flex items-center gap-1.5
                                rounded-full text-white text-sm
                                bg-[#22c55e] border border-[#22c55e] shadow-md cursor-pointer
                            "
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-light" />
                            <img src="/assets/logo/img.png" alt="logo" className="w-5 h-5 rounded-full border border-white" />
                            {contacts.person1.name}
                        </Badge>

                        {/*/!* person2 CHIP *!/*/}
                        {/*<Badge*/}
                        {/*    onClick={() =>*/}
                        {/*        setActiveChats((prev) =>*/}
                        {/*            prev.find((c) => c.id === contacts.person2.id)*/}
                        {/*                ? prev*/}
                        {/*                : [...prev, contacts.person2]*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*    className="*/}
                        {/*        px-3 py-1.5 flex items-center gap-1.5*/}
                        {/*        rounded-full text-white text-sm*/}
                        {/*        bg-yellow-400 border border-yellow-400 shadow-md cursor-pointer*/}
                        {/*    "*/}
                        {/*>*/}
                        {/*    <span className="w-2.5 h-2.5 rounded-full bg-light" />*/}
                        {/*    <img src="/assets/logo/img.png" alt="logo" className="w-5 h-5 rounded-full border border-yellow-400" />*/}
                        {/*    {contacts.person2.name}*/}
                        {/*</Badge>*/}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MULTIPLE CHAT WINDOWS */}
            <AnimatePresence>
                {activeChats.map((chat, i) => (
                    <motion.div
                        key={chat.id}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="
                            fixed bottom-6 right-6 w-80
                            bg-white dark:bg-neutral-900 rounded-xl shadow-2xl
                            border border-neutral-300 dark:border-neutral-700
                            overflow-hidden
                        "
                        style={{ zIndex: 200 + i }}
                    >
                        {/* HEADER */}
                        <div className="flex items-center gap-3 p-4 text-white"
                             style={{ background: chat.color }}>
                            <img src={chat.avatar} alt="logo" className="w-12 h-12 rounded-full border-2 border-white" />

                            <div>
                                <div className="font-bold">{chat.name}</div>
                                <div className="text-sm flex items-center gap-1 text-white/80">
                                    <span className="w-2 h-2 rounded-full bg-green-300"></span>
                                    Online
                                </div>
                            </div>

                            <button className="ml-auto" onClick={() => closeChat(chat.id)}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* MESSAGE */}
                        <div className="p-4 bg-gray-100 dark:bg-neutral-800">
                            <div className="bg-white  p-3 rounded-lg shadow-md">
                                Hi 👋<br />How can I help you?
                            </div>
                            <div className="text-right text-xs mt-1 text-gray-500">12:22</div>
                        </div>

                        {/* INPUT BAR */}
                        <div className="p-3 flex items-center gap-2 bg-white dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-700">
                            <input
                                type="text"
                                className="flex-1 px-3 py-2 rounded-lg border border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-white"
                                placeholder="Enter your message…"
                                value={message[chat.id] || ""}
                                onChange={(e) =>
                                    setMessage((prev) => ({ ...prev, [chat.id]: e.target.value }))
                                }
                            />
                            <button
                                onClick={() => sendToWhatsApp(chat)}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </>
    );
}
