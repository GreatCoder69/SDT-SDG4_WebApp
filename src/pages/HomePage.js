import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="homepage-container">
      <h1 className="main-heading">EduBridge</h1>

      <div className="goals-section">
      <p>At EduBridge, we’re fully dedicated to SDG 4: Quality Education. We believe education is a fundamental right, not a privilege, and we're here to make sure everyone, no matter their background, has access to high-quality learning. Our platform is designed for lifelong learners, offering resources across subjects like Maths, Science, English, Computer Science, Biology, and Social Studies. We go beyond textbooks, integrating interactive quizzes, video lessons, and detailed materials to cater to diverse learning styles.</p>

      <p>We’re passionate about fostering critical thinking, problem-solving, and creativity. Through our curated quizzes and video content, we equip students with the skills needed for today’s world—boosting analytical abilities and digital literacy. It’s not just about knowledge transfer, but empowering learners to use that knowledge to make a real impact in their personal and professional lives.</p>

      <p>Inclusivity and accessibility are at the core of EduBridge. We’ve made sure that learners from all walks of life can access quality education by offering free resources, multilingual content, and a mobile-friendly platform. Our interactive group features help foster a collaborative environment where students share ideas and support each other’s growth, strengthening the learning community.</p>

      <p>Aligned with SDG 4, we believe in lifelong learning. EduBridge supports students beyond the classroom with continuous updates, skill-building workshops, and assessments. We’re part of the solution in creating a world where education never stops, making sure everyone has access to the knowledge and opportunities they need to succeed, both now and in the future.</p>

      </div>

      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/dKip3rpuEvY"
          title="United Nations Quality Education"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="quiz-heading">Quiz Time</h2>
      <p className="quiz-description">
        Dive into a quiz crafted from our curated subjects. Test your knowledge across Maths, Science, English, CS, Biology, and SST — and discover where you shine!
      </p>

      <button className="quiz-btn" onClick={handleQuizClick}>
        Take the Quiz
      </button>

      <h3 className="quiz-heading">Group Members</h3>
      <ul className="group-list">
        <li>Arshabrata Bhaumik (230953166)</li>
        <li>Karthik Pai (230953268)</li>
        <li>Abhishek Jadhav (230953360)</li>
        <li>Sachith V P (230953202)</li>
      </ul>
    </div>
  );
}
