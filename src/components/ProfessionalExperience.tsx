import React, { FC } from "react";
import { Section } from "./Section";
import { Skills } from "./Skills";
import { Timeline, TimelineEntry } from "./Timeline";

interface JobProps {
  company: string;
  role: string;
  team: string | null;
  timeline: string;
  location: string;
  description: string;
}

const Job: FC<JobProps> = ({ company, role, team, timeline, location, description }) => (
  <>
    <h3>{company}</h3>
    <h4>{role}</h4>
    {team && <h5>{team}</h5>}
    <h5>{timeline} | {location}</h5>
    <p style={{ maxWidth: "520px" }}>{description}</p>
  </>
);

export const ProfessionalExperience: FC = () => {
  return (
    <Section id="experience" alignment={"left"}>
      <h2>Professional Experience</h2>

      <Timeline>
        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Software Engineer"}
            team={"AI Security"}
            timeline={"February 2026 - Present"}
            location={"NJ (Remote)"}
            description={"Building policy enforcement systems and security tooling to protect AI agent sessions and detect insecure code across Meta's AI platforms."}
          />
          <Skills proficient={["Hack", "Rust", "TypeScript"]} />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Software Engineer"}
            team={"Secure Product Auth"}
            timeline={"October 2024 - February 2026"}
            location={"NJ (Remote)"}
            description={"Hardening authentication infrastructure across Facebook, Instagram, and Threads through 2FA security, session management, and account integrity improvements."}
          />
          <Skills proficient={["Hack", "C++", "Python"]} />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Software Engineer"}
            team={"Meta Account Access Infra"}
            timeline={"September 2023 - October 2024"}
            location={"NJ (Remote)"}
            description={"Building federated identity registration APIs and account access infrastructure supporting millions of users migrating to Meta's next-gen identity platform."}
          />
          <Skills proficient={["Hack", "React", "GraphQL"]} />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Privacy Engineer"}
            team={"Incident Response"}
            timeline={"February 2022 - September 2023"}
            location={"Menlo Park, CA"}
            description={"Designing tooling and ML systems to detect, quantify, and prioritize privacy incidents across Meta products."}
          />
          <Skills
            proficient={["Hack", "React", "Python", "GraphQL", "SQL"]}
            knowledgeable={["Machine Learning"]}
          />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Facebook"}
            role={"Privacy Engineering Intern"}
            team={"Incident Response"}
            timeline={"May 2021 - August 2021"}
            location={"Menlo Park, CA (Remote)"}
            description={"Built a web application to quantify and investigate technical privacy incidents across Meta products."}
          />
          <Skills proficient={["Hack", "React", "SQL"]} />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Places For Less"}
            role={"Full-Stack Software Engineering Co-op"}
            team={null}
            timeline={"May 2020 - January 2021"}
            location={"Boston, MA"}
            description={"Developed full-stack web solutions and third-party API integrations to support marketing and sales operations."}
          />
          <Skills
            proficient={["PHP", "Laravel", "Vue.js", "SQL", "Git", "Salesforce API", "Twilio API"]}
          />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Rocket Software"}
            role={"Software Engineering Co-op"}
            team={null}
            timeline={"July 2019 - December 2019"}
            location={"Waltham, MA"}
            description={"Implemented features in a React/TypeScript web application and built concurrent thread-management utilities in Java."}
          />
          <Skills
            proficient={["Java", "React", "TypeScript", "Git"]}
            knowledgeable={["Bash"]}
          />
        </TimelineEntry>
      </Timeline>
    </Section>
  );
};

export default ProfessionalExperience;
