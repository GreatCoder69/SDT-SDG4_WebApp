import React, { useRef } from "react";
import "./SubjectPage.css";
const topics = [
  {
    id: "physics",
    title: "Physics",
    description:
      "Physics is the study of matter, energy, and the fundamental forces of nature. It helps us understand the universe from the smallest particles to the largest galaxies. Concepts like motion, force, energy, and thermodynamics are key to fields like engineering, technology, and environmental science.",
    pdf: "https://openstax.org/books/physics/pages/1-1-introduction-to-physics",
    video: "https://www.youtube.com/embed/yWMKYID5fr8", // Updated YouTube embed link
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description:
      "Chemistry is the branch of science that studies the composition, structure, properties, and reactions of matter. It bridges physics and biology, helping us understand everything from chemical reactions in the lab to biochemical processes in living organisms. Chemistry is essential for fields like pharmaceuticals, environmental science, and materials engineering.",
    pdf: "https://openstax.org/books/chemistry/pages/1-1-introduction-to-chemistry",
    video: "https://www.youtube.com/embed/vsOCUZaxA58", // Updated YouTube embed link
  },
  {
    id: "biology",
    title: "Biology",
    description:
      "Biology is the study of life, from the molecular level to entire ecosystems. It examines how living organisms grow, reproduce, evolve, and interact with each other and their environment. Biology is fundamental to health and medicine, environmental conservation, and understanding the natural world.",
    pdf: "https://openstax.org/books/biology/pages/1-1-introduction",
    video: "https://www.youtube.com/embed/tZE_fQFK8EY", // Updated YouTube embed link
  },
  {
    id: "earth-science",
    title: "Earth Science",
    description:
      "Earth science is the study of the Earth, including its structure, materials, and processes. It covers topics like geology, meteorology, oceanography, and environmental science. By understanding the Earth's past, present, and future, we can better address issues like climate change, natural disasters, and resource management.",
    pdf: "https://www.learner.org/courses/envsci/",
    video: "https://www.youtube.com/embed/SWbM8rpH2sM", // Updated YouTube embed link
  },
  {
    id: "astronomy",
    title: "Astronomy",
    description:
      "Astronomy is the study of the universe beyond Earth, including stars, planets, galaxies, and other celestial bodies. It seeks to answer fundamental questions about the origins and nature of the universe. From understanding black holes to the search for extraterrestrial life, astronomy inspires us to explore the cosmos.",
    pdf: "https://openstax.org/books/astronomy/pages/1-1-introduction-to-astronomy",
    video: "https://www.youtube.com/embed/0rHUDWjR5gg", // Updated YouTube embed link
  },
  {
    id: "environmental-science",
    title: "Environmental Science",
    description:
      "Environmental science is the study of the environment and the interactions between humans, ecosystems, and natural resources. It addresses critical issues like pollution, climate change, conservation, and sustainability. By studying environmental science, we can develop solutions to protect and restore our planet.",
    pdf: "https://openstax.org/books/environmental-science/pages/1-1-introduction-to-environmental-science",
    video: "https://www.youtube.com/embed/RoIpCJwX7-M", // Updated YouTube embed link
  },
];



export default function Science() {
  const sectionRefs = useRef({});

  const scrollToTopic = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="subject-page ms-5 ps-4">
      <h1 className="mb-3">Science</h1>
      <h4 className="mt-4">Why should we study Science?</h4>
      <p className="mb-4">
        "Science empowers us to understand the world around us, providing the tools to innovate, solve problems, and improve our lives. From the basics of chemistry to the mysteries of space, studying science helps us explore the natural world, develop new technologies, and address global challenges like climate change and public health."
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
