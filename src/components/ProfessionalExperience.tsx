import React, { FC } from "react";
import { Section } from "./Section";
import { ExpandableText } from "./ExpandableText";
import { Skills } from "./Skills";
import { Timeline, TimelineEntry } from "./Timeline";

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
    <Section id="experience" alignment={"left"}>
      <h2>Professional Experience</h2>

      <Timeline>
        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Software Engineer"}
            team={"AI Security"}
            timeline={"February 2026 - Present"}
            location={"New York, NY"}
          />
          <ExpandableText text={"Role + Responsibilities"}>
            <ul className={"list-container"}>
              <div className={"list"}>
                <li>
                  Designed and built a VS Code extension integrating CodeShield
                  (automated insecure code detection) into the AI code authoring
                  loop, ensuring security vulnerabilities are caught and remediated
                  before code is committed.
                </li>
                <li>
                  Enhanced the Agent Security Platform&apos;s detection framework
                  for securing AI agents, adding granular rule configuration and
                  improved alerting capabilities as AI agents become more autonomous
                  and prevalent.
                </li>
                <li>
                  Designed and built Agent Security Guardrails (ASG), a 3-tiered
                  policy enforcement engine (static rules &rarr; runtime session
                  analysis &rarr; LLM inspection) protecting 17M+ AI agent sessions
                  across Claude Code surfaces; shipped 34 policy rules and a 36-test
                  E2E CI framework, deployed default-on to 100% of Meta Claude Code
                  users.
                </li>
              </div>
            </ul>
          </ExpandableText>
          <Skills proficient={["Hack", "Rust", "TypeScript"]} />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Software Engineer"}
            team={"Secure Product Auth"}
            timeline={"October 2024 - Present"}
            location={"New York, NY"}
          />
          <ExpandableText text={"Role + Responsibilities"}>
            <ul className={"list-container"}>
              <div className={"list"}>
                <li>
                  Led deprecation of legacy 2FA TOTP key storage across Facebook and
                  Instagram, migrating all key creation and validation into a
                  centralized authentication service in Hack; prevents key
                  decryption outside secure backend services and hardens the 2FA
                  chain-of-trust.
                </li>
                <li>
                  Designed and implemented offline session re-signing for Facebook
                  and Instagram in Hack, enabling mass re-keying of stored sessions
                  using a new crypto key without user disruption; reduces key
                  compromise risk and enables account unification.
                </li>
                <li>
                  Collaborated with the security investigations team on account
                  takeover detection improvements, achieving a 15x reduction in
                  false positives and an estimated 1% reduction in measured account
                  compromise events.
                </li>
                <li>
                  Extended 2FA session signing enforcement to Threads, preventing
                  authentication bypass vulnerabilities; built a Hack / React
                  developer tool for self-service authentication debugging and
                  incident investigation.
                </li>
              </div>
            </ul>
          </ExpandableText>
          <Skills proficient={["Hack", "C++"]} />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Software Engineer"}
            team={"Meta Account Access Infra"}
            timeline={"September 2023 - October 2024"}
            location={"New York, NY"}
          />
          <ExpandableText text={"Role + Responsibilities"}>
            <ul className={"list-container"}>
              <div className={"list"}>
                <li>
                  Served as technical owner of federated identity registration APIs
                  across multiple Meta platforms; designed account creation,
                  confirmation, and contact point APIs in Hack / GraphQL supporting
                  millions of users migrating to Meta&apos;s next-gen identity
                  platform.
                </li>
                <li>
                  Unified account confirmation across legacy and next-gen identity
                  systems behind a single API; reduced risk by auditing ~70
                  callsites and consolidating contact verification behind a single
                  interface.
                </li>
                <li>
                  Designed and delivered end-to-end client-side logging encryption
                  in Hack, evaluating architectural tradeoffs and coordinating
                  cross-functional alignment with logging infrastructure teams.
                </li>
              </div>
            </ul>
          </ExpandableText>
          <Skills proficient={["Hack", "React", "GraphQL"]} />
        </TimelineEntry>

        <TimelineEntry>
          <Job
            company={"Meta"}
            role={"Privacy Engineer"}
            team={"Incident Response"}
            timeline={"February 2022 - September 2023"}
            location={"Menlo Park, CA"}
          />
          <ExpandableText text={"Role + Responsibilities"}>
            <ul className={"list-container"}>
              <div className={"list"}>
                <li>
                  Designed and built the Privacy Vulnerability Scoring System (PVSS)
                  end-to-end in Hack / React, enabling risk-quantification and
                  prioritization of thousands of privacy incidents; drove adoption
                  from 0% to 100% SLO mandate across multiple teams.
                </li>
                <li>
                  Built a privacy incident staleness tracker in Hack, increasing the
                  rate of privacy incidents closed within SLO by 19%.
                </li>
                <li>
                  Improved recall of a privacy incident detection Python ML model by
                  18% by refactoring training infrastructure and expanding training
                  data; the system identifies ~15% of all privacy incidents across
                  Meta.
                </li>
                <li>
                  Architected a vulnerability database in Hack to serve as a single
                  source of truth linking privacy incidents, tasks, and security data
                  across teams.
                </li>
              </div>
            </ul>
          </ExpandableText>
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
          />
          <ExpandableText text={"Role + Responsibilities"}>
            <ul className={"list-container"}>
              <div className={"list"}>
                <li>
                  Designed and built a React web app to quantify the severity of
                  hundreds of technical privacy incidents per month; performed root
                  cause and variant analysis to surface and mitigate new issues
                  across multiple products.
                </li>
              </div>
            </ul>
          </ExpandableText>
          <Skills proficient={["Hack", "React", "SQL"]} />
        </TimelineEntry>

        <TimelineEntry>
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
                  Integrated a PHP API with Twilio, Gmail, and Salesforce REST APIs
                  to track user and client actions and improve sales team efficiency.
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
        </TimelineEntry>

        <TimelineEntry>
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
                  Created Java thread-management utilities for a server shared by
                  five projects to safely register, track, and shut down hundreds of
                  concurrent threads.
                </li>
              </div>
            </ul>
          </ExpandableText>
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
