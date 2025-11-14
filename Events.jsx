import React from "react";
import "./Events.css"; // separate CSS for events page

const Events = () => {
  const events = [
    {
      title: "Hackathon 2025",
      date: "Nov 13 - 24",
      desc: "Showcase your AI projects, collaborate with peers, and win amazing prizes!",
      link: "#"
    },
    {
      title: "Career Fair",
      date: "Dec 3",
      desc: "Meet top employers, explore opportunities, and build your professional network.",
      link: "#"
    },
    {
      title: "Cultural Week",
      date: "Jan 10",
      desc: "Celebrate diversity, enjoy performances, workshops, and student talents.",
      link: "#"
    },
    {
      title: "Graduation Ceremony",
      date: "Jan 15",
      desc: "Celebrate the achievements of graduates in a formal ceremony.",
      link: "#"
    },
    {
      title: "End of Semester Examinations",
      date: "Jan 20 - 25",
      desc: "Final exams for all courses; students should check their schedules.",
      link: "#"
    },
    {
      title: "TUSA Elections",
      date: "Jan 28",
      desc: "Vote for your student leaders in the Tharaka University Student Association elections.",
      link: "#"
    },
  ];

  return (
    <div className="events-page">
      <h2 className="events-title">📅 Upcoming Campus Events</h2>
      <div className="events-grid">
        {events.map((e, i) => (
          <div key={i} className="event-card">
            <div className="event-date">{e.date}</div>
            <h3 className="event-title">{e.title}</h3>
            <p className="event-desc">{e.desc}</p>
            <a href={e.link} className="event-link">Learn More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
