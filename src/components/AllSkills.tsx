import React, { FC } from "react";
import { Skills } from "./Skills";
import style from "./styles/AllSkills.module.css";

export const AllSkills: FC = () => {
  return (
    <div className={style.highlights}>
      <Skills
        header={"Languages, Libraries, & Frameworks"}
        proficient={[
          "Hack",
          "PHP",
          "Python",
          "GraphQL",
          "Laravel",
          "React",
          "JavaScript",
          "TypeScript",
          "Java",
          "HTML",
          "CSS",
          "SQL",
        ]}
        knowledgeable={["C++", "Vue.js", "Go"]}
      />
      <Skills
        header={"Other Software"}
        proficient={["Git", "Docker"]}
        knowledgeable={["AWS", "GDB"]}
      />
      <Skills
        header={"Other Skills"}
        proficient={[
          "Root Cause Analysis",
          "Variant Analysis",
          "Incident Impact Analysis",
          "Mitigation Validation",
          "Remediation Validation",
          "Data Lineage Analysis",
        ]}
      />
      <Skills
        header={"Personal Interests"}
        proficient={["Dogs", "Running", "Snowboarding", "Traveling", "Cooking"]}
      />
    </div>
  );
};

export default AllSkills;
