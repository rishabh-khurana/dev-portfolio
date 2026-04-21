type Experience = {
  position: string;
  company: string;
  url: string;
  location: string;
  timeline: string;
  points: string[];
  formerly?: { name: string; url: string };
};

const experiences: Experience[] = [
  {
    position: "Software Engineer",
    company: "Atlassian",
    url: "https://www.atlassian.com",
    location: "Sydney, Australia",
    timeline: "Dec 2022 — Present",
    points: [
      "As a growth engineer, spearheaded the development of over 12 experimental features and contributed to more than 35 features across 3 flagship Atlassian products.",
      "Led end-to-end development and launch of a React Ad campaign module on Jira Home serving ~500K daily users, implementing memoization and API caching strategies; drove a 22% increase in purchases and a 2.3K annual uplift in a key Jira sub-product within the first year.",
      "Implemented comprehensive unit tests using Jest and end-to-end automated tests with Playwright, increasing test coverage to 90%+ and reducing production regressions by 40% within 6 months.",
      "Defined and implemented SLOs for owned components, introducing monitoring and response workflows that maintained 99.9%+ uptime and reduced MTTR by 30% within 12 months.",
      "Partnered with Customer Support to debug production issues, led post-incident reviews, and implemented corrective action plans that reduced repeat incidents.",
      "Led end-to-end feature performance evaluation with Data Science using SQL in Databricks, Amplitude dashboards, and analytics instrumentation; delivered executive-ready reports within 30 days.",
    ],
  },
  {
    position: "Software Engineer",
    company: "Fixitfaster",
    url: "https://www.fixitfaster.com",
    formerly: { name: "Tooezy", url: "https://www.tooezy.com" },
    location: "Sydney, Australia",
    timeline: "Sept 2020 — Dec 2022",
    points: [
      "Created end-to-end bash automation scripts for continuous deployment on AWS Elastic Beanstalk (Node.js/Express backend) and AWS Lightsail (front-end static files).",
      "Integrated third-party APIs using OAuth2 for workforce management and payment systems including Stripe; created custom APIs for data analytics.",
      "Built and deployed an open source Grafana analytics server showcasing over 50,000 data points across multiple chart types.",
      "Developed and deployed components for a React Native mobile app and React.js web app serving 10,000+ customers and 350 businesses for real-time job booking.",
      "Spearheaded system design for a phone format normalisation protocol and a framework for integrating workforce management systems.",
      "Documented R&D modules that led to a research grant worth $140,000.",
    ],
  },
  {
    position: "Application Developer Analyst",
    company: "Accenture",
    url: "https://www.accenture.com",
    location: "Frankfurt, Germany",
    timeline: "Nov 2017 — May 2018",
    points: [
      "Collaborated with a core team of 5 engineers to build and deploy a digital banking platform serving 900,000 new corporate customers.",
      "Demonstrated MVP product features to key project stakeholders.",
      "Automated the code-deployment process (single-click deployment), increasing developer efficiency by 20%.",
      "Conducted code reviews and peer programming sessions to share best practices and improve overall code quality.",
      "Conducted technical workshops for junior team members on web technologies, filling knowledge gaps across the team.",
    ],
  },
  {
    position: "Application Developer Associate",
    company: "Accenture",
    url: "https://www.accenture.com",
    location: "Pune, India",
    timeline: "May 2016 — Nov 2017",
    points: [
      "Implemented screen adaptation feature enabling websites to run seamlessly across all device types.",
      "Collaborated with 5 product owners to design a landing page that improved customer engagement.",
      "Created and maintained technical features documentation and coding guidelines, increasing project efficiency.",
      "Fixed bugs and made enhancements in web applications, reducing website load time by 30%.",
      "Automated product-functionality testing, reducing the testing process duration by 50%.",
      "Integrated third-party APIs with web applications, boosting customer engagement and sales by 20%.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experience-list">
      {experiences.map((exp) => (
        <div key={exp.timeline} className="experience-entry">
          <div className="experience-header">
            <span className="experience-position">
              {exp.position}
              <span className="experience-company">
                {" "}
                ·{" "}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  {exp.company}
                </a>
                , {exp.location}
              </span>
            </span>
            <span className="experience-timeline">{exp.timeline}</span>
          </div>
          <hr className="experience-divider" />
          <ul className="experience-points">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {exp.formerly && (
            <p className="experience-formerly">
              Now operating as{" "}
              <a
                href={exp.formerly.url}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-link"
              >
                Tooezy
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
