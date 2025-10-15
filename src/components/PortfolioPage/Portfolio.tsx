import { useState } from "react";
import styles from "./Portfolio.module.css";


type Project = {
  id: string;
  title: string;
  blurb: string;
  imageAlt: string;
  imageUrl?: string;
  liveUrl?: string;
  detailsUrl?: string;
  liveDemo?: boolean;
};

const projects: Project[] = [
  {
    id: "Fish",
    title: "Fishing spot platform (Self Project)",
    blurb:
      "A web application that allows users to discover and share fishing spots, complete with reviews, photos, and location details.",
    imageAlt: "Fishing Spot Share preview",
    imageUrl:
      "https://res.cloudinary.com/dwnsglhao/image/upload/v1760425895/Screenshot_2025-10-14_at_10.10.19_bofdcn.png",
    liveUrl: "#",
    detailsUrl: "https://github.com/Tam309/Fishing-Spot-Share",
    liveDemo: true,
  },
  {
    id: "Netverse",
    title: "Movie review and showtimes platform (Netverse)",
    blurb:
      "A full-stack web application that enables users to explore movies, submit reviews, and engage in discussions",
    imageAlt: "Meet AI preview",
    imageUrl:
      "https://res.cloudinary.com/dwnsglhao/image/upload/v1760427677/Screenshot_2025-10-14_at_10.40.45_iivghu.png",
    liveUrl: "#",
    detailsUrl: "https://github.com/Advance-Web-Project-Group-17/Front-End",
    liveDemo: false,
  },
  {
    id: "Gosell",
    title: "Gosell (clone Tori.fi)",
    blurb:
      "A mobile marketplace application designed for local product buying and selling.",
    imageAlt: "Echo preview",
    imageUrl:
      "https://res.cloudinary.com/dwnsglhao/image/upload/v1760428011/Screenshot_2025-10-14_at_10.46.43_nr7fu7.png",
    liveUrl: "#",
    detailsUrl: "https://github.com/Mobile-Development-Project-Group-18/Client",
    liveDemo: false,
  },
];
const experiences = [
  {
    id: "factorise",
    role: "QA Trainee",
    company: "Spectarium",
    type: "Internship",
    location: "Oulu, Finland",
    date: "1st July 2025 - 30th Aug 2025",
    link: "https://www.spectarium.games/",
    logo: "https://res.cloudinary.com/dwnsglhao/image/upload/v1760430361/OIP_mr4fs4.webp",
    responsibilities: [
      "Tested game features in Unity and reported issues to developers, improving product stability.",
      "Used GitHub Desktop for version control and collaborated with C# developers in a real software team.",
      "Gained problem-solving skills and attention to detail, supporting backend testing and debugging.",
    ],
    technologies: [
      "Slack",
      "Github desktop",
      "Favro",
      "Unity",
      "Visual Studio",
      "Git",
    ],
  },
];

const tabs = ["Projects", "Experience"] as const;
type Tab = (typeof tabs)[number];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>("Projects");

  return (
    <div className={`${styles.page} py-5`}>
      {/* Top heading */}
      <div className="container text-center">
        <h1 className={styles.title}>Portfolio Showcase</h1>
        <p className={`mb-4 ${styles.subtitle}`}>
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>

        {/* Tab strip */}
        <div className={`d-flex justify-content-center ${styles.tabWrap}`}>
          <ul className="nav nav-pills gap-3">
            {tabs.map((t) => (
              <li className="nav-item" key={t}>
                <button
                  className={`nav-link ${activeTab === t ? "active" : ""} ${
                    styles.pill
                  }`}
                  onClick={() => setActiveTab(t)}
                >
                  <span className={styles.pillIcon}>
                    {t === "Projects" ? "◔" : t === "Experience" ? "🧰" : "⚙︎"}
                  </span>
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content area */}
      <div className="container mt-4">
        {activeTab === "Projects" && (
          <div className="row g-4">
            {projects.map((p) => (
              <div className="col-12 col-md-6 col-lg-4" key={p.id}>
                <div className={`card h-100 ${styles.card}`}>
                  {/* Image / placeholder */}
                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt={p.imageAlt}
                      className={`card-img-top ${styles.thumb}`}
                    />
                  ) : (
                    <div className={styles.placeholder} aria-label={p.imageAlt}>
                      <div className={styles.placeholderBar} />
                    </div>
                  )}

                  <div className="card-body d-flex flex-column">
                    <h5 className={`card-title ${styles.cardTitle}`}>
                      {p.title}
                    </h5>
                    <p className={`card-text ${styles.cardText}`}>{p.blurb}</p>

                    <div className="mt-auto d-flex gap-2">
                      {p.liveDemo && (
                        <a
                        className={`btn btn-sm ${styles.primaryBtn}`}
                        href={p.liveUrl || "#"}
                      >
                        Live Demo <span className={styles.linkIcon}>↗</span>
                      </a>
                      )}
                      <a
                        className={`btn btn-sm ${styles.secondaryBtn}`}
                        href={p.detailsUrl || "#"}
                      >
                        Details <span className={styles.chev}>›</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "Experience" && (
          <div className="container mt-4">
            {experiences.map((exp) => (
              <div key={exp.id} className={`${styles.expCard} mx-auto`}>
                <div className="d-flex align-items-start gap-3">
                  <div className={styles.logoWrap}>
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="flex-grow-1 text-start">
                    <h4 className={styles.role}>{exp.role}</h4>
                    <a
                      href={exp.link}
                      className={styles.company}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                    <div className={styles.meta}>
                      <span>{exp.type}</span> · <span>{exp.location}</span> ·{" "}
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-start">
                  <h5 className={styles.sectionHeading}>
                    Key Responsibilities:
                  </h5>
                  <ul className={styles.list}>
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <h5 className={styles.sectionHeading}>Technologies Used:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
