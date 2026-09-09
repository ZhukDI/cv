import type {CV} from "./cv";

// Fictional CV data for the live demo of the theme.
// All names, companies, links and contacts are placeholders — swap them for
// your own data in src/data/cv.ts (or rename this file and edit it).
export const DEMO_CV: CV = {
    name: "Alex Doe",
    title: "Software Engineer",
    location: "London, UK",
    locationLink: "https://www.google.com/maps/place/London",
    about: "Full-stack Software Engineer focused on shipping reliable, user-friendly products.",
    summary: `A full-stack Software Engineer specializing in TypeScript, React and Node.js. I have experience
        building SaaS platforms from zero to launch across e-commerce, healthcare and analytics.`,
    personalWebsiteUrl: "https://example.com",
    contact: {
        email: "alex.doe@example.com",
        tel: "+447700900123",
        social: [
            {name: "GitHub", url: "https://github.com/alexdoe"},
            {name: "LinkedIn", url: "https://linkedin.com/in/alexdoe"},
        ],
    },
    work: [
        {
            company: "Acme Cloud",
            link: "https://example.com/acme-cloud",
            title: "Senior Full Stack Engineer",
            start: "March 2023",
            end: null,
            description: "Building a real-time analytics SaaS platform used by thousands of teams.",
            achievements: [
                "Lead development of a multi-tenant dashboard serving over 1 million events per day.",
                "Designed a GraphQL API layer that cut average page data payloads by 40%.",
                "Introduced end-to-end testing with Playwright, reducing production regressions by a third.",
                "Mentor three junior engineers and run the team's frontend guild."
            ],
            badges: ["TypeScript", "React", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Docker", "Playwright"],
        },
        {
            company: "Nexa Labs",
            link: "https://example.com/nexa-labs",
            title: "Full Stack Developer",
            start: "June 2021",
            end: "February 2023",
            description: "Developed a headless e-commerce platform for mid-market retailers.",
            achievements: [
                "Built checkout and inventory services with Node.js and PostgreSQL, processing millions in monthly GMV.",
                "Implemented SSR storefronts with Next.js, improving Lighthouse performance from 62 to 97.",
                "Automated CI/CD pipelines and blue-green deployments on AWS ECS."
            ],
            badges: ["TypeScript", "Next.js", "Node.js", "Redis", "MongoDB", "AWS", "Terraform"],
        },
        {
            company: "Vertex Health",
            link: "https://example.com/vertex-health",
            title: "Frontend Developer",
            start: "September 2019",
            end: "May 2021",
            description: "Worked on a patient portal serving clinics across Europe.",
            achievements: [
                "Delivered accessible (WCAG 2.1 AA) booking and prescription flows used by 200k+ patients.",
                "Migrated a legacy jQuery codebase to React, halving bundle size.",
                "Set up design tokens and a shared component library adopted by four teams."
            ],
            badges: ["React", "Redux", "TypeScript", "SCSS", "Jest", "Storybook"],
        },
        {
            company: "Orbit Software",
            link: "https://example.com/orbit-software",
            title: "Web Developer",
            start: "July 2017",
            end: "August 2019",
            description: "Built marketing sites and internal tools for a digital agency's clients.",
            achievements: [
                "Shipped 20+ production websites with JavaScript, PHP and WordPress.",
                "Automated asset builds with Gulp, cutting release time from hours to minutes."
            ],
            badges: ["JavaScript", "PHP", "WordPress", "MySQL", "Gulp"],
        },
    ],
    education: [
        {
            school: "University of London",
            degree: "BSc Computer Science",
            start: "2013",
            end: "2017",
        },
    ],
    skills: [
        "TypeScript", "React", "Node.js", "Next.js", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker",
        "Jest", "Playwright", "Git"
    ],
};
