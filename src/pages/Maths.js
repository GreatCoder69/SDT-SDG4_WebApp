import React, { useRef } from "react";
import "./SubjectPage.css";

const topics = [
  {
    id: "calculus",
    title: "Calculus",
    description:
      "Calculus is the mathematical study of continuous change, dealing with rates of change and the accumulation of quantities. It includes differential and integral calculus, which are foundational to modern science and engineering. From physics to economics, calculus helps us model and understand dynamic systems.",
    pdf: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/",
    video: "https://www.youtube.com/embed/WUvTyaaNkzM",
    resource: "Khan Academy - [Calculus](https://www.khanacademy.org/math/calculus-1)"
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    description:
      "Linear Algebra is the branch of mathematics concerned with vectors, matrices, and linear transformations. It provides the framework for solving systems of linear equations and is essential in computer graphics, machine learning, and engineering. Its concepts also form the basis for many real-world computational applications.",
    pdf: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/",
    video: "https://www.youtube.com/embed/kjBOesZCoqc",
    resource: "MIT OpenCourseWare - [Linear Algebra](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/)"
  },
  {
    id: "probability",
    title: "Probability",
    description:
      "Probability is the study of randomness and uncertainty, helping us understand the likelihood of different outcomes. It's the foundation for statistics and plays a crucial role in fields like data science, finance, and artificial intelligence. Whether predicting weather or modeling risks, probability is key to informed decision-making.",
    pdf: "https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/",
    video: "https://www.youtube.com/embed/KzfWUEJjG18",
    resource: "Khan Academy - [Probability](https://www.khanacademy.org/math/probability)"
  },
  {
    id: "differential-equations",
    title: "Differential Equations",
    description:
      "Differential equations describe how quantities change in relation to each other, often over time. They are used to model real-world systems like population growth, motion, and electrical circuits. Engineers, physicists, and economists use them extensively to simulate and predict complex behaviors.",
    pdf: "https://ocw.mit.edu/courses/mathematics/18-03sc-differential-equations-fall-2011/",
    video: "https://www.youtube.com/embed/p_di4Zn4wz4",
    resource: "MIT OpenCourseWare - [Differential Equations](https://ocw.mit.edu/courses/mathematics/18-03sc-differential-equations-fall-2011/)"
  },
  {
    id: "real-analysis",
    title: "Real Analysis",
    description:
      "Real Analysis is the rigorous study of real numbers, sequences, series, and functions. It provides the theoretical foundation for calculus and is essential for higher-level pure mathematics. By focusing on precise definitions and logical reasoning, real analysis develops deep mathematical thinking.",
    pdf: "https://ocw.mit.edu/courses/mathematics/18-100c-real-analysis-spring-2010/",
    video: "https://www.youtube.com/embed/eGDtW3BZyyE",
    resource: "Paul’s Online Math Notes - [Real Analysis](https://tutorial.math.lamar.edu/Classes/RealAnalysis/RealAnalysis.aspx)"
  },
  {
    id: "discrete-math",
    title: "Discrete Math",
    description:
      "Discrete Mathematics deals with countable, distinct structures such as integers, graphs, and logical statements. It underpins computer science topics like algorithms, cryptography, and data structures. Because it avoids continuity, it's ideal for modeling digital systems and solving computational problems.",
    pdf: "https://www.math.illinois.edu/courses/discrete-mathematics/",
    video: "https://www.youtube.com/embed/sD0NjbwqlYw",
    resource: "Khan Academy - [Discrete Math](https://www.khanacademy.org/computing/computer-science/algorithms)"
  }
];


export default function Maths() {
  const sectionRefs = useRef({});

  const scrollToTopic = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="subject-page ms-5 ps-4">
      <h1 className="mb-3 text-center">Maths</h1>

      <h4 className="mt-4">Why should we study Maths?</h4>
      <p className="mb-4">
        Math sharpens your brain like a sword—boosting critical thinking, logic,
        and problem-solving skills that help you tackle challenges in every part
        of life. It's not just about numbers; it's the secret language of the
        universe, powering everything from smartphone apps to rocket launches.
        Whether you're designing algorithms or decoding patterns in nature, math
        is the foundation that makes modern science and technology possible—and
        honestly, it's kind of like magic once you get the hang of it.
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
            📄 View Notes
          </a>
        </div>
      ))}

      {/* Videos */}
      <h2 className="mt-5 mb-3 text-center">More Videos For You</h2>
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
