import React, { useRef } from "react";
import "./SubjectPage.css";

const topics = [
  {
    id: "data-structures",
    title: "Data Structures",
    description:
      "Data structures are ways of organizing and storing data for efficient access and modification. They are fundamental to computer science and help in solving problems such as searching, sorting, and indexing. Common data structures include arrays, linked lists, trees, and graphs.",
    pdf: "https://www.geeksforgeeks.org/data-structures/",
    video: "https://www.youtube.com/embed/bumNqJ8wJ3Y",
  },
  {
    id: "algorithms",
    title: "Algorithms",
    description:
      "Algorithms are step-by-step procedures or formulas for solving problems. They are crucial for optimizing performance in various fields such as search engines, machine learning, and cryptography. Understanding algorithms helps in choosing the best approach for solving computational problems efficiently.",
    pdf: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    video: "https://www.youtube.com/embed/8hly31xKli0",
  },
  {
    id: "computer-architecture",
    title: "Computer Architecture",
    description:
      "Computer architecture deals with the design and organization of computer systems, including how hardware components work together. This involves understanding processors, memory, input/output systems, and how these components interact to perform tasks efficiently.",
    pdf: "https://www.cs.umd.edu/class/spring2016/cmsc212/lectures/",
    video: "https://www.youtube.com/embed/JajUsF_4b9M",
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    description:
      "An operating system is software that manages computer hardware and software resources. It provides services for computer programs and controls the hardware components like the CPU, memory, and input/output devices. Topics include processes, threads, file systems, and resource management.",
    pdf: "https://www.geeksforgeeks.org/operating-systems/",
    video: "https://www.youtube.com/embed/OSUbxJ5sY-8",
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Databases are systems for storing and retrieving large volumes of data efficiently. This topic includes the design, management, and querying of relational databases using SQL. It also covers NoSQL databases, data modeling, normalization, and indexing.",
    pdf: "https://www.geeksforgeeks.org/database-management-system-database-models/",
    video: "https://www.youtube.com/embed/8-5phSpsF9A",
  },
  {
    id: "networking",
    title: "Networking",
    description:
      "Networking involves the interconnection of computers and devices to share resources and information. Key topics include protocols, the OSI model, IP addressing, routing, and network security. A good understanding of networking is essential for developing distributed systems and the Internet.",
    pdf: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    video: "https://www.youtube.com/embed/3QhU9jd03a0",
  },
];

export default function CS() {
  const sectionRefs = useRef({});

  const scrollToTopic = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="subject-page ms-5 ps-4">
      <h1 className="mb-3">Computer Science</h1>
      <h4 className="mt-4">Why should we study Computer Science?</h4>
      <p className="mb-4">
        "Computer Science is the backbone of modern technology. It powers everything from smartphones to artificial intelligence and space exploration. Studying CS not only equips you with technical skills in programming, algorithms, and system design, but also enhances your problem-solving and analytical abilities, which are valuable in almost every field today."
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
