import React, { useRef } from "react";
import "./SubjectPage.css";

const topics = [
  {
    id: "history",
    title: "History",
    description:
      "History is the study of past events, particularly in human affairs. It helps us understand how societies have evolved, the causes of conflicts, the achievements of past civilizations, and how historical events shape modern-day societies. From ancient civilizations to modern history, history is key to understanding the present.",
    pdf: "https://www.history.com/topics/ancient-history/ancient-history",
    video: "https://www.youtube.com/embed/hLE-5ElGlPM",
  },
  {
    id: "geography",
    title: "Geography",
    description:
      "Geography is the study of places, environments, and the relationships between people and their environments. It encompasses both the physical features of the Earth and human geography. Geography helps us understand the location of places, climate patterns, and how humans impact the planet.",
    pdf: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/geography",
    video: "https://www.youtube.com/embed/93LLwiMjDko",
  },
  {
    id: "political-science",
    title: "Political Science",
    description:
      "Political Science is the study of politics, government systems, and political behavior. It examines the theory and practice of politics, the structure and functioning of governments, and the impact of political decisions on society. Topics include democracy, international relations, and policy-making.",
    pdf: "https://www.politicalscience.org",
    video: "https://www.youtube.com/embed/YzIcWW3FWSQ",
  },
  {
    id: "economics",
    title: "Economics",
    description:
      "Economics is the study of how societies allocate resources to produce goods and services and distribute them among individuals. It involves analyzing production, consumption, and trade. Economics plays a critical role in shaping policies that address inflation, unemployment, and economic growth.",
    pdf: "https://www.imf.org/external/pubs/ft/fandd/2018/09/what-is-economics/cs.pdf",
    video: "https://www.youtube.com/embed/3ez10ADR_gM",
  },
  {
    id: "sociology",
    title: "Sociology",
    description:
      "Sociology is the study of society, social institutions, and social relationships. It focuses on how individuals interact with one another within groups, communities, and organizations. Key topics include social stratification, race, gender, family, and the effects of social changes on communities.",
    pdf: "https://www.sociologyguide.com",
    video: "https://www.youtube.com/embed/YnCJU6PaCio",
  },
  {
    id: "anthropology",
    title: "Anthropology",
    description:
      "Anthropology is the study of humans, their societies, cultures, and their development over time. It looks at human origins, cultural diversity, social behaviors, and the biological aspects of human beings. Anthropologists study both ancient and contemporary societies to understand human evolution and cultural practices.",
    pdf: "https://www.jstor.org/stable/27852344",
    video: "https://www.youtube.com/embed/LYUzIf12qac",
  },
];

export default function SST() {
  const sectionRefs = useRef({});

  const scrollToTopic = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="subject-page ms-5 ps-4">
      <h1 className="mb-3">Social Science</h1>
      <h4 className="mt-4">Why should we study Social Science?</h4>
      <p className="mb-4">
        "Social Science helps us understand how human societies function and how individuals interact within them. It provides insights into politics, economics, history, and social behavior, equipping us with the knowledge to address real-world issues such as inequality, sustainability, and governance."
      </p>

      {/* Scrollable Topics Table */}
      <div className="topics-table-container mb-4">
        <table className="table table-dark table-hover table-bordered topic-table">
          <tbody>
            <tr>
              {topics.map((topic) => (
                <td
                  key={topic.id}
                  className="topic-cell"
                  onClick={() => scrollToTopic(topic.id)}
                >
                  {topic.title}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Topics Descriptions */}
      {topics.map((topic) => (
        <div
          key={topic.id}
          ref={(el) => (sectionRefs.current[topic.id] = el)}
          className="mb-5"
        >
          <h3>{topic.title}</h3>
          <p>{topic.description}</p>
          <a
            className="btn btn-outline-light btn-sm"
            href={topic.pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View PDF Notes
          </a>
        </div>
      ))}

      {/* Videos */}
      <h2 className="mt-5 mb-3">More Videos For You</h2>
      <div className="row">
        {topics.map((topic, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="ratio ratio-16x9">
              <iframe
                src={topic.video}
                title={`Video ${i}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
