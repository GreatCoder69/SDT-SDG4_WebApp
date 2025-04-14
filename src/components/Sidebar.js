import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const subjects = [
  { name: "Maths", route: "/maths", img: "/maths.png" },
  { name: "Science", route: "/science", img: "/science.png" },
  { name: "English", route: "/english", img: "/english.png" },
  { name: "CS", route: "/cs", img: "/cs.png" },
  { name: "Biology", route: "/biology", img: "/biology.png" },
  { name: "SST", route: "/sst", img: "/sst.png" },
];

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column align-items-center justify-content-center py-3">
      <NavLink to="/home" className="home-btn mb-4">
        <img
          src="/home.png"
          alt="Home"
          className="subject-icon"
        />
      </NavLink>
      {subjects.map((sub, i) => (
        <NavLink key={i} to={sub.route} className="subject-link mb-4">
          <img
            src={sub.img}
            alt={sub.name}
            className="subject-icon"
          />
        </NavLink>
      ))}
    </div>
  );
}
