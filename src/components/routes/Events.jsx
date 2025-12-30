import React from 'react';
import {
    Calendar, MapPin, ArrowRight, CalendarX,
    Clock, ExternalLink, Ticket
} from 'lucide-react';

const Events = ({ events = [] }) => {
    const getDateParts = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.toLocaleDateString('en-US', { day: '2-digit' }),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            full: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        };
    };

    const hasEvents = events && events.length > 0;

    return (
        <section className="relative w-full py-32 px-4 sm:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/*  Section Header  */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 text-xs font-bold uppercase tracking-wider mb-4">
                            <Calendar className="w-3 h-3" />
                            Event Schedule
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-secondary tracking-tight">
                            Upcoming Workshops & Seminars
                        </h2>
                        <p className="text-base md:text-lg text-dark/60 dark:text-light/60 mt-4 leading-relaxed">
                            Join us for immersive learning experiences. Connect with experts and level up your trading skills in real-time.
                        </p>
                    </div>

                    {hasEvents && (
                        <button className="group flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary hover:text-primary/80 transition-colors">
                            View Past Archive
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>

                {/*  Content Area  */}
                {!hasEvents ? (
                    <EmptyState />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => {
                            const { day, month, full } = getDateParts(event.date);
                            return (
                                <article
                                    key={event.id}
                                    className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        {/* Date Badge (Overlay) */}
                                        <div className="absolute top-4 left-4 z-10 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl p-2.5 text-center shadow-lg min-w-[60px]">
                                            <span className="block text-xs font-bold text-red-500 uppercase tracking-wider">
                                                {month}
                                            </span>
                                            <span className="block text-2xl font-extrabold text-dark dark:text-light leading-none mt-0.5">
                                                {day}
                                            </span>
                                        </div>

                                        {/* Category Tag (Overlay) */}
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wide rounded-full border border-white/20">
                                                {event.category || 'Webinar'}
                                            </span>
                                        </div>

                                        {event.image ? (
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                                <Ticket className="w-12 h-12 text-white/20" />
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Card Body */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-dark dark:text-light leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-2">
                                                {event.title}
                                            </h3>

                                            <div className="flex items-center gap-4 mt-3 text-xs sm:text-sm text-dark/60 dark:text-light/60 font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4 text-primary dark:text-secondary" />
                                                    {full}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-dark/60 dark:text-light/60 font-medium">
                                                <MapPin className="w-4 h-4 text-primary dark:text-secondary" />
                                                <span className="truncate">{event.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-dark/70 dark:text-light/70 line-clamp-3 mb-6 leading-relaxed">
                                            {event.description}
                                        </p>

                                        {/* Footer / Action */}
                                        <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                            <span className="text-xs font-bold text-dark/40 dark:text-light/40 uppercase tracking-widest">
                                                Limited Seats
                                            </span>
                                            <button className="flex items-center gap-2 text-sm font-bold text-primary dark:text-secondary hover:underline underline-offset-4 transition-all">
                                                Register Now
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

//  Sub-components for cleaner file structure 

const EmptyState = () => (
    <div className="flex justify-center">
        <div className="w-full max-w-lg p-10 rounded-3xl border-2 border-dashed border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-center">
            <div className="w-20 h-20 mx-auto bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                <CalendarX className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
                No Scheduled Events
            </h3>
            <p className="text-dark/60 dark:text-light/60 mb-8">
                We are currently curating our next series of masterclasses.
                Check back soon or subscribe for updates.
            </p>
            <button className="px-6 py-2.5 rounded-xl bg-dark dark:bg-light text-light dark:text-dark font-semibold hover:opacity-90 transition-opacity">
                Refresh Schedule
            </button>
        </div>
    </div>
);

export default Events;