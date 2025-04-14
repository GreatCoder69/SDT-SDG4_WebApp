import React, { useRef } from "react";
import "./SubjectPage.css";

const topics = [
  {
    id: "literature",
    title: "Literature",
    description:
      "Literature is the study of written works, encompassing novels, plays, poetry, and essays. It allows us to explore the human experience, culture, and history through the lens of language and storytelling. From Shakespeare to contemporary authors, literature helps us better understand different perspectives and the world around us.",
    pdf: "https://www.mit.edu/~jds/601.pdf",
    video: "https://www.youtube.com/embed/Awc1h20Ja94",
  },
  {
    id: "writing-skills",
    title: "Writing Skills",
    description:
      "Writing is an essential skill that allows us to communicate ideas effectively and creatively. Strong writing skills are critical for success in nearly every field, from business to academia. Whether it's crafting an essay, a report, or a novel, writing helps us organize thoughts, engage readers, and convey meaning clearly.",
    pdf: "https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html",
    video: "https://www.youtube.com/embed/vtIzMaLkCaM",
  },
  {
    id: "grammar",
    title: "Grammar",
    description:
      "Grammar forms the foundation of effective communication, ensuring clarity and precision. It encompasses the rules that govern sentence structure, word usage, and punctuation. Mastering grammar is essential for both writing and speaking, as it ensures that our language is correct and understood by others.",
    pdf: "https://www.grammarbook.com/",
    video: "https://www.youtube.com/embed/SceDmiBEESI",
  },
  {
    id: "rhetoric",
    title: "Rhetoric",
    description:
      "Rhetoric is the art of persuasion through language. It's a key component of public speaking, writing, and media. By understanding rhetorical strategies, we can craft compelling arguments, persuade audiences, and communicate more effectively in both personal and professional settings.",
    pdf: "https://www.luther.edu/english/rhetoric.pdf",
    video: "https://www.youtube.com/embed/UeGesJgnNH4",
  },
  {
    id: "poetry",
    title: "Poetry",
    description:
      "Poetry is a form of creative expression that uses rhythmic and often concise language to evoke emotions and imagery. It explores the nuances of language, meter, and sound to capture moments and experiences. From ancient epics to modern free verse, poetry is a timeless art form that has the power to move and inspire.",
    pdf: "https://www.poetryfoundation.org/learn/glossary-terms/poetry",
    video: "https://www.youtube.com/embed/JwhouCNq-Fc",
  },
  {
    id: "creative-writing",
    title: "Creative Writing",
    description:
      "Creative writing is an imaginative form of writing that focuses on storytelling and self-expression. Whether through short stories, novels, or plays, creative writing allows individuals to explore ideas, emotions, and worlds beyond reality. It encourages creativity and innovation, pushing writers to think outside the box.",
    pdf: "https://www.creative-writing-now.com/creative-writing-resources.html",
    video: "https://www.youtube.com/embed/6S7yB12Gjxs",
  },
];

export default function English() {
  const sectionRefs = useRef({});

  const scrollToTopic = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="subject-page ms-5 ps-4">
      <h1 className="mb-3">English</h1>
      <h4 className="mt-4">Why should we study English?</h4>
      <p className="mb-4">
        "English empowers us to connect, communicate, and express ourselves in ways that shape our world. It is the medium through which we explore ideas, share stories, and understand cultures. From writing persuasive essays to analyzing literary masterpieces, mastering English opens doors to opportunities in every facet of life."
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
