export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    contact: Contact;
    work: Work[];
    education: Education[];
    skills: string[];
}

export interface Contact {
    email: string,
    tel: string,
    social: Social[];
}

export interface Social {
    name: string;
    url: string;
}

export interface Work {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
    achievements?: string[];
    badges?: string[];
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string | null;
}

export const CV_DATA: CV = {
    name: "Dmitry Zhuk",
    title: "Software Engineer",
    location: "Minsk, Belarus",
    locationLink: "https://www.google.com/maps/place/Minsk",
    about: "Results-driven Software Engineer dedicated to building high-quality products.",
    summary: `A Software Engineer specializing in developing high-performance, scalable projects using Java and 
        Spring Boot. I have extensive experience building core functionalities for complex platforms in FinTech, iGaming, 
        and healthcare.`,
    personalWebsiteUrl: "https://dzhuk.com",
    contact: {
        email: "dmitryzhuk98@gmail.com",
        tel: "+375295559327",
        social: [
            {name: "GitHub", url: "https://github.com/zhukdi"},
            {name: "LinkedIn", url: "https://linkedin.com/in/zhukdi"},
        ],
    },
    work: [
        {
            company: "Dzengi.com",
            link: "https://www.linkedin.com/company/dzengicom/",
            title: "Java Software Engineer",
            start: "May 2024",
            end: "Present",
            description: "Develop and maintain backend microservices for a high-performance, multi-asset trading platform.",
            achievements: [
                "Engineer scalable microservices with Java 21 and Spring Boot for user management, trade execution, and onboarding.",
                "Implement an event-driven architecture with Kafka for reliable, real-time data processing between services.",
                "Develop secure RESTful APIs using the OpenAPI standard for frontend and internal system integration.",
                "Manage PostgreSQL schema evolution and data integrity using Liquibase for database migrations.",
                "Monitor system performance and health using Grafana and OpenSearch to ensure high availability."
            ],
            badges: ["Java 21", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Liquibase", "JUnit", "Mockito", "Testcontainers", "AWS",
                "Docker", "REST", "OpenAPI", "Grafana", "OpenSearch", "k6"],
        },
        {
            company: "Wisercat, CATCO Technologies",
            link: "https://www.linkedin.com/company/catco-tech",
            title: "Full Stack Engineer",
            start: "December 2022",
            end: "April 2024",
            description: "Contributed to the development of a high-intensity, B2B gambling platform built on a microservice architecture.",
            achievements: [
                "Developed and maintained scalable backend microservices using Java 11 and Spring Boot to support core gaming and business logic.",
                "Engineered high-performance data solutions using Apache Ignite / GridGain as an In-Memory Data Platform",
                "Built real-time, interactive features for live gaming events by implementing WebSockets with the STOMP protocol.",
                "Designed and implemented RESTful APIs to facilitate seamless integration with third-party gaming services and internal clients."
            ],
            badges: ["Java 11", "Spring Boot", "WebSockets", "STOMP", "GridGain", "Apache Ignite", "Angular",
                "TypeScript", "AWS", "Docker"],
        },
        {
            company: "EffectiveSoft",
            link: "https://www.linkedin.com/company/effectivesoft",
            title: "Java Software Engineer",
            start: "August 2021",
            end: "November 2022",
            description: `Developed solutions for diverse projects, including a healthcare cloud-sync feature, a GIS 
                visualization platform, and an internal automation tool.`,
            achievements: [
                "Built and maintained backend services for enterprise web apps using Java and Spring.",
                "Implemented cloud-native features using AWS services like Lambda, S3, IoT and KMS.",
                "Managed relational (PostgreSQL, MySQL, SQLite) and NoSQL (DynamoDB) databases, using Liquibase for schema evolution.",
                "Ensured application quality with comprehensive unit and integration testing using JUnit, Spock, and Testcontainers."
            ],
            badges: ["Java 11", "Spring Boot", "AWS", "PostgreSQL", "SQLite", "JUnit", "Spock", "Testcontainers"],
        },
        {
            company: "IBA Group",
            link: "https://www.linkedin.com/company/iba-group",
            title: "Java Software Engineer",
            start: "December 2017",
            end: "July 2021",
            description: "Developed and maintained a full-stack enterprise billing and subscriber management system within the telecommunications industry.",
            achievements: [
                "Engineered and implemented RESTful APIs and backend business logic using a Java EE stack, including EJB, JAX-RS, and Hibernate",
                "Built and enhanced responsive, user interfaces using modern frameworks like Angular and component libraries such as Primefaces."
            ],
            badges: ["Java 8", "EJB", "JAX-RS", "Hibernate", "Maven", "Wildfly", "Jaspersoft", "Oracle", "Angular",
                "Primefaces", "UIkit"],
        }
    ],
    education: [
        {
            school: "Belarusian State University",
            degree: "Bachelor's degree, Mathematics and information technologies",
            start: "2015",
            end: "2019",
        },
    ],
    skills: [
        "Java (8, 11, 21)", "Spring Boot", "Hibernate", "Kafka", "Maven", "AWS", "Angular", "SQL", "PostreSQL", "Docker",
        "JUnit", "Mockito", "REST"
    ],
};