import React, { useRef } from "react";
import "./SubjectPage.css";

const topics = [
  {
    id: "cell-biology",
    title: "Cell Biology",
    description:
      "Cell Biology is the study of the structure and function of cells, the basic building blocks of life. This field includes the study of organelles, cell division, cellular respiration, and the role of cells in the overall functioning of organisms.",
    pdf: "https://www.ncbi.nlm.nih.gov/books/NBK21425/",
    video: "https://www.youtube.com/embed/8IlzKri08kk",
  },
  {
    id: "genetics",
    title: "Genetics",
    description:
      "Genetics is the study of genes, heredity, and variation in living organisms. It explores how traits are passed from parents to offspring, and how genetic information is inherited. Key topics include DNA structure, gene expression, and mutations.",
    pdf: "https://www.genetics.org/content/early/2020/07/07/genetics.120.303701",
    video: "https://www.youtube.com/embed/8m6hHRlKwxY",
  },
  {
    id: "evolution",
    title: "Evolution",
    description:
      "Evolution is the process by which species of organisms change over time through variations and natural selection. It is a cornerstone of biological sciences and helps explain the diversity of life. Major topics include natural selection, speciation, and phylogenetics.",
    pdf: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5311109/",
    video: "https://www.youtube.com/embed/fI7IV3x-dGI",
  },
  {
    id: "ecology",
    title: "Ecology",
    description:
      "Ecology is the study of interactions between organisms and their environment. It focuses on the distribution and abundance of organisms, energy flow, and ecosystem dynamics. Topics include food chains, ecological niches, and the impact of human activity on the environment.",
    pdf: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/ecology",
    video: "https://www.youtube.com/embed/aO3Yp45zmw8",
  },
  {
    id: "human-anatomy",
    title: "Human Anatomy",
    description:
      "Human Anatomy is the study of the structure of the human body. It covers the various systems of the body such as the circulatory, respiratory, digestive, and nervous systems, as well as the bones, muscles, and organs that make up the human body.",
    pdf: "https://www.ncbi.nlm.nih.gov/mesh/68008434",
    video: "https://www.youtube.com/embed/uBGl2BujkPQ",
  },
  {
    id: "physiology",
    title: "Physiology",
    description:
      "Physiology is the study of how the body functions and how its various parts interact to maintain homeostasis. Topics include how organs like the heart, lungs, and kidneys function in a coordinated manner, and how the body responds to stress, exercise, and disease.",
    pdf: "https://www.ncbi.nlm.nih.gov/books/NBK327804/",
    video: "https://www.youtube.com/embed/6qk_LTVXZ2w",
  },
];

export default function Biology() {
  const sectionRefs = useRef({});

  const scrollToTopic = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="subject-page ms-5 ps-4">
      <h1 className="mb-3">Biology</h1>
      <h4 className="mt-4">Why should we study Biology?</h4>
      <p className="mb-4">
        "Biology helps us understand the intricate workings of life, from the smallest cells to the most complex ecosystems. Studying biology enhances our knowledge of health, evolution, and the environment. It’s crucial for making advancements in medicine, biotechnology, and conservation efforts."
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
