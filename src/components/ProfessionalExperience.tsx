import React, { FC } from "react";
import { Section } from "./Section";
import { ExpandableText } from "./ExpandableText";
import { Skills } from "./Skills";

interface JobProps {
  company: string;
  role: string;
  team: string | null;
  timeline: string;
  location: string;
}

const Job: FC<JobProps> = ({ company, role, team, timeline, location }) => (
  <>
    <h3>{company}</h3>
    <h4>{role}</h4>
    {team && <h5>{team}</h5>}
    <h5>
      {timeline} | {location}
    </h5>
  </>
);

export const ProfessionalExperience: FC = () => {
  return (
    <Section alignment={"left"}>
      <h2>Professional Experience</h2>

      <Job
        company={"Meta"}
        role={"Software Engineer"}
        team={"Secure Product Authentication"}
        timeline={"October 2024 - Present"}
        location={"Remote (NJ)"}
      />
      <Skills proficient={["Hack", "C++"]} />

      <Job
        company={"Meta"}
        role={"Software Engineer"}
        team={"Account Access Infrastructure"}
        timeline={"September 2023 - October 2024"}
        location={"Remote (NJ)"}
      />
      <Skills proficient={["Hack", "React"]} />

      <Job
        company={"Facebook"}
        role={"Privacy Engineer"}
        team={"Privacy Incident Response Engineering"}
        timeline={"February 2022 - September 2023"}
        location={"Menlo Park, CA"}
      />
      <ExpandableText text={"Role + Responsibilities"}>
        <ul className={"list-container"}>
          <div className={"list"}>
            <li>
              Led the design and development of a Hack / React web app to power
              the computation, storage, and integrations required to quantify
              the impact of thousands of privacy incidents, enabling
              risk-quantification and incident prioritization across multiple
              teams.
            </li>
            <li>
              Enhanced and scaled a tool by updating the data consumed and
              produced to support all teams in the organization, providing
              cross-functional insights on privacy risk and product weaknesses.
            </li>
            <li>
              Added new training features and refined training dataset,
              improving the accuracy and recall of a Python supervised machine
              learning model, enabling earlier mitigation and remediation of
              hundreds of newly identified technical privacy incidents.
            </li>
            <li>
              Reduced data discrepancies and defined a single source of data for
              thousands of incidents by architecting and developing a
              vulnerability database in Hack.
            </li>
          </div>
        </ul>
      </ExpandableText>
      <Skills
        proficient={["Hack", "React", "Python", "GraphQL", "SQL"]}
        knowledgeable={["Machine Learning", "Mercurial"]}
      />
      <Skills
        proficient={[
          "Root Cause Analysis",
          "Variant Analysis",
          "Mitigation Validation",
          "Data Lineage Analysis",
          "Impact Data Analysis",
        ]}
      />

      <Job
        company={"Facebook"}
        role={"Privacy Engineering Intern"}
        team={"Privacy Incident Response Engineering"}
        timeline={"May 2021 - August 2021"}
        location={"Menlo Park, CA"}
      />
      <ExpandableText text={"Role + Responsibilities"}>
        <ul className={"list-container"}>
          <div className={"list"}>
            <li>
              Led the design and development of a Hack / React web app to power
              the computation, storage, and integrations required to quantify
              the impact of thousands of privacy incidents, enabling
              risk-quantification and incident prioritization across multiple
              teams.
            </li>
            <li>
              Enhanced and scaled a tool by updating the data consumed and
              produced to support all teams in the organization, providing
              cross-functional insights on privacy risk and product weaknesses.
            </li>
            <li>
              Added new training features and refined training dataset,
              improving the accuracy and recall of a Python supervised machine
              learning model, enabling earlier mitigation and remediation of
              hundreds of newly identified technical privacy incidents.
            </li>
            <li>
              Reduced data discrepancies and defined a single source of data for
              thousands of incidents by architecting and developing a
              vulnerability database in Hack.
            </li>
          </div>
        </ul>
      </ExpandableText>
      <Skills proficient={["Hack", "React", "SQL"]} />
      <Skills
        proficient={[
          "Root Cause Analysis",
          "Variant Analysis",
          "Mitigation Validation",
        ]}
      />

      <Job
        company={"Places For Less"}
        role={"Full-Stack Software Engineering Co-op"}
        team={null}
        timeline={"May 2020 - January 2021"}
        location={"Boston, MA"}
      />
      <ExpandableText text={"Role + Responsibilities"}>
        <ul className={"list-container"}>
          <div className={"list"}>
            <li>
              Architected and developed full-stack solutions using PHP, Laravel,
              Vue.js, and MariaDB for anonymously tracking web users, email
              subscriptions, and customizable pages for A / B tests.
            </li>
            <li>
              Integrated a PHP API with Twilio’s library, Gmail’s library, and
              Salesforce’s REST API to analyze and track user and client actions
              to improve sales team efficiency and effectiveness.
            </li>
            <li>
              Wrote SQL queries and leveraged Laravel ORM to aggregate and
              present metrics from tens of thousands of records to evaluate and
              provide insight into various marketing efforts.
            </li>
          </div>
        </ul>
      </ExpandableText>
      <Skills
        proficient={[
          "PHP",
          "Laravel",
          "Vue.js",
          "SQL",
          "Git",
          "Salesforce API",
          "Twilio API",
        ]}
      />

      <Job
        company={"Rocket Software"}
        role={"Software Engineering Co-op"}
        team={null}
        timeline={"July 2019 - December 2019"}
        location={"Waltham, MA"}
      />
      <ExpandableText text={"Role + Responsibilities"}>
        <ul className={"list-container"}>
          <div className={"list"}>
            <li>
              Implemented new features and bug fixes in a React / TypeScript web
              application that interacted with a REST API to enable efficiently
              managing multiple computer systems.
            </li>
            <li>
              Created utilities for use in a Java server shared by five projects
              to register, track, log, and wait for hundreds of threads to
              ensure a safe and complete system shutdown.
            </li>
          </div>
        </ul>
      </ExpandableText>
      <Skills
        proficient={["Java", "Python", "React", "TypeScript", "Git"]}
        knowledgeable={["Bash"]}
      />
    </Section>
  );
};

export default ProfessionalExperience;
