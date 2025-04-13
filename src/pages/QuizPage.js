import React, { useState } from "react";
import "./QuizPage.css";

const questions = [
  {
    question: "What is the integral of 1/x with respect to x?",
    options: ["ln|x| + C", "x + C", "e^x + C", "1/2x^2 + C"],
    answer: "ln|x| + C",
  },
  {
    question: "Which law is described by the equation F = ma?",
    options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Kepler's Law"],
    answer: "Newton's Second Law",
  },
  {
    question: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    answer: "Fluorine",
  },
  {
    question: "In a quadratic equation ax^2 + bx + c = 0, the discriminant (b^2 - 4ac) helps determine:",
    options: ["Number of solutions", "Slope of the parabola", "Symmetry of the equation", "Root positions"],
    answer: "Number of solutions",
  },
  {
    question: "What does the Schrödinger equation describe?",
    options: ["Wave function of a quantum system", "Time dilation", "Magnetic field behavior", "Fluid dynamics"],
    answer: "Wave function of a quantum system",
  },
  {
    question: "What is the primary function of ribosomes in a cell?",
    options: ["Protein synthesis", "DNA replication", "Energy production", "Lipid synthesis"],
    answer: "Protein synthesis",
  },
  {
    question: "What is the time complexity of the Merge Sort algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    question: "Which type of radiation is used in nuclear medicine for imaging?",
    options: ["Alpha radiation", "Beta radiation", "Gamma radiation", "Neutron radiation"],
    answer: "Gamma radiation",
  },
  {
    question: "Which novel by George Orwell is a critique of totalitarianism?",
    options: ["1984", "Animal Farm", "Brave New World", "The Great Gatsby"],
    answer: "1984",
  },
  {
    question: "The process by which green plants use sunlight to synthesize foods from carbon dioxide and water is called:",
    options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
    answer: "Photosynthesis",
  },
  {
    question: "Which law of thermodynamics states that energy cannot be created or destroyed, only transformed?",
    options: ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics", "Law of Entropy"],
    answer: "First Law of Thermodynamics",
  },
  {
    question: "Which concept in programming refers to the ability to create classes that can inherit properties and methods from other classes?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer: "Inheritance",
  },
  {
    question: "What is the molecular formula of glucose?",
    options: ["C6H12O6", "C12H22O11", "C6H10O5", "C6H14O7"],
    answer: "C6H12O6",
  },
  {
    question: "Which type of rock is formed from cooling and solidification of magma?",
    options: ["Sedimentary", "Metamorphic", "Igneous", "Volcanic"],
    answer: "Igneous",
  },
  {
    question: "Which organ is responsible for the production of insulin?",
    options: ["Liver", "Heart", "Pancreas", "Kidney"],
    answer: "Pancreas",
  },
  {
    question: "Which scientific principle does the Bernoulli’s equation rely on?",
    options: ["Conservation of momentum", "Conservation of energy", "Conservation of mass", "Archimedes’ principle"],
    answer: "Conservation of energy",
  },
  {
    question: "What type of chemical bond involves the sharing of electrons between atoms?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    answer: "Covalent bond",
  },
  {
    question: "What is the derivative of the function f(x) = ln(x^2 + 1)?",
    options: ["2x/(x^2 + 1)", "1/(x^2 + 1)", "2x", "ln(x^2 + 1)"],
    answer: "2x/(x^2 + 1)",
  },
  {
    question: "Which chemical reaction is associated with the release of energy, such as in cellular respiration?",
    options: ["Endothermic", "Exothermic", "Oxidation", "Reduction"],
    answer: "Exothermic",
  },
  {
    question: "Which of the following is the most likely to be used for fast data retrieval in a database?",
    options: ["Stack", "Queue", "Hash table", "Linked list"],
    answer: "Hash table",
  },
  {
    question: "Which of the following best describes the law of demand in economics?",
    options: ["As price increases, demand decreases", "As price increases, demand increases", "As price decreases, demand remains constant", "Price has no effect on demand"],
    answer: "As price increases, demand decreases",
  },
];


export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="quiz-page">
      <h1 className="quiz-heading">Quiz Time</h1>
      {!quizFinished ? (
        <div className="quiz-container">
          <div className="question">
            <h2>{questions[currentQuestion].question}</h2>
          </div>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedOption === option ? "selected" : ""}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="next-btn" onClick={handleNextClick}>
            Next Question
          </button>
        </div>
      ) : (
        <div className="result">
          <h2>Your Score: {score} / 20</h2>
          <button className="reset-btn" onClick={handleResetClick}>
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}
