/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Shoaib",
  title: "Nice to meet you! I'm Shoaib",
  subTitle: emoji(
    "A software craftsman who loves building elegant, user-friendly web applications. 🚀"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hafizmuhammadshoaib",
  linkedin: "https://www.linkedin.com/in/shoaib-silat-b3a6a813a/",
  gmail: "shoaibsilat9@gmail.com",
  gitlab: "https://gitlab.com/hafizmuhammadshoaib",
  facebook: "https://web.facebook.com/hafizmuhammad.shoaib/",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/8317797/hafizmuhammad-shoaib",
  twitter: "https://twitter.com/shoaibsilat",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop responsive and user-friendly web applications using modern technologies such as React, Angular, and NestJS."
    ),
    emoji(
      "⚡ Write clean, efficient, and maintainable code that adheres to industry best practices and standards."
    ),
    emoji(
      "⚡ Design and implement scalable, high-performance databases using MySQL and Postgres."
    ),
    emoji(
      "⚡ Solve complex problems and optimize application performance through the use of algorithms and data structures."
    ),
    emoji(
      "⚡ Collaborate with cross-functional teams to deliver high-quality software products on time and within budget."
    ),
    emoji(
      "⚡ Practice continuous learning and self-improvement by regularly practicing coding challenges and studying system design."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hamdard University",
      logo: require("./assets/images/hamdard-university.jpeg"),
      subHeader: "Bachelors of Computer System Engineering",
      duration: "Feb 2015 - Jan 2019"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Diya Interactive",
      companylogo: require("./assets/images/diya.png"),
      date: "Feb 2019 – Oct 2019",
      desc: `As a full-stack developer and DevOps guy at Diya Interactive, a Stockholm-based company.`,
      descBullets: [
        "Leveraged my expertise in AngularJS, React, Flask, and MySQL as a full-stack developer at Diya Interactive, a Swedish company based in Stockholm that serves clients in Sweden and beyond.",
        "Contributed to the development of a recruitment system that streamlined the hiring process for organizations, making it easier and more efficient for them to identify and onboard top talent."
      ]
    },
    {
      role: "Software Engineer",
      company: "10Pearls",
      companylogo: require("./assets/images/10pearls.jpeg"),
      date: "Oct 2019 – July 2021",
      desc: "Worked as a MERN stack / Golang developer",
      descBullets: [
        "Contributed to the development of a telemedicine health platform application by fixing bugs on both the frontend web/android and backend Node.js applications",
        "Developed new features and fixed bugs on a React Native weather app reporting application",
        "Built a frontend for an ecommerce (laundry) application using React.js and volunteered to manage DevOps tasks, deploying the entire stack on an EC2 instance on AWS."
      ]
    },
    {
      role: "Sr. Software Engineer",
      company: "10Pearls",
      companylogo: require("./assets/images/10pearls.jpeg"),
      date: "Aug 2021 – Present",
      desc: "Worked as a MERN stack / Golang developer",
      descBullets: [
        "Contributing to the development of an education platform application as a full-stack MERN stack/Golang developer. Specifically, wrote the frontend using React.js and the backend using AWS-CDK lambda with Node.js",
        "Assisting a developer in Golang tasks on another project."
      ]
    },
    {
      role: "Sr. Software Engineer",
      company: "Airlift Technologies",
      companylogo: require("./assets/images/airlift.jpeg"),
      date: "Jan 2022 – June 2022",
      desc: "Worked as a Backend developer",
      descBullets: [
        "Implemented clean and maintainable backend code for a delivery operation application using Node.js (NestJS) and PostgreSQL.",
        "Established CI/CD pipelines to ensure code quality by checking code linting and running unit/integration tests.",
        "Investigated and resolved a 502 issue on servers, and implemented mitigation measures to prevent similar issues from happening in the future.",
        "Wrote unit tests for the API using Jest and an internally-developed framework.",
        "Proactively monitored the application for bugs, user feedback, and performance, and recommended improvements and fixes as needed.",
        "Managed a sub-team of developers in the implementation of new features.",
        "Mentored fresh graduates in their daily tasks and encouraged adherence to best practices in code development."
      ]
    },
    {
      role: "Sr. Software Engineer",
      company: "DGlobal",
      companylogo: require("./assets/images/din-global.jpeg"),
      date: "Aug 2022 - Oct 2022",
      desc: "Worked as a Full-Stack developer",
      descBullets: [
        "Set up CI/CD pipelines using Github and ArgoCD for React and Node.js applications.",
        "Deployed React and Node.js applications using Docker images and Helm charts on a k8s stack.",
        "Created a basic structure for ReactJS and Nestjs applications."
      ]
    },
    {
      role: "Sr. Software Engineer",
      company: "Rewaa",
      companylogo: require("./assets/images/rewaa.jpeg"),
      date: "Nov 2022 - Present",
      desc: "Working as a Full-Stack developer",
      descBullets: [
        "Improving code quality of Angular and Node.js by practicing clean code and writing test cases with Jest and Test Bed",
        "Optimizing frontend build to reduce page load time",
        "Implementing best practices and optimizing frontend to avoid duplicate API calls and remove subscription to prevent memory leaks",
        "Collaborating with the team to identify and resolve issues, and suggest improvements for the application.",
        "Developing new features and functionalities for the Angular-Node.js application."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/fenix.svg"),
      projectName: "Fenix",
      projectDesc: "I helped them creating their backend on Golang and gRPC",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fenix.life/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Shoaib-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Looking to build something amazing together?",
  number: "+92-3367887046",
  email_address: "shoaibsilat9@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "shoaibsilat", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
