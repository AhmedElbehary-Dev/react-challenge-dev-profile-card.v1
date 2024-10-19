import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="my-image.jpeg" alt="my image" className="avatar" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Ahmed Elbehary</h1>
      <p>i'm a .NET full-stack developer, since 2017.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill=".NET" emoje="🥰" colorCode="#2980b9" />
      <Skill skill="JavaScript" emoje="🫶" colorCode="#9b59b6" />
      <Skill skill="HTML" emoje="😂" colorCode="#d35400" />
      <Skill skill="CSS" emoje="😎" colorCode="#bdc3c7" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.colorCode }}>
      {props.skill} {props.emoje}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
