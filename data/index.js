// Project Images
// import ByOthersImg from "@/assets/images/projects/by_others.jpg";
import CerenDImg from "@/assets/images/projects/ceren_d.jpg";
import CIYANOImg from "@/assets/images/projects/ciyano.png";
import MarketVistaImg from "@/assets/images/projects/market_vista.jpg";
import RokarAfricaImg from "@/assets/images/projects/rokar_africa.jpg";
import RokarGlobalImg from "@/assets/images/projects/rokar_global.jpg";
import GinnyImg from "@/assets/images/projects/ginny_the_bartender.jpg";
import QuerbarImg from "@/assets/images/projects/querbar.webp";
import RKImg from "@/assets/images/rk.jpg";

// Service Images
import AppDevImg from "@/assets/images/services/app_dev.jpg";
import MobileAppDevImg from "@/assets/images/services/mobile_app_dev.jpg";
import WebsiteDevImg from "@/assets/images/services/website_dev.jpg";
import AIEngineeringImg from "@/assets/images/services/neural_network.jpg";
import PromptEngineeringImg from "@/assets/images/services/prompt_engineering.jpg";
import DataAnalyticsImg from "@/assets/images/services/data_analytics.jpg";
import ProgrammingEducationImg from "@/assets/images/services/scratch_programming.jpg";

export const emailAddress = "mrodin.karadeniz@gmail.com";

export const sources = [
  [
    {
      name: "music",
      href: "https://pixabay.com/music/traditional-jazz-jazz-vibrant-upbeat-246219/",
    },
  ],
];

export const icons = {
  hamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6h16" />
      <path d="M7 12h13" />
      <path d="M10 18h10" />
    </svg>
  ),
  music: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-music"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M9 17v-13h10v13" />
      <path d="M9 8h10" />
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16.5 7.5l0 .01" />
    </svg>
  ),
  x: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
    >
      <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
    </svg>
  ),
  copy: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-copy"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  ),
  arrowupright: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 7l-10 10" />
      <path d="M8 7l9 0l0 9" />
    </svg>
  ),
  check: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  ),
  arrow_left: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M5 12l6 6" />
      <path d="M5 12l6 -6" />
    </svg>
  ),
  arrow_right: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  ),
};

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const projects = [
  {
    title: "Ginny the Bartender",
    type: "Cocktail Information & Recommendation System • Web & Mobile App",
    description:
      "A web and mobile app that allows users to create and share cocktails, and search for cocktails by name or ingredients.",
    year: 2025,
    demo: "",
    github: "https://github.com/tugayapucu/Ginny-PersonalBartender",
    image: GinnyImg,
    highlight: true,
  },
  {
    title: "RK Reservations",
    type: "Reservation System • Web Application",
    description: "A reservation system for a restaurant.",
    year: 2025,
    demo: "https://rk-reservations.vercel.app/",
    github: "",
    image: null,
    highlight: false,
  },
  {
    title: "Rokar Africa",
    type: "Agriculture & Recycling • Company Website",
    description:
      "A company website that showcases the company's products and services on agriculture, recycling, and sustainable development.",
    year: 2024,
    demo: "https://rokarafrica.com",
    github: "",
    image: RokarAfricaImg,
    highlight: true,
  },
  {
    title: "Rokar Global",
    type: "Property Management • Company Website",
    description:
      "A company website that showcases the company's products and services on construction and property management.",
    year: 2024,
    demo: "https://rokarglobal.com",
    github: "",
    image: RokarGlobalImg,
    highlight: false,
  },
  {
    title: "CIYANO",
    type: "Environment-friendly Packaging • Company Website",
    description:
      "A company website that showcases the company's products and services on environment-friendly packaging.",
    year: 2025,
    demo: "https://ciyano.com",
    github: "",
    image: CIYANOImg,
    highlight: true,
  },
  // {
  //   title: "By Others Corp.",
  //   type: "Construction • Web Application",
  //   description:
  //     "Specializing in the design, fabrication, and installation of high-quality building envelope systems for commercial and institutional projects.",
  //   year: 2025,
  //   demo: "https://by-others.ca/",
  //   github: "",
  //   image: ByOthersImg,
  //   highlight: false,
  // },
  {
    title: "Perihan Karadeniz",
    type: "Consultant • Business Website",
    description: "A website for business and personal consulting services.",
    year: 2025,
    demo: "https://perihankaradeniz.com/",
    github: "",
    image: null,
    highlight: false,
  },
  {
    title: "Querbar",
    type: "Bar • Company Website ",
    description: "A Bar website.",
    year: 2025,
    demo: "https://querbar.de/",
    github: "",
    image: QuerbarImg,
    highlight: false,
  },
  {
    title: "MarketVista",
    type: "Real-time Shelf Data Platform • Company Website",
    description:
      "A company website that showcases the company's products and services on real-time shelf data platform.",
    year: 2025,
    demo: "https://market-vista.com",
    github: "",
    image: MarketVistaImg,
    highlight: false,
  },
  {
    title: "Ceren D.",
    type: "PhD Candidate • Personal Website",
    description:
      "A portfolio website for a PhD candidate, showcasing her research and publications.",
    year: 2025,
    demo: "https://ceren-demirci.vercel.app/",
    github: "",
    image: CerenDImg,
    highlight: false,
  },
  {
    title: "RK",
    type: "Personal Website",
    description: "I have built my own website as well. Duh.",
    year: 2025,
    demo: "https://rodinkaradeniz.com",
    github: "https://github.com/rodinKaradeniz/rk-portfolio",
    image: RKImg,
    highlight: false,
  },
];

export const services = [
  {
    title: "Software Development",
    desc: "Enterprise-grade backend systems and scalable applications built with modern frameworks. I develop robust solutions using Java, Spring Boot, and cloud-native technologies with full DevOps integration.",
    tools: [
      "Java",
      "Spring Boot",
      "Python",
      "Node.js",
      "NPM",
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
    ],
    image: AppDevImg,
    imgSrc:
      "https://unsplash.com/photos/two-black-flat-screen-computer-monitors-LJ9KY8pIH3E",
  },
  {
    title: "Website Development",
    desc: "Modern, responsive web applications built with React and Next.js. I create fast, SEO-optimized sites with integrated backend services and real-time functionality.",
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
      "Supabase",
      "Appwrite",
    ],
    image: WebsiteDevImg,
    imgSrc: "https://unsplash.com/photos/a-computer-on-a-desk-FQ3lFA4Zi58",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications developed with React Native and Expo. I build native-feeling apps that work seamlessly on both iOS and Android with optimized performance.",
    tools: ["React Native", "Expo", "TailwindCSS"],
    image: MobileAppDevImg,
    imgSrc:
      "https://unsplash.com/photos/person-using-black-smartphone-with-gray-and-pink-case-cqFKhqv6Ong",
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent systems and predictive models using deep learning frameworks. I develop custom AI solutions from neural networks to large language models for automation and decision support.",
    tools: [
      "Neural Networks",
      "Deep Learning",
      "LLMs",
      "Natural Language Processing",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Hugging Face",
      "NLTK",
    ],
    image: AIEngineeringImg,
    imgSrc:
      "https://unsplash.com/photos/low-angle-photography-of-metal-structure-ZiQkhI7417A",
  },
  {
    title: "Prompt Engineering",
    desc: "Specialized AI prompt optimization and model fine-tuning services. I craft effective prompts and implement LangChain workflows to maximize AI model performance for your specific use cases.",
    tools: ["OpenAI", "Llama 2", "LangChain", "Hugging Face"],
    image: PromptEngineeringImg,
    imgSrc:
      "https://unsplash.com/photos/a-person-typing-on-a-laptop-on-a-table-adrO5seSbBE",
  },
  {
    title: "Data Analytics",
    desc: "Data-driven insights and visualization solutions using Python and business intelligence tools. I transform complex datasets into clear, actionable reports and interactive dashboards.",
    tools: ["Python", "Pandas", "Power BI", "Tableau"],
    image: DataAnalyticsImg,
    imgSrc: "https://unsplash.com/photos/graphical-user-interface--WXQm_NTK0U",
  },
  {
    title: "Programming & Robotics Education",
    desc: "Hands-on coding and robotics instruction using LEGO Mindstorms and modern programming languages. I teach practical skills from basic concepts to advanced robotics applications.",
    tools: [
      "Python",
      "LEGO Spike Prime",
      "EV3 Mindstorms",
      "Scratch",
      "Arduino",
      "JavaScript",
    ],
    image: ProgrammingEducationImg,
    imgSrc:
      "https://unsplash.com/photos/person-holding-white-ipad-on-white-table-hLvQ4-QEBAE",
  },
];

export const socialMediaIcons = [
  {
    icon: icons.linkedin,
    href: "https://www.linkedin.com/in/m-rodin-karadeniz/",
  },
  {
    icon: icons.github,
    href: "https://github.com/rodinKaradeniz",
  },
  {
    icon: icons.x,
    href: "https://x.com/rodink98",
  },
];

// Instead of static imports, use dynamic imports
export const getProjectImage = async (imageName) => {
  const { default: image } = await import(
    `@/assets/images/projects/${imageName}`
  );
  return image;
};
